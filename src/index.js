console.log('External file........................');

/*document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
   }
}*/

/*document.onload = function() {

}*/

(function(skuid){
  var $ = skuid.$;
  $(document.body).one('pageload',function(){

    var models = skuid.model.map(),
    teamMemberViewModel = models.TeamMember_view || {},
    teamMemberViewData = teamMemberViewModel.data || [];
  
    if (teamMemberViewData.length > 0)
      console.log('teamMemberViewData:', teamMemberViewData);
    else
      console.log('teamMemberViewModel:', teamMemberViewModel);


    
  });
})(skuid);
