import React from 'react'
import './App.css';
import LogIn from './pages/LogIn';
import Regist from './pages/Register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
			<h1 className='form'>reciBooK</h1>
   

<Router>
  <Routes>
      <Route  path = "/" element = {<LogIn/>} />
      <Route  path = "/regist" element = {<Regist/>} />
  </Routes>
</Router> 
  

 </div>
  );
}

 export default App;


 
 /*
  <button
        onClick={() => {
          Regist()
          
        }}
      >
        Go
      </button>
 <button onClick={this.Regist} className="btn1" type="regist">
		Зареєструватись
		</button>

 const [regist, setRegister] = useState(false);
  const handleRegister = ( ) => {
	  Regist();
    setRegister(true);}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }
 
  updateContent = () => {
      this.setState({ LogIn()});
  }
 
  render() {
    return (
      <div>
        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.message }
        </div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={this.updateContent}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}*/
 
//export default App;
//import {Routes, Route } from 'react-router-dom';
/*function App() {
  return (
    <div>

    <div className="App">
			<h1>reciBooK</h1>
    </div>

    <div className="App">
      <LogIn/>
    

    </div>*/

    
   /*
   class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          LogIn
      }
    }
   
    updateContent = () => {
        this.setState({Regist});
    }
   
    render() {
      return (
        <div>
          <div className="App">
            { this.state.LogIn }
          </div>
          <div className="App">

            <button className="btn1" onClick={this.updateContent}>
              Regist
            </button>
          </div>
        </div>
       
      );
     }
    }
  
 
export default App;

*/

