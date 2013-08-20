
var toggleMainMenu="false";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_scenario_Btn}","click",function(sym,e){if(toggleMainMenu=="false"){toggleMainMenu="true";sym.play();}else if(toggleMainMenu=="true"){toggleMainMenu="false";sym.playReverse();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1730,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_subIcon3}","click",function(sym,e){window.open("../../../en_clickable_scenario01_airport-travel.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_subIcon3_label}","click",function(sym,e){window.open("../../../en_clickable_scenario01_airport-travel.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_subIcon1}","click",function(sym,e){window.open("../../../en_airport_sequence.html","contentContainer");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_subIcon1_label_smb}","click",function(sym,e){window.open("../../../en_airport_sequence.html","contentContainer");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'scenarioIcon'
(function(symbolName){})("scenarioIcon_smb");
//Edge symbol end:'scenarioIcon_smb'

//=========================================================

//Edge symbol: 'servicesIcon_smb'
(function(symbolName){})("servicesIcon_smb");
//Edge symbol end:'servicesIcon_smb'

//=========================================================

//Edge symbol: 'quizIcon_smb'
(function(symbolName){})("quizIcon_smb");
//Edge symbol end:'quizIcon_smb'

//=========================================================

//Edge symbol: 'surveyIcon_smb'
(function(symbolName){})("surveyIcon_smb");
//Edge symbol end:'surveyIcon_smb'

//=========================================================

//Edge symbol: 'subIcon3_label'
(function(symbolName){})("subIcon3_label_smb");
//Edge symbol end:'subIcon3_label_smb'

//=========================================================

//Edge symbol: 'subIcon2_label_smb'
(function(symbolName){})("subIcon2_label_smb");
//Edge symbol end:'subIcon2_label_smb'

//=========================================================

//Edge symbol: 'subIcon1_label_smb'
(function(symbolName){})("subIcon1_label_smb");
//Edge symbol end:'subIcon1_label_smb'
})(jQuery,AdobeEdge,"EDGE-2548275");