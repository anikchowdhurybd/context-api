import { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipping from './Components/Shipping/Shipping';

export const CategoryContext = createContext();




function App() {
  const [category, setCategory] = useState('laptop');


  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>Count Value: {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipping></Shipping>


    </CategoryContext.Provider>
  );
}

export default App;
