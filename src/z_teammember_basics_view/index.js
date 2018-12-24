import Info from './info';
import Styler from './styler';

class Index {

  constructor() {
    const teamMemberBasicViewInfo = new TeamMemberBasicViewInfo();
    teamMemberBasicViewInfo.show();
  }

}

//export {Show as TeamMemberBasicViewShow}
export {Styler as TeamMemberBasicViewStyler}
export {Index as TeamMemberBasicView}