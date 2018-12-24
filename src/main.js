import {TeamMemberBasicViewInfo, TeamMemberBasicViewStyler} from './z_teammember_basics_view/index';
import './z_teammember_basics_view/style.css';
import './my-page/style.css';

(function(skuid){
  var $ = skuid.$;
  $(document.body).one('pageload',function(){
    console.log('External file........................');
    //console.log('page load:', document.getElementById("sk-6ATII-669"));

    const teamMemberBasicViewInfo = new TeamMemberBasicViewInfo();
    teamMemberBasicViewInfo.show();
    
    const teamMemberBasicViewStyler = new TeamMemberBasicViewStyler();
    teamMemberBasicViewStyler.modifyTitle();
  });

  $(document).ready(function() {
  //   console.log('doc ready:', document.getElementById("sk-6ATII-669"));
  });
})(skuid);