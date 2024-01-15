import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import {Provider} from 'react-redux';
import store from './Store/store';
import UserDetails from './Components/UserDetails';
import store2 from './Store/store2';
import HomePage from './Project Task/Pages/HomePage';
import AboutPage from './Project Task/Pages/AboutPage';
import SettingsPage from './Project Task/Pages/SettingsPage';
import Layout from './Project Task/Pages/Layout';
function 
App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/cart' element={<Cart/>}></Route>
        
      </Routes>
      </BrowserRouter>
      </Provider> */}
     
     <Provider store={store}>
      <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/settings' element={<SettingsPage/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
