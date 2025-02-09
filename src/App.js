
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
