import { useEffect, useRef } from "react";
import * as joint from "jointjs";
import { Family, Man, Woman, HasMen, HasWomen } from "./shapes";
import autoEmbedAll from "./util";

export default function JointEditor() {
  const containerRef = useRef(null);

  useEffect(() => {
    const graph = new joint.dia.Graph();

    const paper = new joint.dia.Paper({
      el: containerRef.current,
      model: graph,
      width: 900,
      height: 600,
      gridSize: 10,
      drawGrid: true,
      restrictTranslate: function (elementView) {
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

        if (parent.rules && parent.rules.getCompartmentSelector) {
          const selector = parent.rules.getCompartmentSelector(element);
          // Get the BBox of that specific SVG sub-element (the compartment rect)
          // We use the view to get the actual rendered coordinates
          const parentView = elementView.paper.findViewByModel(parent);
          // console.log(parentView);
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
      },
    });

    // Create Family
    const family = new Family();
    family.position(100, 100);
    family.addTo(graph);

    // Create Man (Position him in the LEFT compartment)
    const man = new Man();
    // Family is at x=100. Left compartment is roughly 100 to 300.
    man.position(440, 480);
    man.addTo(graph);

    // Create Woman (Position her in the RIGHT compartment)
    const woman = new Woman();
    // Family is at x=100. Right compartment starts at x=300 (100 + 50% width).
    woman.position(350, 180);
    woman.addTo(graph);

    autoEmbedAll(graph);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
    />
  );
}
