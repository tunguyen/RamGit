
$(function(){$("#recently-viewed .property-carousel").carouFredSel({circular:false,infinite:false,width:184,height:315,direction:'right',items:{visible:1,minimum:1,width:184},auto:false,prev:{button:"#image-prev",key:"left"},next:{button:"#image-next",key:"right"},pagination:"#paging"});});$(function(){endecaSearch.init();var popover=$("#popover-panel");$("#modal-utils",popover).show();var position=$('#layout-body-container').position();popover.dialog({resizable:false,modal:true,width:560,position:[320,150],bgiframe:true});$('a.nearby-hotels-resorts',popover).unbind();$('a.nearby-hotels-resorts, #modal-util-close',popover).one('click',function(event){event.preventDefault();popover.dialog("close");});$("#resorts-records-per-page").change(function(){$(this.form).submit();});});$("#availability-search a.toggle-link").click(function(){$(this).toggleClass("open");var toggleContainer=$(this).parent().next(".toggle-container:first");if($(this).hasClass('open')){toggleContainer.attr('aria-expanded',true);toggleContainer.show();}
else{toggleContainer.attr('aria-expanded',false);toggleContainer.hide()}});var endecaSearch={fetchedQuickViews:Array,init:function(){endecaSearch.closeMenus();lis=document.getElementsByTagName('LI');for(var i=0;i<lis.length;i++){if(lis[i].className.match("more-link")){var moreLink=utils.findChildNode(lis[i]);moreLink.onclick=endecaSearch.openMenu;}}
var advanceSearchTabs;if($('#search-forms #tabs').length>0){advanceSearchTabs=$('#search-forms').tabs();$('input:radio[name="searchType"]:checked').parents('li').find('a').click();$('input:radio[name="searchType"]').click(function(e){$(e.target).parents('li').find('a').click();});$('#search-forms ul#search-tabs a').click(function(e){$(e.target).parents('li').find(':radio').attr('checked',true);});}
if($('#meetingSpace .tab-container').length>0){$('#meetingSpace').tabs();}
if(document.getElementById("comparison-form")){var compareForm=document.getElementById("comparison-form");compareForm.onsubmit=endecaSearch.validateCompareForm;}
if($('form.eincentive-award-form').length>0)
{$('form.eincentive-award-form').submit(endecaSearch.validate_eIncentive);}
var availFilter=$('#availability-filter');if(availFilter.length>0){availFilter.change(endecaSearch.searchRefiner);}
var currencyObj=$('#currency');if(currencyObj.length>0){currencyObj.val($('#current-currency').val());currencyObj.change(endecaSearch.searchRefiner);}
var recordsPPage=$('#recordsPerPage');if(recordsPPage.length>0)
{recordsPPage.change(endecaSearch.searchRefiner);}
var sortHD=$('#sortHD');if(sortHD.length>0)
{sortHD.change(endecaSearch.sortRefiner);}
$(".toggle-container").css('display','none');$("a.toggle-link.open").each(function(e){$(this).parent().next('.toggle-container:first').show();});$("a.toggle-link").click(function(e){e.preventDefault();$(this).toggleClass("open");var toggleContainer=$(this).parent().next(".toggle-container:first");if($(this).hasClass('open')){toggleContainer.attr('aria-expanded',true);toggleContainer.show();}
else{toggleContainer.attr('aria-expanded',false);toggleContainer.hide()}
var aLinkHtml=$(this).html().substring(0,$(this).html().indexOf('(')+1);var paraIndex=$(this).html().indexOf('<span');if(paraIndex!=-1){var aLinkHtml=$(this).html().substring(0,paraIndex);var finalHtml="";if($(this).hasClass('open')){finalHtml=aLinkHtml+$("#open-text").val();$(this).html(finalHtml);}
else{finalHtml=aLinkHtml+$("#collpased-text").val();$(this).html(finalHtml);}}
return false;});var disabledFilterLink=$('#guided-nav-horizontal li a span.disabled-link');if(disabledFilterLink.length>0){disabledFilterLink.unwrap().siblings('span').hide();}
var guideNav=$("#guided-nav");if(guideNav.length>0){$('#guided-nav h2 a, #guided-nav h3 a').click(function(e){e.preventDefault();});$("#guided-nav-items").click(function(e){endecaSearch.guidedNavFilter(e);});var navCheckBoxes=$(".guided-nav-control");navCheckBoxes.each(function(e){if($(this).hasClass("selected-refinement")){$(this).attr('checked',true);}
else{$(this).attr('checked',false);}})}
var propertyResults=$("#property-results");if(propertyResults.length>0){endecaSearch.quickViewTabs();}
var switchToRedemption=$('#switch-to-redemption');if(switchToRedemption.length>0){switchToRedemption.click(function(e){endecaSearch.switchToRedemption(e);});}
var switchToCash=$('#switch-to-cash');if(switchToCash.length>0){switchToCash.click(function(e){endecaSearch.switchToCash(e);});}
if($('div.edit-search').length>0||($('#availability-search.my-stay-container').length>0)){$('div.edit-search h2 a, div.edit-search h3 a').click(function(e){e.preventDefault();});var rewardsSection=$("#hidden-rewards-container");var rewardsTrigger=$("#hidden-rewards-trigger");var useRewardsPoints=$("#useRewardsPoints");var marriottRewardsNumber=$("#marriottRewardsNumber");if((useRewardsPoints.length>0&&useRewardsPoints.is(':checked'))||(marriottRewardsNumber.length>0&&marriottRewardsNumber.val()!=""&&rewardsSection.length>0)){rewardsSection.show();rewardsTrigger.children('.toggle-link').addClass("open");}
var specialRatesSection=$("#hidden-special-rates-container");var specialRatesTrigger=$("#hidden-special-rates-trigger");var noneObj=$("#none");if(noneObj.length>0&&!noneObj.is(':checked')){specialRatesSection.show();specialRatesTrigger.children('.toggle-link').addClass("open");}}
if(document.getElementById("compare-page-container")){effects.matchHeight('hotel-info');effects.matchHeight('org');effects.matchHeight('rate-info');effects.alignBottom('rate-info');effects.matchHeight('compare-column');}
if(document.getElementById("results-header"))
{var resultsHeaderHeight=document.getElementById("results-header").offsetHeight;var resultsHeaderPosition=YAHOO.util.Dom.getStyle("results-header","position");if(resultsHeaderHeight>32&&resultsHeaderPosition=="absolute")
{document.getElementById("page-container").style.paddingTop="52px";document.getElementById("page-container").style.background="url(/Images/CSS_Backgrounds/cccccc_1x1.gif) 0 52px repeat-x";}}
var mapObj=$('#map');var expandMap=$('#expand-map a');if(mapObj.length>0&&expandMap.length>0){expandMap.click(function(e){e.preventDefault();endecaSearch.expandCollapseMap($(this));});}
$('div.article-content').each(function(index){var options=$(this).parent('div:first').data('options');if(options!=undefined&&options.readMore=='true'&&$(this).length>0&&$(this).height()>'110'){$(this).addClass('collapsed').after('<a id="read-more" href="#" class="toggle-link">'+options.more+'</a>');var readMore=$('#read-more');var cityBurb=$(this);readMore.bind('click',function(e){cityBurb.toggleClass('collapsed');if(readMore.hasClass('open'))
readMore.html(options.more).removeClass('open');else
readMore.html(options.less).addClass('open');MI.search.tracking.readMore($(this));e.preventDefault();});}});$('#gallery-link, #list-link').bind('click',function(e){var currentPageView=$(this).data('options').currentPageView;var toggleView=$(this).data('options').toggleView;if(toggleView==currentPageView){e.preventDefault();}});$('#view-form #gallery-link, #view-form #list-link').bind('click',function(e){var currentPageView=$(this).data('options').currentPageView;var toggleView=$(this).data('options').toggleView;e.preventDefault();if(toggleView!=currentPageView){var linkHref=$(this).attr("href");var currentResultType=$('#current-view-type');if(linkHref.indexOf('galleryView')!=-1){currentResultType.val('galleryView');}
else if(linkHref.indexOf('listView')!=-1){currentResultType.val('listView');}
$('#view-form').submit();}});},openMenu:function(){endecaSearch.closeMenus();var listItem=utils.findParentNode(this);listItem.style.display="none";while(listItem.tagName=='LI'){listItem=utils.findPreviousNode(listItem);if(!listItem){return false;}
listItem.style.display="block";}},closeMenus:function(){uls=document.getElementsByTagName('UL');for(var i=0;i<uls.length;i++){if(uls[i].className.match("collapsable-menu")){var listItem=utils.findChildNode(uls[i]);var count=1;var menuSize=6;var listParent=utils.findParentNode(uls[i]);if(utils.findParentNode(uls[i]).id=="guided-nav"){var menuSize=3;}
while(listItem!=null){if(count>menuSize){listItem.style.display="none";}
listItem=utils.findNextNode(listItem);count++;}}}
lis=document.getElementsByTagName('LI');for(var i=0;i<lis.length;i++){if(lis[i].className.match("more-link")){lis[i].style.display="block";}}},quickViewTabs:function(){$('ul.property-record-tabs a').each(function(index){var elementId=$(this).attr("id");$(this).attr("href","#"+elementId.replace('link','tab'));});$('ul.property-record-tabs li:first-child').each(function(index){$(this).removeClass("active-tab");});$('ul.property-record-tabs li a').attr("tabindex",-1);var tabs=$('.property-record-view').tabs();$(tabs).find('.ui-tabs-selected a').attr("tabindex",0);$(tabs).bind('tabsselect',function(event,ui){if(ui.index!=0){var elementId=$(ui.tab).attr("id");var start=elementId.lastIndexOf("-");var marshaCode=elementId.substring(start+1);var showLoader=elementId.match("amenities")==null;endecaSearch.loadTabContent(marshaCode,showLoader);$(this).focus();}});$("ul.property-record-tabs li a").bind('click',function(event){var parentId=$(event.target).parents('div').attr('id');var start=parentId.lastIndexOf("-");var marshaCode=parentId.substring(start+1);if($(event.target).is("a"))
{var listaobj=$(event.target);if($(listaobj).attr("tabindex")!=0){$(listaobj).parent().siblings().find('a').attr("tabindex",-1);$(listaobj).attr("tabindex",0);}
$(listaobj).focus();event.stopPropagation();event.preventDefault();}});$("ul.property-record-tabs").bind('keypress',function(event){if($(event.target).is("a"))
{var liaobj=$(event.target);event.preventDefault();if(event.which==32||event.which==13){$(liaobj).click();}}});$('div.overview-photo-panel').hover(function(){$(this).css({'z-index':'2000'});$(this).find('img.magnifying-glass').addClass('hover');var h=$(this).parents().prev(".vcard").height();var mTop=(-77+(38-h))+"px";$(this).find('img.hotel-thumb').addClass('hover').stop().animate({marginTop:mTop,width:'183px',height:'190px'},200);},function(){$(this).css({'z-index':'0'});$(this).find('img.magnifying-glass').removeClass('hover');$(this).find('img.hotel-thumb').removeClass('hover').stop().animate({marginTop:'0',width:'84px',height:'87px'},200);});$('a.hotel-thumb-link').click(function(e){e.preventDefault();sendto('no_country','no_brand',this.href,'23');});},loadTabContent:function(quickViewMarsha,showLoader){var quickViewToShow=$("#property-record-info-"+quickViewMarsha);var siteLocale=$("#site-locale").val();var loadingText=$("#loading-text").val();var logId=$("#property-record-view-"+quickViewMarsha+"-live-region");var loadedText=logId.html();if(!endecaSearch.fetchedQuickViews[quickViewMarsha]){var vData="vData=expandQuickView="+quickViewMarsha+"; path=/";document.cookie=vData;if(showLoader){quickViewToShow.find(".amenities-list").hide();quickViewToShow.addClass("loading");}
endecaSearch.fetchedQuickViews[quickViewMarsha]=true;logId.html(loadingText);HotelQuickViewRemoteService.retrievePropertyDetail(quickViewMarsha,siteLocale,function(data){if(data=={}){endecaSearch.fetchedQuickViews[quickViewMarsha]=false;return true;}
if(data.propertyHighlightsInfoVO.businessMeetingsHighlightsList!=null&&typeof data.propertyHighlightsInfoVO.businessMeetingsHighlightsList[0]!='undefined'){$("#"+quickViewMarsha+"-business-meetings").html(data.propertyHighlightsInfoVO.businessMeetingsHighlightsList[0].highlightDescription);}else{$("#"+quickViewMarsha+"-business-meetings").css("display","none");}
if(data.propertyHighlightsInfoVO.socialEventsHighlightsList!=null&&typeof data.propertyHighlightsInfoVO.socialEventsHighlightsList[0]!='undefined'){$("#"+quickViewMarsha+"-social-events-weddings").html(data.propertyHighlightsInfoVO.socialEventsHighlightsList[0].highlightDescription);}else{$("#"+quickViewMarsha+"-social-events-weddings").css("display","none");}
$("#"+quickViewMarsha+"-is-driving-direc-support").html(data.drivingDirectionsSupportedCountry);if(data.airportVOlist.length>0){$("#"+quickViewMarsha+"-airport-name").html(data.airportVOlist[0].airportFullName);$("#"+quickViewMarsha+"-airport-code").html(data.airportVOlist[0].airportCode);$("#"+quickViewMarsha+"-airport-directions").html(data.airportVOlist[0].hotelDrivingDirections);$("#"+quickViewMarsha+"-airport-alternate").html(data.airportVOlist[0].airAlternateTransport);$("#"+quickViewMarsha+"-airport-bus").html(data.airportVOlist[0].busServiceDescription);$("#"+quickViewMarsha+"-airport-subway").html(data.airportVOlist[0].subwayServiceDescription);$("#"+quickViewMarsha+"-airport-taxi").html(data.airportVOlist[0].taxiServiceDescription);}else{$(".airport-name").css("display","none");}
if(!(data.airportVOlist.length>1)){$("#"+quickViewMarsha+"-more-airports").css("display","none");}
var parkingInfo="";if(data.parkingVO.onsiteParkingDesc!=null){parkingInfo=parkingInfo+data.parkingVO.onsiteParkingDesc;}
if(data.parkingVO.valetParkingDesc!=null){if(parkingInfo!=""){parkingInfo=parkingInfo+"; ";}
parkingInfo=parkingInfo+data.parkingVO.valetParkingDesc;}
if(data.parkingVO.offsiteParkingDesc!=null){if(parkingInfo!=""){parkingInfo=parkingInfo+"; ";}
parkingInfo=parkingInfo+data.parkingVO.offsiteParkingDesc;}
if(data.parkingVO.additionalParkingInfo!=null){if(parkingInfo!=""){parkingInfo=parkingInfo+"; ";}
parkingInfo=parkingInfo+data.parkingVO.additionalParkingInfo;}
if(parkingInfo==""){$("#"+quickViewMarsha+"-parking-container").css("display","none");}
else{$("#"+quickViewMarsha+"-parking-info").html(parkingInfo);}
var drivingDirectionLink=$("#"+quickViewMarsha+"-driving-directions-link")
if(drivingDirectionLink.length>0&&!data.drivingDirectionsSupportedCountry){document.getElementById(quickViewMarsha+"-driving-directions-link").style.display="none";}
var businessMeetings=$("#"+quickViewMarsha+"-business-meetings");if(businessMeetings.length>0){businessMeetings.html(businessMeetings.text());}
var socialEventsWeddings=$("#"+quickViewMarsha+"-social-events-weddings");if(socialEventsWeddings.length>0){socialEventsWeddings.html(socialEventsWeddings.text());}
if(showLoader){quickViewToShow.removeClass("loading");quickViewToShow.find(".amenities-list").show();}
logId.html(loadedText);var vData="vData=; path=/";document.cookie=vData;});}
return false;},searchRefiner:function(){var attribute=this.name;var attributesValue=this.value;if(attributesValue!=""){var requestedURLObj=$(':hidden[name=requestedURL]');var requestedURL="";if(requestedURLObj.length>0){requestedURL=requestedURLObj.val().substring(requestedURLObj.val());}
if(($(':hidden[name=search-type]').val()=='HotelDirectoryResults'||$(':hidden[name=search-type]').val()=='MiniStores')&&requestedURL=="")
{window.location="/search/refineSearch.mi?"+attribute+"="+attributesValue;}
else if($(':hidden[name=search-type]').val()=='HotelDirectoryResults'||$(':hidden[name=search-type]').val()=='MiniStores'&&$(':hidden[name=miniStoreFormSubmit2]').val()=='false'){var newURL='';var requestedURL=requestedURLObj.val().substring(requestedURLObj.val());var endOfTheURL=requestedURLObj.val().substring(requestedURLObj.val().length-1);if(endOfTheURL!='/'){requestedURL=requestedURL+'/';}
var URL=requestedURL.substring(0,requestedURL.length-1);var vars=URL.split(".");for(var i=0;i<vars.length;i++){var thisOne=vars[i];if(thisOne.indexOf("page")==-1&&thisOne!='16'&&thisOne!='32'&&thisOne!='48'){newURL=newURL+thisOne+'.';}}
window.location=newURL+attributesValue+'/';}
else{window.location="/search/refineSearch.mi?"+attribute+"="+attributesValue;}}},sortRefiner:function(){var attribute=this.name;var attributesValue=this.value;if(attributesValue!=""){var newURL='';var requestedURL=$(':hidden[name=requestedURL]').val().substring($(':hidden[name=requestedURL]').val());var endOfTheURL=$(':hidden[name=requestedURL]').val().substring($(':hidden[name=requestedURL]').val().length-1);if(endOfTheURL!='/'){requestedURL=requestedURL+'/';}
var URL=requestedURL.substring(0,requestedURL.length-1);var vars=URL.split(".");for(var i=0;i<vars.length;i++){var thisOne=vars[i];if(thisOne.indexOf("sortBrand")==-1&&thisOne.indexOf("sortDistance")==-1&&thisOne.indexOf("sortCity")==-1&&thisOne.indexOf("sortPrice")==-1&&thisOne.indexOf("page")==-1){newURL=newURL+thisOne+'.';}}
window.location=newURL+attributesValue+'/';}},guidedNavFilter:function(e){var guidedNavTarget=YAHOO.util.Event.getTarget(e);if(guidedNavTarget.className.match("guided-nav-control")){var guidedNavLinkId="nav-link-"+guidedNavTarget.id.substring(10,guidedNavTarget.id.length);var guidedNavLink=document.getElementById(guidedNavLinkId);if($('#guided-nav').hasClass('.hotel-directory-nav')){var s=s_gi(s_account);s.linkTrackEvents='';s.linkTrackVars='eVar14';s.eVar14="Dimension="+$(guidedNavLink).text();if($(':hidden[name=hotelDirectoryPageType]').val()=="MiniStores")
{s.eVar14="Ministores:Dimension="+$(guidedNavLink).text();}
void(s.tl(this,'o','Ministores SEO page'));}
window.location=guidedNavLink.href;}
else if(guidedNavTarget.tagName=="A"){var guidedNavCheckboxId="nav-check-"+guidedNavTarget.id.substring(9,guidedNavTarget.id.length);if(document.getElementById(guidedNavCheckboxId)){var guidedNavCheckbox=document.getElementById(guidedNavCheckboxId);guidedNavCheckbox.checked=true;}
return true;}},validateCompareForm:function()
{var checkboxGroup=this.elements["compareHotels"];var numberOfSelected=0;var vsCompareHotels=new String();if(checkboxGroup.length!=null){var checkboxGroupSize=checkboxGroup.length;for(counter=0;counter<checkboxGroupSize;counter++){if(checkboxGroup[counter].checked){numberOfSelected++;if(numberOfSelected>1){vsCompareHotels+="_";}
vsCompareHotels+=checkboxGroup[counter].value.substring(0,5);}}}
else{var checkboxGroupSize=1;for(counter=0;counter<checkboxGroupSize;counter++){if(checkboxGroup.checked){numberOfSelected++;vsCompareHotels+=checkboxGroup.value.substring(0,5);}}}
var groupSalesSearch=document.getElementById("group-sales-search").value;if(numberOfSelected==0){var minimumErrorMsg=document.getElementById("minimum-message").value;alert(minimumErrorMsg);return false;}
else if(groupSalesSearch=="true"){if(numberOfSelected>3){var maximumErrorMsg=document.getElementById("group-sales-maximum-message").value;alert(maximumErrorMsg);return false;}}
else if(numberOfSelected>4){var maximumErrorMsg=document.getElementById("maximum-message").value;alert(maximumErrorMsg);return false;}
else{this.vsCompareHotels.value=vsCompareHotels;this.submit();return true;}},getDate:function(daySelectBox,monthAndYearSelectBox,extraDays){var date=null;if(daySelectBox.selectedIndex!=0&&monthAndYearSelectBox.selectedIndex!=0)
{var dateArray=monthAndYearSelectBox.value.split("/");var day=Math.min(daySelectBox.value,endecaSearch.daysInMonth(dateArray[0]-1,dateArray[1]));date=new Date(dateArray[1],dateArray[0]-1,day+extraDays);}
return date;},setDate:function(daySelectBox,monthAndYearSelectBox,dateField,date){var x=0;while(x<daySelectBox.length){if(daySelectBox.options[x].value==date.getDate()){daySelectBox.selectedIndex=x;x=daySelectBox.length;}
else{x++;}}
x=0;var monthYear=(date.getMonth()+1)+"/"+date.getFullYear();while(x<monthAndYearSelectBox.length){if(monthAndYearSelectBox.options[x].value==monthYear){monthAndYearSelectBox.selectedIndex=x;x=monthAndYearSelectBox.length;}
else{x++;}}
dateField.value=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();},daysInMonth:function(month,year){return 32-new Date(year,month,32).getDate();},buildMarriottBrandsVSParam:function(form){var checkboxGroup=form.elements["marriottBrands"];var checkboxGroupSize=checkboxGroup.length;var allCheckboxIndex=checkboxGroup.length-1;var allCheckbox=checkboxGroup[allCheckboxIndex];var vsParam=new String();if(allCheckbox.checked)
{vsParam+="All";}
else
{var numberOfSelected=0;for(counter=0;counter<checkboxGroupSize;counter++)
{if(checkboxGroup[counter].checked)
{numberOfSelected++;if(numberOfSelected>1)
{vsParam+="_";}
vsParam+=checkboxGroup[counter].value;}}}
return vsParam;},validate_eIncentive:function(){var objForm=this;var URI="/search/submitSearch.mi?"
var queryStringParams;var incentiveType_Number=$(objForm).find(":input[name=displayableIncentiveType_Number]").val();if((incentiveType_Number!='')&&(($(objForm).find(":input[name=fromDate]").val()==null||$(objForm).find(":input[name=fromDate]").val()=='')||($(objForm).find(":input[name=toDate]").val()==null||$(objForm).find(":input[name=toDate]").val()==''))){alert('Please enter check-in and check-out dates when searching by award number or type');return false;}
var city=$(objForm).find(":input[name=destinationAddress.city]").val();var state=$(objForm).find(":input[name=destinationAddress.stateProvince]").val();var country=$(objForm).find(":input[name=destinationAddress.country]").val();var fromDate=$(objForm).find(":input[name=fromDate]").val();var toDate=$(objForm).find(":input[name=toDate]").val();var roomCount=$(objForm).find(":input[name=roomCount]").val();var numGuests=$(objForm).find(":input[name=guestCount]").val();var brand=$(objForm).find(":input[name=marriottBrands]").val();var marriottRewardsNumber=$(objForm).find(":input[name=marriottRewardsNumber]").val();queryStringParams="searchType=InCity&incentiveType_Number="+incentiveType_Number+"&destinationAddress.city="+city+"&destinationAddress.stateProvince="+state+"&destinationAddress.country="+country+"&fromDate="
+fromDate+"&toDate="+toDate+"&roomCount="+roomCount+"&guestCount="+numGuests+"&marriottRewardsNumber="
+marriottRewardsNumber+"&marriottBrands="+brand;URI=URI+queryStringParams;window.open(URI,"_self");return(false);},switchToCash:function(e){e.preventDefault();var formObj=$('#edit-search-form');$(formObj).find('#useRewardsPoints').attr('checked',false).end().submit();},switchToRedemption:function(e){e.preventDefault();var formObj=$('#edit-search-form');$(formObj).find(':input[name=corporateCode]').val("").end().find(':input[name=displayableIncentiveType_Number]').val('').end().find('#none').attr('checked','true').end().find('#useRewardsPoints').attr('checked',true).end().submit();},expandCollapseMap:function(controller){var mapObj=$('#map');controller.toggleClass("up");mapObj.toggleClass("collapsed");if(controller.hasClass("up")){controller.html("<span>"+$('#reduceMap').val()+"</span>");}
else{controller.html("<span>"+$('#expandMap').val()+"</span>");}}}
if($('#unsuccessful-sell-popover').length>0){$('#page-container').attr('aria-hidden','true');}
$(window).load(function(){$('#merch-property-results .button-secondary em:contains("Afficher le calendrier")').css('font-size','105%').parent('a.button-secondary').css({'width':'150px','padding':'3px auto'});$('#merch-property-results .button-secondary em:contains("Kalender anzeigen")').css('font-size','105%').parent('a.button-secondary').css({'width':'150px','padding':'3px auto'});$('#recently-viewed .button-secondary em:contains("Afficher le calendrier")').css('font-size','105%').parent('a.button-secondary').css('width','140px');$('#recently-viewed .button-secondary em:contains("Kalender anzeigen")').css('font-size','105%').parent('a.button-secondary').css({'width':'140px','padding':'3px auto'});if($('#tool-tip').length>0){bookToolTip=$('#tool-tip');bookToolTip.fadeIn(1100).delay(6000).fadeOut(400);function bookRightFadeIn(){bookToolTip.stop().fadeIn(500);};function bookRightFadeOut(){$('.book-right-holder img').each(function(){$(this).prop("hoverIntent_s",0);});if($(bookToolTip).is(':visible')){bookToolTip.stop().fadeOut();}};var hoverBookRight={over:bookRightFadeIn,timeout:3500,out:bookRightFadeOut}
$('.book-right-holder img').each(function(){$(this).hoverIntent(hoverBookRight);});$('#room-rate-container ul.ui-tabs-nav li a').on('click',function(){bookRightFadeOut();});$('#tool-tip .close-btn').click(function(){bookRightFadeOut();return false;});brToolTipOffsetTop=$('#book-right-holder-image').offset().top
$('#tool-tip').css('top',brToolTipOffsetTop-522+'px');};if($('#unsuccessful-sell-popover').length>0){setTimeout(function(){$('#popover-panel #header').css('z-index','auto');$('#modal-util-close').focus();},50);$('#modal-util-close').click(function(){restoreAria();});$('#popover-panel').keyup(function(e){if(e.keyCode==27){restoreAria();}});function restoreAria(){$('#page-container').attr('aria-hidden','false');$('#page-container').attr('aria-live','true');};}});var mapFlyout=$(".map-flyout");mapFlyout.each(function(){var mapFlyoutSaveMe=$(this).find(".save-hotel-btn-search:first a:first");mapFlyoutSaveMe.click(function(e){e.preventDefault();var thisParent=$(this).parent();var o=thisParent.data('info');SaveHotelRemoteService.saveProperty(o.marsha,o.locale,{callback:function(data){switch(data[0]){case"exceedmax":alert(data[2]);break;case"saved":case"notsaved":thisParent.html(data[1]);break;}},timeout:5000,errorHandler:function(message){}});});});$(".price-container, .hotel-title a.fn, .map-flyout .hotel-title-link, .map-flyout .room-rate, .map-flyout .flyout-submit-button").click(function(){var dataMarsha=$(this).data('rcmarsha');if(dataMarsha!=''&&typeof(dataMarsha)!='undefined')
{$.ajax({url:'/reservation/updateSearchHistoryCookie.mi',cache:false,data:'marshaCode='+dataMarsha});}});