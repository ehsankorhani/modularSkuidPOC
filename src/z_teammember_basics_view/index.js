import Info from './info';
import Styler from './styler';

class Index {

  constructor() {
    const info = new Info();    
    info.show();
    info.edit();
    //Info();
  }

}

export {Styler as TeamMemberBasicViewStyler}
export {Index as TeamMemberBasicView}