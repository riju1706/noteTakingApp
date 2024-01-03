import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../redux/noteAction";

export default function Form() {
  // hook =====================================================
  const [noteTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState("");
  const [id, setId] = useState(0);
  const notes = useSelector((i) => i.notes);
  const dispatch = useDispatch();

  // handeler =================================================
  const submitHandeler = (e) => {
    e.preventDefault();
    if (note) {
      dispatch(addNote({ noteTitle, note, id }));
      setNoteTitle("");
      setNote("");
      setId((i) => i + 1);
    } else alert("please enter note");
  };
  return (
    <>
      <div className="flex flex-col items-center w-screen  flex justify-center items-center ">
        <form className="flex flex-col w-80 " onSubmit={submitHandeler}>
          <input
            type="text"
            className="my-2 border-2 border-blue-200 px-2"
            placeholder="Title"
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
          />
          <textarea
            rows="8"
            cols="40"
            className="border-2 border-blue-200 mb-2 px-2"
            placeholder="Enter your Notes"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
          <button
            type="submit"
            className="bg-blue-500  text-white py-2 w-full rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
