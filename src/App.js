// import logo from './logo.svg';
// import './App.css';
// import Reward from './components/REwards/Rewards';
// import Menubar from './components/Menubar/Menubar';
// import Payout from './components/Payouts/PAypouts';
// import Products from './components/Products/Products';
// import Home3 from './components/home3/Home3';
// import HomePage2 from './components/Home2/Homepage2';
// import Home from './components/Home/Home';
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// function App() {
//   return (
//     <div className="App">
     
//       <BrowserRouter>
//       <Routes>


//       <Route path='/' exact element={<Home />} />
//                 <Route path='/home' exact element={<Home />} />

//                 <Route path='/HomePage2' element={<HomePage2 />}  />
//                 <Route path="Home3" element={<Home3 />}  />
//                 <Route path="products" element={<Products />}  />
//                 <Route path="Payout" element={<Payout />}  />
//                 <Route path="reward" element={<Reward />}  />


//       </Routes>
      
      
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import Reward from './components/REwards/Rewards';
import Menubar from './components/Menubar/Menubar';
import Payout from './components/Payouts/PAypouts';
import Products from './components/Products/Products';
import Home3 from './components/home3/Home3';
import HomePage2 from './components/Home2/Homepage2';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/HomePage2' element={<HomePage2 />} />
          <Route path='/Home3' element={<Home3 />} />
          <Route path='/products' element={<Products />} />
          <Route path='/Payout' element={<Payout />} />
          <Route path='/Reward' element={<Reward />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
