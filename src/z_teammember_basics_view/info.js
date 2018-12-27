class Info {
  constructor() {
    this.$ = skuid.$;
    const models = skuid.model.map(),
          teamMemberViewModel = models.TeamMember_view || {};
 
    this.data = {
      teamMemberViewData: teamMemberViewModel.data || []
    }

    this.show();
  }

  log() {
    const $ = skuid.$,
          models = skuid.model.map(),
          teamMemberViewModel = models.TeamMember_view || {},
          teamMemberViewData = teamMemberViewModel.data || [];
  
    if (teamMemberViewData.length > 0)
      console.log('teamMemberViewData:', teamMemberViewData);
    else
      console.log('teamMemberViewModel:', teamMemberViewModel);
  }

  edit = () => {
    const editBtn = this.$("#sk-312yZl-210");
    editBtn.on("click", function(e) {
      alert("Start editing");
    });
  }

  show = () => {
    if (this.data.teamMemberViewData.length > 0)
      alert(this.data.teamMemberViewData[0].Email);
  }
}

export default Info;
//export default Info.prototype.show;
