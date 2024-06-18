
import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionComponents from './components/FunctionComponents';

function App() {

  let name= "Kamini Jha" ;
  return (
    <>
    <ClassComponents/>
    <FunctionComponents/>
        <span>
         <u>Hello, I am {name}.</u>
        </span>
        </>   
  );
}

export default App;
