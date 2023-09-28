import { useParams } from "react-router-dom";
export default function Detail() {
 const params = useParams();
 return (
   <div>
     <h1> {params.price}</h1>
   </div>
 );
}