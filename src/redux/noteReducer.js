// initial state =================================================================
const initialState =
  localStorage.getItem("localNotes") !== null
    ? JSON.parse(localStorage.getItem("localNotes"))
    : [];

// noteReducer ===========================================================
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDNOTE":
      // console.log([...state, action.payload]);
      localStorage.setItem(
        "localNotes",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case "DELETENOTE":
      const deleteNote = state.filter((i) => {
        return i.note !== action.payload.note;
      });
      localStorage.setItem("localNotes", JSON.stringify(deleteNote));
      return deleteNote;
    case "EDITNOTETITLE":
      const editNote = state.map((i) => {
        return i.id - 1 == action.payload.id - 1 ? action.payload : i;
      });
      localStorage.setItem("localNotes", JSON.stringify(editNote));
      return editNote;

    default:
      return state;
  }
};
