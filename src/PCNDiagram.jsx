import { useEffect, useRef } from "react";
import * as joint from "jointjs";
import { restrictTranslate, autoEmbedAll } from "./util";
import { LeftDir, LeftSur, PCNProcessEntity } from "./PCNDiagramElements";

export default function Editor() {
  const containerRef = useRef(null);

  useEffect(() => {
    const graph = new joint.dia.Graph();

    const paper = new joint.dia.Paper({
      el: containerRef.current,
      model: graph,
      width: 900,
      height: 900,
      gridSize: 10,
      drawGrid: true,
      restrictTranslate: restrictTranslate
    });
    

    // Create Family
    const PCNDiagramElements = new PCNProcessEntity();
    PCNDiagramElements.position(100, 100);
    PCNDiagramElements.addTo(graph);

    // Create Man (Position him in the LEFT compartment)
    const leftDir = new LeftDir();
    // Family is at x=100. Left compartment is roughly 100 to 300.
    leftDir.position(440, 480);
    leftDir.addTo(graph);

    // Create Woman (Position her in the RIGHT compartment)
    const leftSur = new LeftSur();
    // Family is at x=100. Right compartment starts at x=300 (100 + 50% width).
    leftSur.position(350, 180);
    leftSur.addTo(graph);

    autoEmbedAll(graph);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
    />
  );
}
