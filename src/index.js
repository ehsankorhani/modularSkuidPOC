(function(skuid){
  var $ = skuid.$;
  $(document.body).one('pageload',function(){

    import Info from './teammember_basics_view/info';

    const info = new Info();
    info.show();
    
  });
})(skuid);


/*document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
   }
}*/

/*document.onload = function() {

}*/
