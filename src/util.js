/**
 * Scans the entire graph.
 * If a node (Child) is physically inside another node (Parent)
 * AND the Parent's rules allow that Child type,
 * it automatically embeds the Child.
 */
import * as joint from "jointjs";

export const autoEmbedAll = (graph, paper) => {
  // 1. Get all elements (ignore links)
  const elements = graph.getElements();

  // 2. Iterate through every potential parent
  elements.forEach((parent) => {
    // Optimization: Skip if this node has no rules (it's not a container)
    // We check the static 'rules' property we defined in shapes.js
    const parentRules = parent.constructor.rules;

    if (!parentRules || !parentRules.canEmbed) return;

    // 3. Check every potential child against this parent
    elements.forEach((child) => {
      // Don't check the parent against itself
      if (child.id === parent.id) return;

      // --- CHECK A: LOGIC (The Metamodel) ---
      // Does the parent allow this type of child?
      if (parentRules.canEmbed(child)) {
        parent.embed(child);
        // We want to determiene the position of the child here
        // 2. Determine Position
        // We need the parent's View to find sub-elements (compartments)
        const parentView = paper.findViewByModel(parent);
        
        // Default position: Center of the parent
        let targetBBox = parent.getBBox(); 

        // IF the parent defines specific compartments (like 'restrictTranslate')
        if (parentRules.getCompartmentSelector && parentView) {
          const selector = parentRules.getCompartmentSelector(child);
          const compartmentNode = parentView.findBySelector(selector)[0];

          if (compartmentNode) {
            // Get the global bounding box of that specific compartment
            targetBBox = joint.V(compartmentNode).bbox(false, paper.viewport);
          }
        }

        // 3. Center the child inside the target area (Compartment or Parent)
        const width = child.getBBox().width;
        const height = child.getBBox().height;
        
        // simple centering math
        const centerX = targetBBox.x + (targetBBox.width / 2) - (width / 2);
        const centerY = targetBBox.y + (targetBBox.height / 2) - (height / 2);

        child.position(centerX, centerY);
      }
    });
  });
};

export function restrictTranslate(elementView) {
  const element = elementView.model;
  const parentId = element.get("parent");

  // 1. If no parent, allow movement anywhere (or restrict to paper boundary)
  if (!parentId) {
    return false; // No restriction
  }

  // 2. Get the Parent Element
  const parent = element.graph.getCell(parentId);

  // 3. (Optional) Check our Metamodel Rule from Step 1
  // Does the parent have a rule for where this child belongs?
  let boundaryBBox = parent.getBBox(); // Default to entire parent;

  if (
    parent.constructor.rules &&
    parent.constructor.rules.getCompartmentSelector
  ) {
    const selector = parent.constructor.rules.getCompartmentSelector(element);
    // Get the BBox of that specific SVG sub-element (the compartment rect)
    // We use the view to get the actual rendered coordinates
    const parentView = elementView.paper.findViewByModel(parent);
    const compartmentNode = parentView.findBySelector(selector)[0];
    if (compartmentNode) {
      // 3. THE FIX: Use joint.V() to calculate coordinates relative to the Paper
      // joint.V(node).bbox(rotate, viewport) transform the local coordinates to global
      boundaryBBox = joint
        .V(compartmentNode)
        .bbox(false, elementView.paper.viewport);
    }
  }

  // 4. Return the allowed area
  // (We subtract the element's own size so it doesn't bleed over the edge)
  return boundaryBBox;
}
