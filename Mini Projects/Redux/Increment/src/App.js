import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions/counterActions';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function BlogPost() {
  let { id } = useParams();
  return <div style={{ fontSize: "50px" }}>
           Now showing post {id}
         </div>;
}
function Home() {
  return <h3>home page </h3>;
}
const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="//page/:id" element={<BlogPost/>}/>
      <Route path="/" element={<Home />}/>
      </Routes>
  </BrowserRouter>
 <h1>counter:{counter}</h1>
 <button onClick={()=>dispatch(increment())}>Increment</button>
 <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;