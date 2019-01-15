import Info from './info';
import Styler from './styler';

class Index {

  constructor() {
    const info = new Info();    
    info.log();
    info.edit();
    //Info();
  }

}

export {Styler as TeamMemberBasicViewStyler}
export {Index as TeamMemberBasicView}
