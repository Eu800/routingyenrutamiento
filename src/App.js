import logo from './logo.svg';
import './App.css';
import Comp1 from './componentes/componente1';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Comp2 from './componentes/componente2';
import Comp3 from './componentes/componente3';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Home from './componentes/home';



function App() {
  
  const [brigadistas, setBrigadistas]=useState([
    {id:1,name: 'Estalin', age:23, ciudad:'Quito'},
    {id:2,name: 'Pedro', age:30, ciudad:'Ambato'},
    {id:3,name: 'Juan', age:24, ciudad:'Tulcan'},
    {id:4,name: 'Ana', age:20, ciudad:'Esmeraldas'},
    {id:5,name: 'Mateo', age:23, ciudad:'Guayaquil'},
  ]);

  function agregarBrigadista(nuevoB){
    brigadistas.push(nuevoB);
  };

  const getBrigadista = (id) => {
    return brigadistas.find((brigadista) => brigadista.id === parseInt(id));
  };

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home listabrigadistas={brigadistas}/>}></Route>
          <Route path="/brigadista/new" element={<Comp1 FagregarBri={agregarBrigadista}/>}></Route>
          <Route path="/brigadista/:id" element={<Comp2 getBrigadista={getBrigadista}/>}></Route>
          <Route path="/brigadista" element={<Comp3/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
