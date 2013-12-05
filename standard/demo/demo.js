(function(){
  $.popupTips("hello world");
  $('.btn-operate-blue').on('click',function(e){
    e.preventDefault();
    $.openDlg('/gh/get/response.html/ZEALi/yihu/tree/master/standard/demo/','hello world');
  });
})();
