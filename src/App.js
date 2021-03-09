import { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipping from './Components/Shipping/Shipping';

export const CategoryContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={count}>
      <p>Count Value: {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipping count={count}></Shipping>


    </CategoryContext.Provider>
  );
}

export default App;
