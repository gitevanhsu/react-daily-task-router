import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet
} from 'react-router-dom';

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout/>
    </>
    
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};


const Logout = () => {
  const navigate = useNavigate()
  return (
    <button onClick = {() => navigate('/login')}>Log Out</button>
  )
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Home = () => {
  return <p>這是首頁</p>;
};


const Post = () => {
  return (
    <>
      <p>下方顯示User ID</p>
      <Outlet/>
    </>
  )
}

const PostId = ()=>{
  const {postId} = useParams();
  return(
    <>
      <p>您的Post ID是:{postId}</p>
    </>
  )
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='post' element={<Post />} >
            <Route path=':postId' element={<PostId/>} />
            {/* path=變數名稱 */}
          </Route> 
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/todo" element={<Todo />} /> 
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
