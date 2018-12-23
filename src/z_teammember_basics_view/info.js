class Info {
  constructor() {
    
  }

  show() {
    var models = skuid.model.map(),
    teamMemberViewModel = models.TeamMember_view || {},
    teamMemberViewData = teamMemberViewModel.data || [];
  
    if (teamMemberViewData.length > 0)
      console.log('teamMemberViewData:', teamMemberViewData);
    else
      console.log('teamMemberViewModel:', teamMemberViewModel);
  }

}

export default Info;
