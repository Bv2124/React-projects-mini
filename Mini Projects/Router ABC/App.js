import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import A from "./Components/A";
import B from "./Components/B"; 
import C from "./Components/C"; 
import D from "./Components/D"; 
import NavigationBar from "./Navbar";
function App() {
  return (
    <Router>
       <NavigationBar/>
      <Routes>
        <Route path='/A' element={<A/>} />
        <Route path='/B' element={<B/>} />
        <Route path='/C' element={<C/>} />
        <Route path='/D' element={<D/>} />
      </Routes>
    </Router>
  );
}

export default App;
