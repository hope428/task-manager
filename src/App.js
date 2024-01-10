import { Outlet } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Sidebar from './components/Sidebar';
import { useState } from 'react';


function App() {

  const [isOpen, setIsOpen] = useState(false) 
  const handleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <MainHeader toggleSidebar={handleSidebar}/>
    <Sidebar isOpen={isOpen}/>
    <Outlet />
    </>
  );
}

export default App;
