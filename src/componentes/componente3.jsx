import React from "react";
import {Link, useNavigate} from 'react-router-dom';



function Comp3(props){
	
	let navigate=useNavigate();
	
	
	return(
		<div>
			<div>Componente 3</div>
			<button onClick={()=>navigate('/brigadista/new')}>Siguiente</button>
		</div>
	);
}

export default Comp3;