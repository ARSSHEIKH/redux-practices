import './App.css';
// import InputForm from "./InputForm";
import InputForm from "./Components/InputForm";
import {InputDisplay} from "./Components/InputDisplay";
// import SignUpForm from "./SignUpForm";
import UserContextProvider from "./Contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
          <h2>Context Example # 01</h2>
          <InputForm/> 
          <br/>
          <InputDisplay/><br/><br/><br/>
          {/* <SignUpForm/> */}
      </UserContextProvider>
    </div>
  );
}

export default App;