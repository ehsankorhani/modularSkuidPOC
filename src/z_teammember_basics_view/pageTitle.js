import { UserEmail } from "../util/user";

class pageTitle {
  constructor() {
    this.$ = skuid.$;

    const models = skuid.model.map(),
          teamMemberViewModel = models.TeamMember_view || {};
 
    this.data = {
      teamMemberViewData: teamMemberViewModel.data || []
    }

    this.render();
  }

  getUser = () => {
    return UserEmail(this.data.teamMemberViewData[0]);
  }

  render = () => {
    const pageTilteEl = document.querySelector("#page-title-main .nx-template");
    pageTilteEl.innerHTML = "User: " + this.getUser();
  }
}

export default pageTitle;
