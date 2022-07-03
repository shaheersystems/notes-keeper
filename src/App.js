import "./App.css";
import Navabar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";
import Form from "./components/Form";
import Card from "./components/Card";
import Empty from "./components/Empty";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [data, setData] = useState([]);
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleNote = (event) => {
    setNote(event.target.value);
  };
  const handleClose = (event) => {
    event.preventDefault();
    if (note !== "" || title !== "") {
      setData([{ id, title, note }, ...data]);
      setId(id + 1);
    }
    setTitle("");
    setNote("");
  };
  const handleDelete = (uId) => {
    const newData = data.filter((item) => item.id !== uId);
    setData(newData);
    setId(0);
  };
  const dataRenderer = () => {
    let dataArray = data.map((item) => {
      return (
        <Card
          key={item.id}
          title={item.title}
          note={item.note}
          handleDelete={() => handleDelete(item.id)}
        />
      );
    });
    return dataArray;
  };

  return (
    <div className="App">
      <Navabar />
      <FormWrapper>
        <Form
          value={title}
          handleTitle={handleTitle}
          handleNote={handleNote}
          noteValue={note}
          handleClose={handleClose}
        />
      </FormWrapper>
      <div className="cards">
        {data.length !== 0 ? dataRenderer() : <Empty />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
