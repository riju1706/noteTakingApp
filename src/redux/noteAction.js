export const addNote = (payload) => {
  return {
    type: "ADDNOTE",
    payload,
  };
};
export const deleteNote = (payload) => {
  return {
    type: "DELETENOTE",
    payload,
  };
};
export const editNoteTitle = (payload) => {
  return {
    type: "EDITNOTETITLE",
    payload,
  };
};
