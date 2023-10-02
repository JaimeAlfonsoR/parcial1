
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Parte from "./parte";

import { FormattedMessage, useIntl } from "react-intl";

const { useEffect, useState } = require("react");

function Partes() {
  const [partes, setPartes] = useState([]);

  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/JaimeAlfonsoR/parcial1/master/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setPartes(data);
      });
  }, []);
  const intl = useIntl();
  const currentLocale = intl.locale;

  return (
    <div className="container">
      <h2 className="mt-2"><FormattedMessage id="Listado de Partes"/></h2>
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