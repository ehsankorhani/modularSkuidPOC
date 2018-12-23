import {TeamMemberBasicViewInfo} from './z_teammember_basics_view/index';

(function(skuid){
  var $ = skuid.$;
  $(document.body).one('pageload',function(){

    const teamMemberBasicViewInfo = new TeamMemberBasicViewInfo();
    teamMemberBasicViewInfo.show();
        
  });
})(skuid);