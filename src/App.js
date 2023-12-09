import './App.css';
import Charecters from './charecters/charecters';
import DetailChar from './charecters/detailChar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Charecters/>}/>
        <Route exact path='/charecters/:id' element={<DetailChar/>}/>
      </Routes>
    </div>
  );
}

export default App;
