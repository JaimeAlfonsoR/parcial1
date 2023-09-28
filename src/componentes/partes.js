
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Parte from "./parte";

const { useEffect, useState } = require("react");

function Partes() {
 const [partes, setPartes] = useState([]);
 useEffect(() => {
   const URL ="https://raw.githubusercontent.com/JaimeAlfonsoR/parcial1/master/datos.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setPartes(data);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Listado de partes</h2>
     <hr></hr>
     <Row>
       {partes.map((parte) => (
         <Col key={parte.carModel}>
           <Parte parte={parte} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Partes;