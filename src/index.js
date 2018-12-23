import {TeamMemberBasicViewShow} from './z_teammember_basics_view/index';

(function(skuid){
  var $ = skuid.$;
  $(document.body).one('pageload',function(){

    const teamMemberBasicViewShow = new TeamMemberBasicViewShow();
    teamMemberBasicViewShow.show();
        
  });
})(skuid);