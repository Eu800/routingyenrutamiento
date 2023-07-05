import React from "react";
import {Link, useNavigate} from 'react-router-dom';

function Home(props){
	
	const{listabrigadistas}=props;

	let navigate=useNavigate();

	return(
		<div id="listadobrigadistas">
			<div><h1>Lista de Brigadistas</h1></div>
			<div><button onClick={()=>navigate('/brigadista/new')}>Agregar</button></div>
			<ul>
				{listabrigadistas.map((item)=>{return(
					// <li>{item.name}</li>
					<li><Link to={"/brigadista/:"+item.id}>{item.name}</Link></li>
				)})}
			</ul>
			{/* <Link to="/brigadista/id/:200">Siguiente Componente</Link> */}
		</div>
	);
}

export default Home;