import Info from './teammember_basics_view/info';

(function(skuid){
  var $ = skuid.$;
  $(document.body).one('pageload',function(){

    Info.show();
    
  });
})(skuid);


/*document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
   }
}*/

/*document.onload = function() {

}*/
