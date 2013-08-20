/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['GothamBook']='<style>@font-face {	    font-family: GothamBook;    src: url(\'fonts/GothamBook.otf\');	}</style>';
   fonts['GothamMed']='<style>@font-face {	    font-family: GothamMed;    src: url(\'fonts/GothamMedium.otf\');	}</style>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'mainmenuBackground',
            type:'image',
            rect:['0px','-76px','2560px','1520px','auto','auto'],
            overflow:'hidden',
            fill:["rgba(0,0,0,0)",im+"mainmenuBackground.jpg",'0px','0px']
         },
         {
            id:'subIcon1_label_smb',
            type:'rect',
            rect:['1606px','528px','auto','auto','auto','auto'],
            clip:['rect(0px 624pxpx 160pxpx 0px)']
         },
         {
            id:'subIcon1',
            type:'image',
            rect:['1556px','528px','184px','160px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"subIcon1.png",'0px','0px']
         },
         {
            id:'subIcon2_label_smb',
            type:'rect',
            rect:['1512','356px','auto','auto','auto','auto'],
            clip:['rect(0px 624pxpx 160pxpx 0px)'],
            transform:[]
         },
         {
            id:'subIcon2',
            type:'image',
            rect:['1460px','356px','184px','160px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"subIcon2.png",'0px','0px']
         },
         {
            id:'subIcon3_label',
            type:'rect',
            rect:['1417','186','auto','auto','auto','auto'],
            clip:['rect(0px 624pxpx 160pxpx 0px)']
         },
         {
            id:'subIcon3',
            type:'image',
            rect:['1363px','186px','184px','160px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"subIcon3.png",'0px','0px']
         },
         {
            id:'servicesIcon_smb',
            type:'rect',
            rect:['1480','684','auto','auto','auto','auto']
         },
         {
            id:'quizIcon_smb',
            type:'rect',
            rect:['1118','896','auto','auto','auto','auto']
         },
         {
            id:'surveyIcon_smb',
            type:'rect',
            rect:['754','684','auto','auto','auto','auto']
         },
         {
            id:'scenarioIcon2',
            type:'rect',
            rect:['1118','474','auto','auto','auto','auto']
         },
         {
            id:'scenario_Btn',
            type:'ellipse',
            rect:['1151px','474px','386px','390px','auto','auto'],
            overflow:'visible',
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            opacity:1,
            fill:["rgba(255,0,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'servicesIcon_smb',
            symbolName:'servicesIcon_smb'
         },
         {
            id:'scenarioIcon2',
            symbolName:'scenarioIcon_smb'
         },
         {
            id:'surveyIcon_smb',
            symbolName:'surveyIcon_smb'
         },
         {
            id:'quizIcon_smb',
            symbolName:'quizIcon_smb'
         },
         {
            id:'subIcon3_label',
            symbolName:'subIcon3_label_smb'
         },
         {
            id:'subIcon1_label_smb',
            symbolName:'subIcon1_label_smb'
         },
         {
            id:'subIcon2_label_smb',
            symbolName:'subIcon2_label_smb'
         }
         ]
      },
   states: {
      "Base State": {
         "${_subIcon1_label_smb}": [
            ["style", "clip", [0,0,160,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_subIcon3_label}": [
            ["style", "clip", [0,0,160,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_subIcon2}": [
            ["style", "top", '636px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '1252px']
         ],
         "${_subIcon1}": [
            ["style", "top", '629px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '1252px']
         ],
         "${_surveyIcon_smb}": [
            ["style", "top", '684px'],
            ["subproperty", "filter.grayscale", '0']
         ],
         "${_scenario_Btn}": [
            ["style", "top", '474px'],
            ["color", "background-color", 'rgba(255,0,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '1151px'],
            ["style", "cursor", 'pointer']
         ],
         "${_scenarioIcon2}": [
            ["style", "top", '474px']
         ],
         "${_subIcon3}": [
            ["style", "top", '629px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '1252px']
         ],
         "${_subIcon2_label_smb}": [
            ["style", "top", '357px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0.85'],
            ["style", "left", '1507px'],
            ["style", "clip", [0,0,20,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1367px'],
            ["style", "width", '2560px']
         ],
         "${_quizIcon_smb}": [
            ["style", "top", '896px'],
            ["subproperty", "filter.grayscale", '0']
         ],
         "${_servicesIcon_smb}": [
            ["style", "top", '684px'],
            ["subproperty", "filter.grayscale", '0']
         ],
         "${_mainmenuBackground}": [
            ["style", "top", '-136px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1730,
         autoPlay: true,
         timeline: [
            { id: "eid70", tween: [ "style", "${_subIcon2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "style", "${_subIcon3_label}", "clip", [0,624,160,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,160,0]}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid31", tween: [ "style", "${_scenarioIcon2}", "top", '514px', { fromValue: '474px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "style", "${_quizIcon_smb}", "top", '936px', { fromValue: '896px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "style", "${_servicesIcon_smb}", "top", '724px', { fromValue: '684px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "style", "${_subIcon3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "style", "${_subIcon2}", "top", '358px', { fromValue: '636px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid130", tween: [ "style", "${_scenario_Btn}", "top", '514px', { fromValue: '474px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid129", tween: [ "transform", "${_subIcon1}", "scaleY", '1', { fromValue: '0'}], position: 980, duration: 250, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "style", "${_subIcon3}", "left", '1363px', { fromValue: '1252px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid111", tween: [ "subproperty", "${_surveyIcon_smb}", "filter.grayscale", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_mainmenuBackground}", "top", '-96px', { fromValue: '-136px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_subIcon1}", "top", '528px', { fromValue: '629px'}], position: 980, duration: 250, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_subIcon1}", "left", '1556px', { fromValue: '1252px'}], position: 980, duration: 250, easing: "easeOutQuad" },
            { id: "eid125", tween: [ "transform", "${_subIcon2}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_subIcon3}", "top", '186px', { fromValue: '629px'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid123", tween: [ "transform", "${_subIcon2}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_subIcon1}", "opacity", '1', { fromValue: '0'}], position: 980, duration: 250, easing: "easeOutQuad" },
            { id: "eid117", tween: [ "transform", "${_subIcon3}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid68", tween: [ "style", "${_subIcon2_label_smb}", "clip", [0,0,160,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,20,0]}], position: 946, duration: 38, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "style", "${_subIcon2_label_smb}", "clip", [0,624,160,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,160,0]}], position: 984, duration: 246, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "subproperty", "${_servicesIcon_smb}", "filter.grayscale", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid115", tween: [ "transform", "${_subIcon3}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid81", tween: [ "style", "${_subIcon1_label_smb}", "clip", [0,624,160,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,160,0]}], position: 1230, duration: 250, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "subproperty", "${_quizIcon_smb}", "filter.grayscale", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "style", "${_subIcon2_label_smb}", "top", '357px', { fromValue: '357px'}], position: 1230, duration: 0, easing: "easeOutQuad" },
            { id: "eid127", tween: [ "transform", "${_subIcon1}", "scaleX", '1', { fromValue: '0'}], position: 980, duration: 250, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_surveyIcon_smb}", "top", '724px', { fromValue: '684px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "style", "${_subIcon2}", "left", '1460px', { fromValue: '1252px'}], position: 750, duration: 250, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "style", "${_subIcon2_label_smb}", "left", '1507px', { fromValue: '1507px'}], position: 1230, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"scenarioIcon_smb": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'scenarioIcon',
      type: 'image',
      rect: ['0px','60px','452px','390px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scenarioIcon.png','0px','0px']
   },
   {
      rect: ['108px','199px','auto','auto','auto','auto'],
      font: ['GothamMed',40,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'EXPLORE 3<br>SCENARIOS',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '199px'],
            ["style", "line-height", '56px'],
            ["style", "left", '108px'],
            ["style", "font-size", '40px']
         ],
         "${_scenarioIcon}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '390px'],
            ["style", "width", '452px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"servicesIcon_smb": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'servicesIcon',
      type: 'image',
      rect: ['0px','60px','452px','390px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/servicesIcon.png','0px','0px']
   },
   {
      rect: ['122px','212px','auto','auto','auto','auto'],
      font: ['GothamMed',40,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'OUR<br>SERVICES',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '212px'],
            ["style", "text-align", 'center'],
            ["style", "line-height", '56px'],
            ["style", "left", '122px'],
            ["style", "font-size", '40px']
         ],
         "${symbolSelector}": [
            ["style", "height", '390px'],
            ["style", "width", '452px']
         ],
         "${_servicesIcon}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"quizIcon_smb": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'quizIcon',
      type: 'image',
      rect: ['0px','60px','452px','390px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/quizIcon.png','0px','0px']
   },
   {
      rect: ['77px','226px','298px','auto','auto','auto'],
      font: ['GothamMed',40,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3Copy',
      text: 'TAKE OUR QUIZ',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '390px'],
            ["style", "width", '452px']
         ],
         "${_Text3Copy}": [
            ["style", "line-height", '56px'],
            ["style", "text-align", 'center'],
            ["style", "width", '298px'],
            ["style", "top", '226px'],
            ["style", "left", '77px'],
            ["style", "font-size", '40px']
         ],
         "${_quizIcon}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"surveyIcon_smb": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'surveyIcon',
      type: 'image',
      rect: ['0px','60px','452px','390px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/surveyIcon.png','0px','0px']
   },
   {
      rect: ['116px','224px','auto','auto','auto','auto'],
      font: ['GothamMed',40,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3Copy2',
      text: 'TAKE OUR <br>SURVEY',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy2}": [
            ["style", "line-height", '56px'],
            ["style", "text-align", 'center'],
            ["style", "top", '224px'],
            ["style", "left", '116px'],
            ["style", "font-size", '40px']
         ],
         "${_surveyIcon}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '390px'],
            ["style", "width", '452px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"subIcon3_label_smb": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','624px','160px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle',
      opacity: 0.85,
      type: 'rect',
      fill: ['rgba(11,148,68,1.00)']
   },
   {
      rect: ['161px','36px','419px','100px','auto','auto'],
      font: ['GothamMed',30,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text2',
      text: 'CYBER SECURITY &amp;<br>INTERNATIONAL TRAVEL',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(11,148,68,1.00)'],
            ["style", "top", '0px'],
            ["style", "opacity", '0.85'],
            ["style", "left", '0px'],
            ["style", "width", '624px']
         ],
         "${_Text2}": [
            ["style", "top", '36px'],
            ["style", "line-height", '45px'],
            ["style", "height", '100px'],
            ["style", "font-family", 'GothamMed'],
            ["style", "left", '161px'],
            ["style", "width", '419px']
         ],
         "${symbolSelector}": [
            ["style", "height", '160px'],
            ["style", "width", '624px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"subIcon2_label_smb": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','624px','160px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(38,34,98,1.00)']
   },
   {
      rect: ['162px','36px','419px','100px','auto','auto'],
      font: ['GothamMed',30,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text2Copy',
      text: 'CYBER SECURITY &amp;<br>SOCIAL MEDIA',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '160px'],
            ["color", "background-color", 'rgba(38,34,98,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '624px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '36px'],
            ["style", "line-height", '45px'],
            ["style", "height", '100px'],
            ["style", "font-family", 'GothamMed'],
            ["style", "left", '162px'],
            ["style", "width", '419px']
         ],
         "${symbolSelector}": [
            ["style", "height", '160px'],
            ["style", "width", '624px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"subIcon1_label_smb": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','624px','160px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle3',
      opacity: 0.85,
      type: 'rect',
      fill: ['rgba(243,120,32,1.00)']
   },
   {
      rect: ['162px','36px','443px','100px','auto','auto'],
      font: ['GothamMed',30,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text2Copy2',
      text: 'CYBER SECURITY &amp;<br>WIRELESS TECHNOLOGIES',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy2}": [
            ["style", "top", '36px'],
            ["style", "line-height", '45px'],
            ["style", "height", '100px'],
            ["style", "font-family", 'GothamMed'],
            ["style", "left", '162px'],
            ["style", "width", '443px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(243,120,32,1.00)'],
            ["style", "opacity", '0.85'],
            ["style", "left", '0px'],
            ["style", "width", '624px']
         ],
         "${symbolSelector}": [
            ["style", "height", '160px'],
            ["style", "width", '624px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2548275");
