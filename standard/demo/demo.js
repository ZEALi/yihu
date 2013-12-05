try{$.bindLiveDetailViewHandler();}catch(e){}
try{$.bindLiveContentSwitcherHandler();}catch(e){}
try{$.bindLiveAutoCompleteHandler();}catch(e){}
try{$.bindLiveContentPopupHandler();}catch(e){}
try{$.bindLiveCancelPopupHandler();}catch(e){}
$(window).on('load',function(e){
  $.popupTips("hello world",8,'center');
  $('.btn-operate-blue').on('click',function(e){
    e.preventDefault();
    $.openDlg('/gh/get/response.html/ZEALi/yihu/tree/master/standard/demo/','hello world');
  });
});
