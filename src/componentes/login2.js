
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { FormattedMessage, useIntl } from "react-intl";

function Login2() {
  const navigate=useNavigate();
  const params = useParams();
  const [formValues, setFormValues] = useState({
    
    password: "",
  });

  const [validationStates, setValidationStates] = useState({
    passwordState: true,
  });


  const validatePassword = (password) => {
    return password.length >= 9 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  };


  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
    setValidationStates({ ...validationStates, passwordState: validatePassword(password) });
  };

  const clickSubmit = () => {
    const isValidPassword = validatePassword(formValues.password);

    if (!isValidPassword) {
      setValidationStates({ ...validationStates, passwordState: false });
      return;
    }
    navigate("/partes");
    alert(JSON.stringify(formValues));
    
  };
  const intl = useIntl();
  const currentLocale = intl.locale;

  return (
    <div>
      <h1>{params.correo}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><FormattedMessage id="Ingresa tu contraseña"/></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
          />
          {!validationStates.passwordState && (
            <Form.Text className="text-danger">
              Your password should have numbers and letters and should be at least 9 char long.
            </Form.Text>
          )}
        </Form.Group>


        <Button variant="primary" onClick={clickSubmit}>
          <FormattedMessage id="Siguiente"/>
        </Button>
      </Form>
    </div>
  );
}

export default Login2;
