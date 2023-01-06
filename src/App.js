import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Main from './components/Main';
import UserFrom from './components/UserForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route path='/form' element={<UserFrom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
