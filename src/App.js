import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Notes from "./components/notes/Notes";

function App() {
  return (
    <>
      <h1 className=" text-3xl mb-3 font-bold ml-4 text-green-600">
        Note-Taking App
      </h1>
      <Form />
      <div className=" w-screen p-5">
        <Notes />
      </div>
    </>
  );
}

export default App;
