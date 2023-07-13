import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Header2 from './Header2';
import Login from './component/Login';
import Login2 from './component/Login2';
import Register from './component/Register';
import Register2 from './component/Register2';
import User from './component/User';
import User2 from './component/User2';
import Update from './component/Update';
import Logout from './component/Logout';
import Reducer from './component/Reducer';
function App() {
  return (
    <>
      <Routes>
        <Route path="/header" exact element={<Header name={'basu'} id={1} />} />
        <Route path="/body" exact element={<Body />} />
        <Route path="/footer" exact element={<Footer />} />
        <Route path="/header2" exact element={<Header2 />} />
        <Route path="/login1" exact element={<Login />} />
        <Route path="/login2" exact element={<Login2 />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/register2" exact element={<Register2 />} />
        <Route path="/getUser" exact element={<User />} />
        <Route path="/getUser2" exact element={<User2 />} />
        <Route path="/updateuser/:id" exact element={<Update />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/reducer" exact element={<Reducer />} />
      </Routes>
    </>
  );
}

export default App;
