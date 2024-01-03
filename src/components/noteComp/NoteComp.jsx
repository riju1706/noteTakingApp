import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, editNoteTitle } from "../../redux/noteAction";

export default function NoteComp({ notes, index }) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  // Handeler =============================================================
  const deleteHandeler = () => {
    if (window.confirm("confirm to delete?")) {
      dispatch(deleteNote(notes));
    }
  };
  const editHandeler = () => {
    const noteTitlep = prompt("edit note Title", notes.noteTitle);
    const notep = prompt("edit note", notes.note);
    if (notep && noteTitlep) {
      dispatch(
        editNoteTitle({ id: notes.id, note: notep, noteTitle: noteTitlep })
      );
    }
  };

  return (
    <>
      <div className=" border-2  border-neutral-300 flex   items-center  gap-2 px-4 flex-col sm:flex-row ">
        <p className="text-xl mr-4  font-bold w-6 bg-slate-600 rounded-full text-center text-white sm:w-10">
          {index + 1}
        </p>
        <h1 className="w-1/5">{notes && notes.noteTitle}</h1>

        <p className={showMore ? "w-4/5 " : "overflow-hidden w-4/5 h-12"}>
          {notes && notes.note}
        </p>
        <div className="flex gap-3 items-center">
          <button
            className=" border-2  bg-green-600 text-white w-24 h-9"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <div className="flex gap-3 sm:flex-col">
            <button
              className="w-1/5 border-2  bg-blue-600 text-white w-24"
              onClick={editHandeler}
            >
              Edit
            </button>

            <button
              className="w-1/5 border-2  bg-blue-600 text-white w-24"
              onClick={() => deleteHandeler(notes)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
