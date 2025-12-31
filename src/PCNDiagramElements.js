import * as joint from "jointjs";


export const PCNProcessEntity = joint.dia.Element.define(
  "custom.PCNProcessEntity",
  {
    // Visual Attributes
    size: { width: 800, height: 600 },
    attrs: {
      // The Main Outer Border
      TopProcessEntityFigure: {
        refWidth: "100%",
        refHeight: "10%",
        refX: "0%",
        refY: "0%",
        fill: "#FFFFFF",
        stroke: "#000000ff",
        // The path data: 
        // M 0 30   -> Start at left, 30px down (start of rectangle)
        // L 50 0   -> Line to top middle (tip of triangle)
        // L 100 30 -> Line to right, 30px down (end of triangle)
        // Z        -> Close path
        d: 'M 0 100 L 400 0 L 800 100 Z',
      },

      dashedLine1: {
        rfefWidth: '0%',
        refHeight: '83%',
        refX: '0%',
        refY: '17%',
        d: 'M 160 0 L 160 498',
        stroke: '#000000ff',
      },
      dashedLine2: {
        rfefWidth: '0%',
        refHeight: '83%',
        refX: '0%',
        refY: '17%',
        d: 'M 320 0 L 320 498',
        stroke: '#000000ff',
      },
      dashedLine3: {
        rfefWidth: '0%',
        refHeight: '83%',
        refX: '0%',
        refY: '17%',
        d: 'M 480 0 L 480 498',
        stroke: '#000000ff',
      },
      dashedLine4: {
        rfefWidth: '0%',
        refHeight: '83%',
        refX: '0%',
        refY: '17%',
        d: 'M 640 0 L 640 498',
        stroke: '#000000ff',
      },
      
      nameLabel: {
        // fill: '#795548',
        // fontSize: 16,
        // fontWeight: 'bold',
        refX: '45%',
        refY: "12%", // 20px from top
        refWidth: "25%",
        refHeight: "3%"
        // textAnchor: 'middle'
      },
      orderLabel: {
        // fill: '#795548',
        // fontSize: 16,
        // fontWeight: 'bold',
        refX: '50%',
        refY: "7%", // 20px from top
        refWidth: "5%",
        refHeight: "3%"
        // textAnchor: 'middle'
      },
      CompartmentLeftDir: {
        refWidth: "20%", // Take up 1/5 the width
        refHeight: "80%", // Take up remaining height
        refX: "0%", // Start at the left edge
        refY: "20%", // Start below the header
        fill: "rgba(255, 255, 255, 1)",
        // stroke: "#000000ff",
        // strokeWidth: 1,
        // strokeDasharray: '5,5' // Dashed line to imply "internal area"
      },
      CompartmentLeftSur: {
        refWidth: "20%",
        refHeight: "80%",
        refX: "20%", // Start after the left compartment
        refY: "20%",
        fill: "rgba(255, 255, 255, 1)",
        // stroke: "#000000ff",
        // strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      CompartmentInd: {
        refWidth: "20%",
        refHeight: "80%",
        refX: "40%", // Start after the left compartments
        refY: "20%",
        fill: "rgba(255, 255, 255, 1)",
        // stroke: "#000000ff",
        // strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      CompartmentRightSur: {
        refWidth: "20%",
        refHeight: "80%",
        refX: "60%", // Start at the middle
        refY: "20%",
        fill: "rgba(255, 255, 255, 1)",
        // stroke: "#000000ff",
        // strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      CompartmentRightDir: {
        refWidth: "20%",
        refHeight: "80%",
        refX: "80%", // Start at the middle
        refY: "20%",
        fill: "rgba(255, 255, 255, 1)",
        // stroke: "#000000ff",
        // strokeWidth: 1,
        // strokeDasharray: '5,5'
      },

      ButtonProcessEntityFigure: {
        refWidth: "100%",
        refHeight: "100%",
        refX: "0%",
        refY: "0%",
        d: "M 0 599 L 800 599", 
        stroke: "rgba(0, 0, 0, 1)",
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "path", selector: "TopProcessEntityFigure" },
      { tagName: 'text', selector: 'nameLabel' },
      { tagName: 'text', selector: 'orderLabel' },
      { tagName: "rect", selector: "CompartmentLeftSur" },
      { tagName: "rect", selector: "CompartmentInd" },
      { tagName: "rect", selector: "CompartmentRightSur" },
      { tagName: "rect", selector: "CompartmentRightDir" },
      { tagName: "rect", selector: "CompartmentLeftDir" },
      { tagName: "path", selector: "dashedLine1" },
      { tagName: "path", selector: "dashedLine2" },
      { tagName: "path", selector: "dashedLine3" },
      { tagName: "path", selector: "dashedLine4" },
      { tagName: "path", selector: "ButtonProcessEntityFigure" },
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNStandardStep_CompartmentLeftDir",
          "custom.PCNDoAndWaitStep_CompartmentLeftDir",
          "custom.PCNWaitStep_CompartmentLeftDir",
          "custom.PCNInnovationStep_CompartmentLeftDir",
          "custom.PCNOutsourcedStep_CompartmentLeftDir",
          "custom.PCNDecisionStep_CompartmentLeftDir",
          "custom.PCNReference_CompartmentLeftDir",

          "custom.PCNStandardStep_CompartmentLeftSur",
          "custom.PCNDoAndWaitStep_CompartmentLeftSur",
          "custom.PCNWaitStep_CompartmentLeftSur",
          "custom.PCNInnovationStep_CompartmentLeftSur",
          "custom.PCNOutsourcedStep_CompartmentLeftSur",
          "custom.PCNDecisionStep_CompartmentLeftSur",
          "custom.PCNReference_CompartmentLeftSur",
          
          "custom.PCNStandardStep_CompartmentInd",
          "custom.PCNDoAndWaitStep_CompartmentInd",
          "custom.PCNWaitStep_CompartmentInd",
          "custom.PCNInnovationStep_CompartmentInd",
          "custom.PCNOutsourcedStep_CompartmentInd",
          "custom.PCNDecisionStep_CompartmentInd",
          "custom.PCNReference_CompartmentInd",

          "custom.PCNStandardStep_CompartmentRightSur",
          "custom.PCNDoAndWaitStep_CompartmentRightSur",
          "custom.PCNWaitStep_CompartmentRightSur",
          "custom.PCNInnovationStep_CompartmentRightSur",
          "custom.PCNOutsourcedStep_CompartmentRightSur",
          "custom.PCNDecisionStep_CompartmentRightSur",
          "custom.PCNReference_CompartmentRightSur",
          
          "custom.PCNStandardStep_CompartmentRightDir",
          "custom.PCNDoAndWaitStep_CompartmentRightDir",
          "custom.PCNWaitStep_CompartmentRightDir",
          "custom.PCNInnovationStep_CompartmentRightDir",
          "custom.PCNOutsourcedStep_CompartmentRightDir",
          "custom.PCNDecisionStep_CompartmentRightDir",
          "custom.PCNReference_CompartmentRightDir",
        ];
        return allowed.includes(type);
      },

      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNStandardStep_CompartmentLeftDir") return "CompartmentLeftDir"; // The SVG selector
        if (type === "custom.PCNDoAndWaitStep_CompartmentLeftDir") return "CompartmentLeftDir"; // The SVG selector
        if (type === "custom.PCNWaitStep_CompartmentLeftDir") return "CompartmentLeftDir"; // The SVG selector
        if (type === "custom.PCNInnovationStep_CompartmentLeftDir") return "CompartmentLeftDir"; // The SVG selector
        if (type === "custom.PCNOutsourcedStep_CompartmentLeftDir") return "CompartmentLeftDir"; // The SVG selector
        if (type === "custom.PCNDecisionStep_CompartmentLeftDir") return "CompartmentLeftDir"; // The SVG selector
        if (type === "custom.PCNReference_CompartmentLeftDir") return "CompartmentLeftDir"; // The SVG selector

        if (type === "custom.PCNStandardStep_CompartmentLeftSur") return "CompartmentLeftSur"; // The SVG selector
        if (type === "custom.PCNDoAndWaitStep_CompartmentLeftSur") return "CompartmentLeftSur"; // The SVG selector
        if (type === "custom.PCNWaitStep_CompartmentLeftSur") return "CompartmentLeftSur"; // The SVG selector
        if (type === "custom.PCNInnovationStep_CompartmentLeftSur") return "CompartmentLeftSur"; // The SVG selector
        if (type === "custom.PCNOutsourcedStep_CompartmentLeftSur") return "CompartmentLeftSur"; // The SVG selector
        if (type === "custom.PCNDecisionStep_CompartmentLeftSur") return "CompartmentLeftSur"; // The SVG selector
        if (type === "custom.PCNReference_CompartmentLeftSur") return "CompartmentLeftSur"; // The SVG selector

        if (type === "custom.PCNStandardStep_CompartmentInd") return "CompartmentInd"; // The SVG selector
        if (type === "custom.PCNDoAndWaitStep_CompartmentInd") return "CompartmentInd"; // The SVG selector
        if (type === "custom.PCNWaitStep_CompartmentInd") return "CompartmentInd"; // The SVG selector
        if (type === "custom.PCNInnovationStep_CompartmentInd") return "CompartmentInd"; // The SVG selector
        if (type === "custom.PCNOutsourcedStep_CompartmentInd") return "CompartmentInd"; // The SVG selector
        if (type === "custom.PCNDecisionStep_CompartmentInd") return "CompartmentInd"; // The SVG selector
        if (type === "custom.PCNReference_CompartmentInd") return "CompartmentInd"; // The SVG selector

        if (type === "custom.PCNStandardStep_CompartmentRightSur") return "CompartmentRightSur"; // The SVG selector
        if (type === "custom.PCNDoAndWaitStep_CompartmentRightSur") return "CompartmentRightSur"; // The SVG selector
        if (type === "custom.PCNWaitStep_CompartmentRightSur") return "CompartmentRightSur"; // The SVG selector
        if (type === "custom.PCNInnovationStep_CompartmentRightSur") return "CompartmentRightSur"; // The SVG selector
        if (type === "custom.PCNOutsourcedStep_CompartmentRightSur") return "CompartmentRightSur"; // The SVG selector
        if (type === "custom.PCNDecisionStep_CompartmentRightSur") return "CompartmentRightSur"; // The SVG selector
        if (type === "custom.PCNReference_CompartmentRightSur") return "CompartmentRightSur"; // The SVG selector

        if (type === "custom.PCNStandardStep_CompartmentRightDir") return "CompartmentRightDir"; // The SVG selector
        if (type === "custom.PCNDoAndWaitStep_CompartmentRightDir") return "CompartmentRightDir"; // The SVG selector
        if (type === "custom.PCNWaitStep_CompartmentRightDir") return "CompartmentRightDir"; // The SVG selector
        if (type === "custom.PCNInnovationStep_CompartmentRightDir") return "CompartmentRightDir"; // The SVG selector
        if (type === "custom.PCNOutsourcedStep_CompartmentRightDir") return "CompartmentRightDir"; // The SVG selector
        if (type === "custom.PCNDecisionStep_CompartmentRightDir") return "CompartmentRightDir"; // The SVG selector
        if (type === "custom.PCNReference_CompartmentRightDir") return "CompartmentRightDir"; // The SVG selector
        return null;
      },
    },
  }
);


// left dir elements
export const PCNStandardStep_CompartmentLeftDir = joint.dia.Element.define(
  "custom.PCNStandardStep_CompartmentLeftDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
      actionLabel: { 
        text: 'Action field here',  
        refX: '18%',
        refY: '28%',
        refWidth: '90px',
        refHeight: '44%',
        whiteSpace: 'normal',
      }
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" },
      { tagName: 'text', selector: 'actionLabel' }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNTextualTags_CompartmentStandardProcessTags",
          "custom.PCNSyncTag_CompartmentStandardProcessTags",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNDoAndWaitStep_CompartmentLeftDir = joint.dia.Element.define(
  "custom.PCNDoAndWaitStep_CompartmentLeftDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNWaitStep_CompartmentLeftDir = joint.dia.Element.define(
  "custom.PCNWaitStep_CompartmentLeftDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNInnovationStep_CompartmentLeftDir = joint.dia.Element.define(
  "custom.PCNInnovationStep_CompartmentLeftDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNOutsourcedStep_CompartmentLeftDir = joint.dia.Element.define(
  "custom.PCNOutsourcedStep_CompartmentLeftDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNDecisionStep_CompartmentLeftDir = joint.dia.Element.define(
  "custom.PCNDecisionStep_CompartmentLeftDir",
  {
    // Visual Attributes
    size: { width: 140, height: 140 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNReference_CompartmentLeftDir = joint.dia.Element.define(
  "custom.PCNReference_CompartmentLeftDir",
  {
    // Visual Attributes
    size: { width: 36, height: 36 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);

// left sur elements 
export const PCNStandardStep_CompartmentLeftSur = joint.dia.Element.define(
  "custom.PCNStandardStep_CompartmentLeftSur",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags1",
          "custom.PCNMonetaryCost_CompartmentStandardProcessTags1",
          "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags1",
          "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags1",
          "custom.PCNTextualTags_CompartmentStandardProcessTags1",
          "custom.PCNSyncTag_CompartmentStandardProcessTags1",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNDoAndWaitStep_CompartmentLeftSur = joint.dia.Element.define(
  "custom.PCNDoAndWaitStep_CompartmentLeftSur",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: 'rgba(255, 255, 255, 0.5)',
        // stroke: 'black',
        // strokeWidth: 1,
        // rx: 8,
        // ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags1",
          "custom.PCNMonetaryCost_CompartmentStandardProcessTags1",
          "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags1",
          "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags1",
          "custom.PCNTextualTags_CompartmentStandardProcessTags1",
          "custom.PCNSyncTag_CompartmentStandardProcessTags1",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags1") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNWaitStep_CompartmentLeftSur = joint.dia.Element.define(
  "custom.PCNWaitStep_CompartmentLeftSur",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNInnovationStep_CompartmentLeftSur = joint.dia.Element.define(
  "custom.PCNInnovationStep_CompartmentLeftSur",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNTextualTags_CompartmentStandardProcessTags",
          "custom.PCNSyncTag_CompartmentStandardProcessTags",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNOutsourcedStep_CompartmentLeftSur = joint.dia.Element.define(
  "custom.PCNOutsourcedStep_CompartmentLeftSur",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNTextualTags_CompartmentStandardProcessTags",
          "custom.PCNSyncTag_CompartmentStandardProcessTags",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNDecisionStep_CompartmentLeftSur = joint.dia.Element.define(
  "custom.PCNDecisionStep_CompartmentLeftSur",
  {
    // Visual Attributes
    size: { width: 140, height: 140 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNTextualTags_CompartmentStandardProcessTags",
          "custom.PCNSyncTag_CompartmentStandardProcessTags",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNReference_CompartmentLeftSur = joint.dia.Element.define(
  "custom.PCNReference_CompartmentLeftSur",
  {
    // Visual Attributes
    size: { width: 36, height: 36 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#293129ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [
      { tagName: "rect", selector: "CompartmentStandardProcessTags" },
      { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags",
          "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags",
          "custom.PCNTextualTags_CompartmentStandardProcessTags",
          "custom.PCNSyncTag_CompartmentStandardProcessTags",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag_CompartmentStandardProcessTags") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);

// ind elements

// right sur elements

// right dir elements
export const PCNStandardStep_CompartmentRightDir = joint.dia.Element.define(
  "custom.PCNStandardStep_CompartmentRightDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNDoAndWaitStep_CompartmentRightDir = joint.dia.Element.define(
  "custom.PCNDoAndWaitStep_CompartmentRightDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNWaitStep_CompartmentRightDir = joint.dia.Element.define(
  "custom.PCNWaitStep_CompartmentRightDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNInnovationStep_CompartmentRightDir = joint.dia.Element.define(
  "custom.PCNInnovationStep_CompartmentRightDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNOutsourcedStep_CompartmentRightDir = joint.dia.Element.define(
  "custom.PCNOutsourcedStep_CompartmentRightDir",
  {
    // Visual Attributes
    size: { width: 140, height: 90 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNDecisionStep_CompartmentRightDir = joint.dia.Element.define(
  "custom.PCNDecisionStep_CompartmentRightDir",
  {
    // Visual Attributes
    size: { width: 140, height: 140 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);
export const PCNReference_CompartmentRightDir = joint.dia.Element.define(
  "custom.PCNReference_CompartmentRightDir",
  {
    // Visual Attributes
    size: { width: 36, height: 36 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 8,
        ry: 8,
      },
      CompartmentStandardProcessTags: {
        refWidth: '100%',
        refHeight: '100%',
        fill: 'rgba(255, 255, 255, 0.5)',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
    },
  },
  {
    // Visual Structure
    markup: [{ tagName: "rect", selector: "CompartmentStandardProcessTags" },
    { tagName: "rect", selector: "body" }
    ],
  },
  {
    // Behavior
    rules: {
      canEmbed: function (childElement) {
        const type = childElement.get("type");
        // Define accepted types
        const allowed = [
          "custom.PCNMonetaryBenefit",
          "custom.PCNMonetaryCost",
          "custom.PCNNonMonetaryBenefit",
          "custom.PCNNonMonetaryCost",
          "custom.PCNTextualTags",
          "custom.PCNSyncTag",
        ];
        return allowed.includes(type);
      },
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function (childElement) {
        const type = childElement.get("type");
        if (type === "custom.PCNMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNMonetaryCost") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryBenefit")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNNonMonetaryCost")
          return "CompartmentStandardProcessTags";
        if (type === "custom.PCNTextualTags") return "CompartmentStandardProcessTags";
        if (type === "custom.PCNSyncTag") return "CompartmentStandardProcessTags";
        return null;
      },
    },
  }
);



export const PCNMonetaryBenefit_CompartmentStandardProcessTags = joint.dia.Element.define(
  "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags",
  {
    size: { width: 14, height: 14 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#ff0000ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }, {

  }
);
export const PCNMonetaryCost_CompartmentStandardProcessTags = joint.dia.Element.define(
  "custom.PCNMonetaryCost_CompartmentStandardProcessTags",
  {
    size: { width: 14, height: 14 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNNonMonetaryBenefit_CompartmentStandardProcessTags = joint.dia.Element.define(
  "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags",
  {
    size: { width: 15, height: 15 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNNonMonetaryCost_CompartmentStandardProcessTags = joint.dia.Element.define(
  "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags",
  {
    size: { width: 15, height: 15 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNTextualTags_CompartmentStandardProcessTags = joint.dia.Element.define(
  "custom.PCNTextualTags_CompartmentStandardProcessTags",
  {
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNSyncTag_CompartmentStandardProcessTags = joint.dia.Element.define(
  "custom.PCNSyncTag_CompartmentStandardProcessTags",
  {
    size: { width: 60, height: 30 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);


export const PCNMonetaryBenefit_CompartmentStandardProcessTags1 = joint.dia.Element.define(
  "custom.PCNMonetaryBenefit_CompartmentStandardProcessTags1",
  {
    size: { width: 14, height: 14 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#ff0000ff",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }, {

  }
);
export const PCNMonetaryCost_CompartmentStandardProcessTags1 = joint.dia.Element.define(
  "custom.PCNMonetaryCost_CompartmentStandardProcessTags1",
  {
    size: { width: 14, height: 14 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNNonMonetaryBenefit_CompartmentStandardProcessTags1 = joint.dia.Element.define(
  "custom.PCNNonMonetaryBenefit_CompartmentStandardProcessTags1",
  {
    size: { width: 15, height: 15 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNNonMonetaryCost_CompartmentStandardProcessTags1 = joint.dia.Element.define(
  "custom.PCNNonMonetaryCost_CompartmentStandardProcessTags1",
  {
    size: { width: 15, height: 15 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNTextualTags_CompartmentStandardProcessTags1 = joint.dia.Element.define(
  "custom.PCNTextualTags_CompartmentStandardProcessTags1",
  {
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);
export const PCNSyncTag_CompartmentStandardProcessTags1 = joint.dia.Element.define(
  "custom.PCNSyncTag_CompartmentStandardProcessTags1",
  {
    size: { width: 15, height: 15 },
    attrs: {
      body: {
        refWidth: "100%",
        refHeight: "100%",
        fill: "#4CAF50",
        stroke: "black",
        strokeWidth: 1,
        rx: 5,
        ry: 5,  
      },
      label: {
        text: "Monetary\nBenefit",
        fill: "white",
        fontSize: 10,
        refX: "50%",  
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle", 
      },
    },
  },
  {
    markup: [
      { tagName: "rect", selector: "body" },
      { tagName: "text", selector: "label" },
    ],
  }
);

















// export const HasMen = joint.dia.Link.define("custom.HasMen", {
//   attrs: {
//     line: {
//       stroke: "#2196F3",
//       strokeWidth: 2,
//       targetMarker: {
//         type: "path",
//         d: "M 10 -5 0 0 10 5 Z",
//         fill: "#2196F3",
//       },
//     },
//   },
// });


// export const HasWomen = joint.dia.Link.define("custom.HasWomen", {
//   attrs: {
//     line: {
//       stroke: "#E91E63",
//       strokeWidth: 2,
//       targetMarker: {
//         type: "path",
//         d: "M 10 -5 0 0 10 5 Z",
//         fill: "#E91E63",
//       },
//     },
//   },
// });