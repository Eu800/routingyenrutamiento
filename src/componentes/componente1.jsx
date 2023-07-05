import React from "react";
import {Link, useNavigate} from 'react-router-dom';

function Comp1(props){

	let vnombre;
	let vedad;
	let vciudad;
	
	const {FagregarBri}=props;

	let navigate=useNavigate();

	const Tnombre=(e)=>{
		vnombre = e.target.value;
	}

	const Tedad=(e)=>{
		vedad = e.target.value;
	}

	const Tciudad=(e)=>{
		vciudad = e.target.value;
	}

	function aniadirBrigadista(){
		const nuevoBrigadista={id:6,name: vnombre,age: vedad,ciudad: vciudad};
		FagregarBri(nuevoBrigadista);
		navigate('/');
	}

	return(
		<div>
			<div><h1>Agregar Brigadistas</h1></div>
			<div>Nombre:</div>
			<div><input type="text" onChange={Tnombre}></input></div>
			<div>Edad:</div>
			<div><input type="number" onChange={Tedad}></input></div>
			<div>Ciudad:</div>
			<div><input type="text" onChange={Tciudad}></input></div>
			{/* <div><Link to="/brigadista/new">Siguiente Componente</Link></div> */}
			<div><button onClick={aniadirBrigadista}>Agregar</button></div>
		</div>
	);
}

export default Comp1;