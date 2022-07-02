import "./App.css";
import Navabar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Navabar />
      <FormWrapper>
        <Form />
      </FormWrapper>
    </div>
  );
}

export default App;
