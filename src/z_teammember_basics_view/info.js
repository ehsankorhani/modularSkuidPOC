class Info {
  constructor() {
    
  }

  show() {
    const $ = skuid.$,
          models = skuid.model.map(),
          teamMemberViewModel = models.TeamMember_view || {},
          teamMemberViewData = teamMemberViewModel.data || [];
  
    if (teamMemberViewData.length > 0)
      console.log('teamMemberViewData:', teamMemberViewData);
    else
      console.log('teamMemberViewModel:', teamMemberViewModel);

    const editBtn = $("#sk-312yZl-210");
    editBtn.on("click", function(e) {
      alert("Start editing");
    });
  }
}

//export default Info;
export default Info.prototype.show;
