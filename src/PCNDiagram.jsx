import { useEffect, useRef } from "react";
import * as joint from "jointjs";
import { restrictTranslate, autoEmbedAll } from "./util";
import {
  PCNDoAndWaitStep_CompartmentLeftDir,
  PCNDoAndWaitStep_CompartmentRightDir,
  PCNMonetaryBenefit_CompartmentStandardProcessTags1,
  PCNProcessEntity,
  PCNStandardStep_CompartmentLeftDir,
  PCNStandardStep_CompartmentLeftSur,
  PCNStandardStep_CompartmentRightDir,
  PCNWaitStep_CompartmentLeftSur,
} from "./PCNDiagramElements";

export default function Editor() {
  const containerRef = useRef(null);

  useEffect(() => {
    const graph = new joint.dia.Graph();

    const paper = new joint.dia.Paper({
      el: containerRef.current,
      model: graph,
      width: 1800,
      height: 900,
      gridSize: 10,
      drawGrid: true,
      restrictTranslate: restrictTranslate,
    });

    // Create Family
    const PCNDiagramElements = new PCNProcessEntity();
    PCNDiagramElements.position(100, 100);
    PCNDiagramElements.addTo(graph);

    const pcnStandardStep = new PCNStandardStep_CompartmentLeftDir();
    pcnStandardStep.addTo(graph);
    const pcnDoAndWaitStep = new PCNDoAndWaitStep_CompartmentLeftDir();
    pcnDoAndWaitStep.addTo(graph);



    const pcnInnovationStep = new PCNStandardStep_CompartmentRightDir();
    pcnInnovationStep.addTo(graph);
    const pcnDoAndWaitStep2 = new PCNDoAndWaitStep_CompartmentRightDir();
    pcnDoAndWaitStep2.addTo(graph);



    const pcnStandardStep44 = new PCNStandardStep_CompartmentLeftSur();
    pcnStandardStep44.addTo(graph);
    const pcnStandardStep3 = new PCNWaitStep_CompartmentLeftSur();
    pcnStandardStep3.addTo(graph);

    const pcnStandardStep2 =
      new PCNMonetaryBenefit_CompartmentStandardProcessTags1();
    pcnStandardStep2.addTo(graph);

    autoEmbedAll(graph, paper);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
    />
  );
}
