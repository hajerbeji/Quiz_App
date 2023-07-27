import logo from './logo.svg';
import './App.css';

// -----------------------import components--------------
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Profil from './components/Profil';
import Favoris from './components/Favoris';
// ------------------End import components---------------------

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';



function App() {
  // ------------useState : list of variables--------
  const [username, setusername] = useState("")
  const [index, setindex] = useState(0)
  const [showmodalfinquiz, setshowmodalfinquiz] = useState(false)
  const [score, setscore] = useState(0)
  const [favoris, setfavoris] = useState([])
  // ---------End list of useState---------
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login setusername={setusername} />} />
        <Route path='/signup' element={<SignUp setusername={setusername} />} />
        <Route path='/main' element={<Main setindex={setindex} index={index} showmodalfinquiz={showmodalfinquiz} setshowmodalfinquiz={setshowmodalfinquiz} favoris={favoris} setfavoris={setfavoris} score={score} setscore={setscore} username={username}  />} />
        <Route path='/profil' element={<Profil username={username} score={score}  />} />
        <Route path='/favoris' element={<Favoris   />} />
      </Routes>
    </div>
  );
}

export default App;
