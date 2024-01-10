import { Outlet } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
    <MainHeader/>
    <Outlet />
    </>
  );
}

export default App;
