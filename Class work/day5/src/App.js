import { BrowserRouter,Route,Routes } from 'react-router-dom';
import RenderingList from './components/RenderingList';
import './App.css';
import ButtonMUI from './components/ButtonMUI';
import { Grid } from '@mui/material';
import GridMUI from './components/GridMUI';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RenderingList/>}/>
        <Route path='/a' element={<ButtonMUI/>}/>
        <Route path='/b' element={<GridMUI/>}/>
      </Routes>
      </BrowserRouter>
      <RenderingList/>
      <ButtonMUI/>
      <GridMUI/>
    </div>
  );
}

export default App;