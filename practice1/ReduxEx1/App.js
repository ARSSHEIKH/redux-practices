import './App.css';
import InputForm from "./Components/InputForm";
import InputResult from "./Components/InputResult";
import SignUpForm from "./Components/SignUpForm";
import {GetApi} from "./Components/GetApi";

function App() {
  return (
    <div className="App">
        <h2>Redux Example # 01</h2>
        <GetApi/>
        <InputForm/>
        <br/>
        <InputResult/><br/><br/><br/>
        <SignUpForm/>
    </div>
  );
}

export default App;