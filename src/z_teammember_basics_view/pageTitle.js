import { getUserEmail } from "../util/user";

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
    return getUserEmail(this.data.teamMemberViewData[0]);
  }

  render = () => {
    const pageTilteEl = document.querySelector("#page-title-main .nx-template");

    if (pageTilteEl)
<<<<<<< HEAD
      pageTilteEl.innerHTML = "Hello: " + this.getUser();
=======
      pageTilteEl.innerHTML = "User: " + this.getUser();
>>>>>>> f6522a407e78b84c1a4311abebad3ec01785f915
  }
}

export default pageTitle;
