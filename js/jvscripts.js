
function winOpen(theURL,winName,windowprops)
{var windowprops;if(null==theURL){alert("ERROR: WinOpen() requires a URL");return;}
windowprops="height=530,width=566,location=no,"
+"menubars=no,toolbars=no,resizable=yes,scrollbars=auto";window.open(theURL,"wi",windowprops);}
function WinOpen(theURL,topPos,leftPos)
{var windowprops,intTop,intLeft,intWidth,intHeight
intWidth=400
intHeight=470
intTop=0
intLeft=0
if(null==theURL){alert("ERROR: WinOpen() requires a URL");return;}
if(screen){switch(topPos){case"bottom":case"Bottom":case"BOTTOM":{intTop=screen.height-intHeight-30
break;}}
switch(leftPos){case"right":case"Right":case"RIGHT":{intLeft=screen.width-intWidth-50
break;}}}
windowprops="location=no,scrollbars=yes,menubars=no,toolbars=no,locationbars=no,resizable=yes,height="+intHeight+",width="+intWidth+",left="+intLeft+",top="+intTop;window.open(theURL,"",windowprops);}
function WinOpen2(sURL,sName,intTop,intLeft,intWidth,intHeight)
{var windowprops;if(null==sURL){alert("ERROR: WinOpen() requires a URL");return;}
if(null==sName)
sName='';if(null==intTop)
intTop=200;if(null==intLeft)
intLeft=200;if(null==intWidth)
intWidth=200;if(null==intHeight)
intHeight=200;windowprops="location=no,scrollbars=yes,menubar=no,toolbar=no,locationbar=no,resizable=yes,alwaysRaised=yes,height="+intHeight+",width="+intWidth+",left="+intLeft+",top="+intTop;window.open(sURL,sName,windowprops);}
function openWidow(theURL,name,w,h)
{if(null==theURL){alert("ERROR: openWin() requires a URL");return;}
theWindow=window.open(theURL,name,'width='+w+',height='+h+',location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no');theWindow.focus();}
function Confirmation()
{var answer;answer=confirm("Your Hotel's name and position postings will be removed when you click 'OK'");if(answer)
{return true;}
return false;}