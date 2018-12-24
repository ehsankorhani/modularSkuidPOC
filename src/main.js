import {TeamMemberBasicView, TeamMemberBasicViewStyler} from './z_teammember_basics_view/index';
import './z_teammember_basics_view/style.css';
import './my-page/style.css';

(function(skuid){
  const $ = skuid.$,
        delay = 1000;
  $(document.body).one('pageload',function(){
    window.setTimeout(function(){

      const teamMemberBasicView = new TeamMemberBasicView();
      
      const teamMemberBasicViewStyler = new TeamMemberBasicViewStyler();
      teamMemberBasicViewStyler.modifyTitle();

    }, delay);
  });
})(skuid);