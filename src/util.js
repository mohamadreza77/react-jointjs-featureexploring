/**
 * Scans the entire graph.
 * If a node (Child) is physically inside another node (Parent)
 * AND the Parent's rules allow that Child type,
 * it automatically embeds the Child.
 */
const autoEmbedAll = (graph) => {
  // 1. Get all elements (ignore links)
  const elements = graph.getElements();

  // 2. Iterate through every potential parent
  elements.forEach((parent) => {
    // Optimization: Skip if this node has no rules (it's not a container)
    // We check the static 'rules' property we defined in shapes.js
    const parentRules = parent.rules;

    if (!parentRules || !parentRules.canEmbed) return;

    // 3. Check every potential child against this parent
    elements.forEach((child) => {
      // Don't check the parent against itself
      if (child.id === parent.id) return;

      // --- CHECK A: LOGIC (The Metamodel) ---
      // Does the parent allow this type of child?
      if (parentRules.canEmbed(child)) {
        parent.embed(child);
        console.log(
          `Auto-Embedded: ${child.attributes.type} -> ${parent.attributes.type}`
        );
      }
    });
  });
};

export default autoEmbedAll;
