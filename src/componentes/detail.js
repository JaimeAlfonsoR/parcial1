import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Detail() {
  const [parte, setParte] = useState([]); 
  const params = useParams();
  const id = params.parteId;
  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/JaimeAlfonsoR/parcial1/master/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setParte (data.find((item)=> item.carModel === id));
      });
  }, []);
  
  return (
    <div>
      <h1>{parte.partName}</h1>
      <img src={parte.image}></img>
      <p>{parte.carMaker}</p>
      <p>{parte.carModel}</p>
      <p>{parte.carYear}</p>
      <p>{parte.price}</p>
      <p>{parte.description}</p>
    </div>
  );
}