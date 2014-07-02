
var utils={findParentNode:function(obj){var parentObj=obj.parentNode;while(parentObj.nodeType!=1){parentObj=parentObj.previousSibling;if(parentObj==null){return;}}
return parentObj;},findChildNode:function(obj){var childObj=obj.firstChild;if(!childObj){return null;}
while(childObj.nodeType!=1){childObj=childObj.nextSibling;}
return childObj;},findPreviousNode:function(obj){var prevObj=obj.previousSibling;if(prevObj==null){return;}
while(prevObj.nodeType!=1){prevObj=prevObj.previousSibling;if(prevObj==null){return;}}
return prevObj;},findNextNode:function(obj){var nextObj=obj.nextSibling;if(nextObj==null){return;}
while(nextObj.nodeType!=1){nextObj=nextObj.nextSibling;if(nextObj==null){return;}}
return nextObj;},getNodeValue:function(obj,tag){return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;},getElementsByClass:function(searchClass,node,tag){var classElements=new Array();if(node==null)
node=document;if(tag==null)
tag='*';var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");for(i=0,j=0;i<elsLen;i++){if(pattern.test(els[i].className)){classElements[j]=els[i];j++;}}
return classElements;},addLoadEvent:function(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){oldonload();func();}}}}