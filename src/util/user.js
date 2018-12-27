
getUserEmail = (teamMember) => {
  if (teamMember && teamMember.Email)
    return teamMember.Email;

  return 'Anonymous';
}

//export {getUserEmail as UserEmail};
export {getUserEmail};
