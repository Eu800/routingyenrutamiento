import React, { useState } from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';

// function Comp2(props){
const Comp2=({getBrigadista})=>{

	const { id } = useParams();
	let idbusqueda=id.replace(/:/g, "");
    const brigadista = getBrigadista(idbusqueda);

	// let {numero}=useParams();

	let navigate =useNavigate();

	if (!brigadista) {
		return (<div>
					<div><strong>No se encontró el brigadista</strong></div>
					<div><button onClick={()=>navigate('/')}>Back</button></div>
				</div>
				
		);
	  }



	return(
		<div>
			<div><h1>Detalle de Brigadista</h1></div>
			<div><strong>ID:</strong></div>
			<div>{brigadista.id}</div>
			<div><strong>Nombre:</strong></div>
			<div>{brigadista.name}</div>
			<div><strong>Edad:</strong></div>
			<div>{brigadista.age}</div>
			<div><strong>Ciudad:</strong></div>
			<div>{brigadista.ciudad}</div>
			<div><button onClick={()=>navigate('/')}>Back</button></div>
			{/* <p>Informacion de numero {numero}</p>
			<div>Componente 2</div>
			<Link to="/brigadista">Siguiente Componente</Link> */}
		</div>
	);
}

export default Comp2;