$(window).off('resize').on('domready',function(e){
  $.popupTips("hello world",8,'center');
  $('.btn-operate-blue').on('click',function(e){
    e.preventDefault();
    $.openDlg('/gh/get/response.html/ZEALi/yihu/tree/master/standard/demo/','hello world');
  });
});
