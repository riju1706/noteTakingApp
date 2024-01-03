import { useDispatch, useSelector } from "react-redux";
import NoteComp from "../noteComp/NoteComp";
import { addNote } from "../../redux/noteAction";

export default function Notes() {
  // hook =====================================================
  const dispatch = useDispatch();
  const notes = useSelector((i) => i.notes);

  return (
    <>
      <h1 className=" text-4xl text-center mb-5 font-bold">All Notes</h1>
      <div className=" gap-5 flex-wrap justify-center px-10">
        {notes.map((i, index) => (
          <NoteComp key={index} notes={i} index={index} />
        ))}
      </div>
    </>
  );
}
