var PAGE_WIDTH = 998;
var PAGE_OUTER_OFFSET = 30;
var page_wrapper_width = 0;
var preview_wrapper_width = 0;

function fit_wide_template_preview(page,preview_wrapper,iframe_width) {
    if (typeof(window.innerWidth) == 'number') {
        window_width = window.innerWidth;
    } else {
        window_width = document.body.clientWidth;
    }
    if (window_width > iframe_width  + PAGE_OUTER_OFFSET) {
        page_wrapper_width = iframe_width;
        page.style.width = page_wrapper_width + 'px';
        preview_wrapper.style.overflow = 'hidden';
    } else {
        if (window_width < PAGE_WIDTH) {
            page.removeAttribute('style');
        } else {
            page_wrapper_width = window_width - PAGE_OUTER_OFFSET;
            page.style.width = page_wrapper_width + 'px';
        }
        preview_wrapper.style.overflow = 'scroll';
    }
}

var templatesArray=new Array();

function align_templates_row($templates_in_row,templates_array) {
    var ALIGN_BLOCK_CLASS = '.template-meta'; //For futher customization
    var max_row_height = $(templates_array[0]).children(ALIGN_BLOCK_CLASS).height();
    for (i=1;i<$templates_in_row;i++) {
        if ($(templates_array[i]).children(ALIGN_BLOCK_CLASS).height() > max_row_height) {
            max_row_height = $(templates_array[i]).children(ALIGN_BLOCK_CLASS).height()
        }
    }
    for (i=0;i<$templates_in_row;i++) {
        $(templates_array[i]).children(ALIGN_BLOCK_CLASS).css('height',max_row_height);
    }
}

function align_templates() {
    var TEMPLATES_IN_ROW = 3; //For futher customization
    while (alignTemplatesArray.length>1) {
        if (alignTemplatesArray.length>TEMPLATES_IN_ROW-1) {
            align_templates_row(TEMPLATES_IN_ROW,alignTemplatesArray);
            alignTemplatesArray.splice(0,TEMPLATES_IN_ROW);
        } else {
            align_templates_row(alignTemplatesArray.length,alignTemplatesArray);
            alignTemplatesArray.splice(0,alignTemplatesArray.length);
        }
    }
}

function align_when_ready() {
    $(function() {
        align_templates();
    });
}

function exitTracker() {
	var domain = document.location.toString().toLowerCase().split("/")[2];
                jQuery.each($("a"), function() {
                    if (this.href && this.href != null){
                        try{
                            var exit_domain = this.href.split("/")[2].toLowerCase();
                            if (domain.toLowerCase().indexOf(exit_domain) == -1) {
                               $(this).bind("click", function(e){
                                    _gaq.push(['_trackPageview', '/outbound/' + this.href]);
                               });
                            }
                        } catch(e){}

                    }
                });

                if ( $('.bdg_imgpad a').length ) {
                  $('.bdg_imgpad a').click(function() {
                    _gaq.push(['_trackEvent', 'SiteUsage', 'Stockimages-Widget', $(this).attr('href')]);
                  });
                }

                jQuery.each($("form"), function() {
                    $(this).bind("keypress", onKeySubmit);
                });
}

function iframeHeight() {
    var allH = document.body.clientHeight;
    var headerH = document.getElementById("beforeReg").clientHeight;
    var newH = allH - headerH;
    if(document.getElementById("tframe")){
        document.getElementById("tframe").style.height = newH + "px";
    }
}

function columnsHeight(val) {
    var rh = document.getElementById("right_column").clientHeight;
    var lh = document.getElementById("left_column").clientHeight;
    var mh = document.getElementById("middle_column").clientHeight;
    var temp = rh > mh ? rh : mh;
    var wh = lh > temp ? lh : temp;
    document.getElementById("wrapper").style.height = (wh + 10) + "px";
    //document.getElementById("wrapper").style.height = (wh + 10 - (val ? document.height : 0)) + "px";
    document.getElementById("right_column").style.height = wh + "px";
    document.getElementById("categories").style.height = (wh - 12) + "px";
    document.getElementById("middle_column").style.height = wh + "px";
}

function onKeySubmit(event){
    if (!event){
        var event = window.event;
    }
    var element = event.srcElement ? event.srcElement : event.target;
    var charCode = (event.which) ? event.which : event.keyCode;

    if(charCode == 13) {
        formSubmit(getFormId(element));
    }
}

function getFormId(element){
    var tag = element.tagName.toLowerCase();
    while(tag != 'form'){
        element = element.parentNode;
        tag = element.tagName.toLowerCase();
    }
    return element.id;
}

function formSubmit(id){
    var form = document.getElementById(id);
    if (form) {
	form.submit();
        return false;
    } else {
	return true;
    }
}
function showSelectElements(id){
    document.getElementById(id).style.display = 'block';
}
function closeSelect(element, id, id_select){
    document.getElementById(id).style.display = 'none';
    document.getElementById(id_select).innerHTML = element.value.substr(0, 13);
}

$(function(){
    $('#search_by_type, #search_by_category, #search_by_author').each(function(){$(this).sSelect({ddMaxHeight: '200px'}) });
    //ie clear from selects focus
    $('#freeKeywordSearch').focus();
    exitTracker();
});
