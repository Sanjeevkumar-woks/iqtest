import './App.css';
import Home from './Home';
import Testpage from './Testpage';
import Results from './result'
import {Routes,Route} from 'react-router-dom';

function App() {



  
  
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/test' element={<Testpage/>}/>
      <Route eact path='/result' element={<Results/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
