import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/Home/About/About';
import Skills from './components/Home/Skills/Skills';
import Contacts from './components/Home/Contacts/Contacts';
import Education from './components/Home/Education/Education';
import Footer from './components/Home/Footer/Footer';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Main></Main>,
  //     children: <Home></Home>
  //   }
  // ])
  return (
    <div className='w-[70%] mx-auto'>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
