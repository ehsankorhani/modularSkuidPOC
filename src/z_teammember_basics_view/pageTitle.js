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
    if (this.data.teamMemberViewData.length > 0 && this.data.teamMemberViewData[0].Email)
      return this.data.teamMemberViewData[0].Email;

    return 'Anonymous';
  }

  render = () => {
    const pageTilteEl = document.querySelector("#page-title-main .nx-template");
    pageTilteEl.innerHTML = "User: " + this.getUser();
  }
}

export default pageTitle;
