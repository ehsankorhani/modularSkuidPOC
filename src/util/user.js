
export const getUserEmail = (teamMember) => {
  if (teamMember && teamMember.Email)
    return teamMember.Email;

  return "Anonymous";
}
