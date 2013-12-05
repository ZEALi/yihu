(function(){
  $.popupTips("hello world");
  $('.btn-operate-blue').on('click',function(e){
    e.preventDefault();
    $.openDlg('/echo/html','hello world');
  });
})();
