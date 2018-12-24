import {TeamMemberBasicViewInfo, TeamMemberBasicViewStyler} from './z_teammember_basics_view/index';

(function(skuid){
  var $ = skuid.$;
  $(document.body).one('pageload',function(){
    console.log('External file........................');

    // const teamMemberBasicViewInfo = new TeamMemberBasicViewInfo();
    // teamMemberBasicViewInfo.show();
    
    // const teamMemberBasicViewStyler = new TeamMemberBasicViewStyler();
    // teamMemberBasicViewStyler.modifyTitle();
  });
})(skuid);