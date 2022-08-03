import { Routes, Route } from 'react-router-dom';

import MainScreen from './components/MainScreens/MainScreen';
import Home from './components/MainScreens/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainScreen/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
