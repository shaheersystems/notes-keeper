import "./App.css";
import Navabar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";
import Form from "./components/Form";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Navabar />
      <FormWrapper>
        <Form />
      </FormWrapper>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
