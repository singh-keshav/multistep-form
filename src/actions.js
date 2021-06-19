export const addMember = (data) => {
  return { type: "addmember", payload: data };
};

export const removeMember = (data) => {
  return { type: "removemember", payload: data };
};

export const editMeber = (data) => {
  return { type: "editmember", payload: data };
};
