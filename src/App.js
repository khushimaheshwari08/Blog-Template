import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import CreateBlog from './components/createBlog';
import Home from './components/home';
import LogIn from './components/logIn';
import PostDetail from './components/postDetail';
import SignUp from './components/signUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/postdetail/:id' element={<PostDetail/>}/>
     <Route path='/logIn' element={<LogIn/>} />
     <Route path='/signUp' element={<SignUp />}/>
     <Route path='/createBlog' element={<CreateBlog/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
