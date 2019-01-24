const {Index: TeamMemberBasicView} = require('./z_teammember_basics_view/index');
//import {Index as TeamMemberBasicView} from './z_teammember_basics_view/index';
require('./z_teammember_basics_view/style.css');
//import './z_teammember_basics_view/style.css';

(function(skuid){
  const $ = skuid.$,
        delay = 1000;

  $(document.body).one('pageload',function(){
    window.setTimeout(function(){

      const teamMemberBasicView = new TeamMemberBasicView();
      
      // const teamMemberBasicViewStyler = new TeamMemberBasicViewStyler();
      // teamMemberBasicViewStyler.modifyTitle();

    }, delay);
  });
})(skuid);