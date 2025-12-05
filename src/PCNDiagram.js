import * as joint from 'jointjs';

// ------------------------------------------------------
// 1) MAN
// ------------------------------------------------------
export const Man = joint.dia.Element.define(
  'custom.Man',
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
// 2) WOMAN
// ------------------------------------------------------
export const Woman = joint.dia.Element.define(
  'custom.Woman',
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
  {
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
      // The Title Label
      labelName: {
        text: 'name',
        // fill: '#795548',
        // fontSize: 16,
        // fontWeight: 'bold',
        // refX: '50%',
        // refY: 20, // 20px from top
        // textAnchor: 'middle'
      },
      labelOrder: {
        text: 'order',
        // fill: '#795548',
        // fontSize: 16,
        // fontWeight: 'bold',
        // refX: '50%',
        // refY: 20, // 20px from top
        // textAnchor: 'middle'
      },
      
      CompartmentLeftDir: {
        refWidth: '20%', // Take up 1/5 the width
        refHeight: '80%', // Take up remaining height
        refX: '0%',       // Start at the left edge
        refY: '20%',      // Start below the header
        fill: 'rgba(33, 150, 243, 0.1)', // Light blue tint
        // stroke: '#795548',
        strokeWidth: 1,
        // strokeDasharray: '5,5' // Dashed line to imply "internal area"
      },
      // menLabel: {
      //   text: 'Men',
      //   fontSize: 12,
      //   fill: '#333',
      //   refX: '25%', // Center of the left half (50% / 2)
      //   refY: '25%', // Just inside the compartment
      //   textAnchor: 'middle'
      // },

      CompartmentLeftSur: {
        refWidth: '20%',
        refHeight: '80%',
        refX: '20%',      // Start after the left compartment
        refY: '20%',
        fill: 'rgba(233, 30, 99, 0.1)', // Light pink tint
        // stroke: '#795548',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      // womenLabel: {
      //   text: 'Women',
      //   fontSize: 12,
      //   fill: '#333',
      //   refX: '75%', // Center of the right half
      //   refY: '25%',
      //   textAnchor: 'middle'
      // },

      CompartmentInd: {
        refWidth: '20%',
        refHeight: '80%',
        refX: '40%',      // Start after the left compartments
        refY: '20%',
        fill: 'rgba(255, 0, 0, 1)', // Light pink tint
        // stroke: '#795548',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },

      CompartmentRightSur: {
        refWidth: '20%',
        refHeight: '80%',
        refX: '60%',      // Start at the middle
        refY: '20%',
        fill: 'rgba(51, 0, 255, 1)', // Light pink tint
        // stroke: '#795548',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
      CompartmentRightDir: {
        refWidth: '20%',
        refHeight: '80%',
        refX: '80%',      // Start at the middle
        refY: '20%',
        fill: 'rgba(251, 255, 0, 1)', // Light pink tint
        // stroke: '#795548',
        strokeWidth: 1,
        // strokeDasharray: '5,5'
      },
    }
  },
  {
    markup: [
      { tagName: 'rect', selector: 'body' },
      { tagName: 'text', selector: 'labelName' },
      { tagName: 'text', selector: 'labelOrder' },
      
      // The two compartment rectangles
      { tagName: 'rect', selector: 'CompartmentLeftDir' },
      { tagName: 'rect', selector: 'CompartmentLeftSur' },
      { tagName: 'rect', selector: 'CompartmentInd' },
      // { tagName: 'text', selector: 'menLabel' },
      { tagName: 'rect', selector: 'CompartmentRightSur' },
      { tagName: 'rect', selector: 'CompartmentRightDir' },
      // { tagName: 'text', selector: 'womenLabel' }
    ],
    rules: {
      canEmbed: function(childElement) {
        const type = childElement.get('type');
        // Define accepted types
        const allowed = ['custom.Man', 'custom.Woman'];
        return allowed.includes(type);
      },
      
      // OPTIONAL: Map types to specific compartment selectors
      getCompartmentSelector: function(childElement) {
        const type = childElement.get('type');
        if (type === 'custom.Man') return 'CompartmentLeftDir'; // The SVG selector
        if (type === 'custom.Woman') return 'CompartmentLeftSur'; // The SVG selector
        if (type === 'custom.Individual') return 'CompartmentInd'; // The SVG selector
        if (type === 'custom.RightSur') return 'CompartmentRightSur'; // The SVG selector
        if (type === 'custom.RightDir') return 'CompartmentRightDir'; // The SVG selector
        return null;
      }
    },
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
