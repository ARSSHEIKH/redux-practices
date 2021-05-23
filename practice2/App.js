import React from 'react';

//#region Redux
  import CounterInput from "./ReduxManagement/Components/CounterInput";
  import CounterOutput from "./ReduxManagement/Components/CounterOutput";
//#endregion

// #region ContextApi
// import UseState_and_useEffect from './StateManagement1/useState_and_useEffect';
// import CounterContextProvider from './StateManagement2/ContextApi/ThemeContext/ContextProvider';
// import CounterComponent from './StateManagement2/CounterComponent';
import Navbar from './StateManagement2/ContextApi/ThemeContext/components/Navbar';
import BookList from './StateManagement2/ContextApi/ThemeContext/components/BookList';
import ThemeContextProvider from "./StateManagement2/ContextApi/ThemeContext/ContextProvider";
//#endregion
import './App.css';

function App() {

  return (
    //#region Redux
      // <div className="App">
      //   <CounterOutput />
      //   <br/>
      //   <CounterInput />

      // </div>
  //#endregion



  // let counter = 0;

//#region PropState
  // const [counter, setCounter] = React.useState(0);
  // return (
  //   <div className="App">
  //     <CounterOutput counter={counter} />
  //     <br/>
  //     <CounterInput setCounter={setCounter} counter={counter}/>

  //   </div>
//#endregion


//#region ContextApi
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
      </ThemeContextProvider>
    </div>
    /* <UseState_and_useEffect counter={counter} />
      <CounterContextProvider>
        <CounterComponent />
      </CounterContextProvider> */
//#endregion
  );
}

export default App;
