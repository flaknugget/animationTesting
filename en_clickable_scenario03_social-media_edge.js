/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


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
            id:'CSE_Airport',
            type:'image',
            rect:['0','-92px','2560px','1512px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"CSE_Airport.svg",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['2056px','1101px','440px','196px','auto','auto'],
            fill:["rgba(204,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1367px'],
            ["style", "width", '2560px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(204,0,0,1.00)'],
            ["style", "top", '1101px']
         ],
         "${_CSE_Airport}": [
            ["style", "height", '1512px'],
            ["style", "top", '-92px'],
            ["style", "left", '0px'],
            ["style", "width", '2560px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid243", tween: [ "style", "${_CSE_Airport}", "width", '4020px', { fromValue: '2560px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid242", tween: [ "style", "${_CSE_Airport}", "left", '-1180px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid241", tween: [ "style", "${_CSE_Airport}", "top", '-514px', { fromValue: '-92px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid240", tween: [ "style", "${_CSE_Airport}", "height", '2374px', { fromValue: '1512px'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-26268487");
