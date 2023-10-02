
import { render } from '@testing-library/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Login2 from './login2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage, useIntl } from "react-intl";

function Login1() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
  });

  const [validationStates, setValidationStates] = useState({
    emailState: true,

  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormValues({ ...formValues, email });
    setValidationStates({ ...validationStates, emailState: validateEmail(email) });
  };

  const clickSubmit = () => {
    const isValidEmail = validateEmail(formValues.email);

    if (!isValidEmail) {
      setValidationStates({ ...validationStates, emailState: false });
      return;
    }
    alert(JSON.stringify(formValues));
    navigate('/Login2/'+formValues.email);
  };
  const intl = useIntl();
  const currentLocale = intl.locale;

  return (
    <div>
      <h1><FormattedMessage id="Acceder"/></h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label><FormattedMessage id="Correo electronico"/></Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar Email"
            onChange={handleEmailChange}
            value={formValues.email}
          />
          {!validationStates.emailState && (
            <Form.Text className="text-danger">
              Your email should follow and established format.
            </Form.Text>
          )}
        </Form.Group>        

        <Button variant="primary" onClick={clickSubmit} >
          <FormattedMessage id="Siguiente"/>
        </Button>
      </Form>
    </div>
  );
}

export default Login1;