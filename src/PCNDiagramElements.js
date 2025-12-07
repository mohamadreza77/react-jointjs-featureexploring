import * as joint from 'jointjs';

// ------------------------------------------------------
// 1) LEFT DIRECTION
// ------------------------------------------------------
export const LeftDir = joint.dia.Element.define(
  'custom.LeftDir',
  {
    size: { width: 80, height: 40 },
    attrs: {
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: '#2196F3',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
      label: {
        text: 'Man',
        fill: 'white',
        fontSize: 14,
        refX: '50%',
        refY: '50%',
        textAnchor: 'middle',
        textVerticalAnchor: 'middle'
      }
    }
  },
  {
    markup: [
      { tagName: 'rect', selector: 'body' },
      { tagName: 'text', selector: 'label' }
    ]
  }
);


// ------------------------------------------------------
// 2) LEFT SUR
// ------------------------------------------------------
export const LeftSur = joint.dia.Element.define(
  'custom.LeftSur',
  {
    size: { width: 80, height: 40 },
    attrs: {
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: '#E91E63',
        stroke: 'black',
        strokeWidth: 1,
        rx: 8,
        ry: 8
      },
      label: {
        text: 'Woman',
        fill: 'white',
        fontSize: 14,
        refX: '50%',
        refY: '50%',
        textAnchor: 'middle',
        textVerticalAnchor: 'middle'
      }
    }
  },
  {
    markup: [
      { tagName: 'rect', selector: 'body' },
      { tagName: 'text', selector: 'label' }
    ]
  }
);

export const PCNProcessEntity = joint.dia.Element.define(
  'custom.PCNProcessEntity',
  { // Visual Attributes
    size: { width: 800, height: 600 }, 
    attrs: {
      // The Main Outer Border
      body: {
        refWidth: '100%',
        refHeight: '100%',
        // fill: '#FFFDE7',
        // stroke: '#795548',
        // strokeWidth: 2,
        // rx: 5,
        // ry: 5
      },
      // // The Title Label
      // labelName: {
      //   text: 'name',
      //   // fill: '#795548',
      //   // fontSize: 16,
      //   // fontWeight: 'bold',
      //   // refX: '50%',
      //   // refY: 20, // 20px from top
      //   // textAnchor: 'middle'
      // },
      // labelOrder: {
      //   text: 'order',
      //   // fill: '#795548',
      //   // fontSize: 16,
      //   // fontWeight: 'bold',
      //   // refX: '50%',
      //   // refY: 20, // 20px from top
      //   // textAnchor: 'middle'
      // },
      
      CompartmentLeftDir: {
        refWidth: '20%', // Take up 1/5 the width
        refHeight: '95%', // Take up remaining height
        refX: '0%',       // Start at the left edge
        refY: '5%',      // Start below the header
        fill: 'rgba(255, 255, 255, 1)', 
        stroke: '#000000ff',
        strokeWidth: 1,
        // strokeDasharray: '5,5' // Dashed line to imply "internal area"
      },
      CompartmentLeftSur: {
        refWidth: '20%',
        refHeight: '95%',
        refX: '20%',      // Start after the left compartment
        refY: '5%',
        fill: 'rgba(255, 255, 255, 1)', 
        stroke: '#000000ff',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      CompartmentInd: {
        refWidth: '20%',
        refHeight: '95%',
        refX: '40%',      // Start after the left compartments
        refY: '5%',
        fill: 'rgba(255, 255, 255, 1)', 
        stroke: '#000000ff',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      CompartmentRightSur: {
        refWidth: '20%',
        refHeight: '95%',
        refX: '60%',      // Start at the middle
        refY: '5%',
        fill: 'rgba(255, 255, 255, 1)', 
        stroke: '#000000ff',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      CompartmentRightDir: {
        refWidth: '20%',
        refHeight: '95%',
        refX: '80%',      // Start at the middle
        refY: '5%',
        fill: 'rgba(255, 255, 255, 1)', 
        stroke: '#000000ff',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
    }
  },
  { // Visual Structure
    markup: [
      { tagName: 'rect', selector: 'body' },
      // { tagName: 'text', selector: 'labelName' },
      // { tagName: 'text', selector: 'labelOrder' },
      { tagName: 'rect', selector: 'CompartmentLeftSur' },
      { tagName: 'rect', selector: 'CompartmentInd' },
      { tagName: 'rect', selector: 'CompartmentRightSur' },
      { tagName: 'rect', selector: 'CompartmentRightDir' },
      { tagName: 'rect', selector: 'CompartmentLeftDir' },
    ],
  },
  { // Behavior
    rules: {
      canEmbed: function(childElement) {
        const type = childElement.get('type');
        // Define accepted types
        const allowed = ['custom.LeftDir', 'custom.LeftSur', 'custom.Individual', 'custom.RightSur', 'custom.RightDir'];
        return allowed.includes(type);
      },
      
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function(childElement) {
        const type = childElement.get('type');
        if (type === 'custom.LeftDir') return 'CompartmentLeftDir'; // The SVG selector
        if (type === 'custom.LeftSur') return 'CompartmentLeftSur'; // The SVG selector
        if (type === 'custom.Individual') return 'CompartmentInd'; // The SVG selector
        if (type === 'custom.RightSur') return 'CompartmentRightSur'; // The SVG selector
        if (type === 'custom.RightDir') return 'CompartmentRightDir'; // The SVG selector
        return null;
      }
    }
  }
);

// ------------------------------------------------------
// 4) hasMen (link type)
// ------------------------------------------------------
export const HasMen = joint.dia.Link.define(
  'custom.HasMen',
  {
    attrs: {
      line: {
        stroke: '#2196F3',
        strokeWidth: 2,
        targetMarker: {
          type: 'path',
          d: 'M 10 -5 0 0 10 5 Z',
          fill: '#2196F3'
        }
      }
    }
  }
);

// ------------------------------------------------------
// 5) hasWomen (link type)
// ------------------------------------------------------
export const HasWomen = joint.dia.Link.define(
  'custom.HasWomen',
  {
    attrs: {
      line: {
        stroke: '#E91E63',
        strokeWidth: 2,
        targetMarker: {
          type: 'path',
          d: 'M 10 -5 0 0 10 5 Z',
          fill: '#E91E63'
        }
      }
    }
  }
);
