
import { render } from '@testing-library/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Login2 from './login2';

function Login() {
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


  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    const isValidEmail = validateEmail(formValues.email);

    if (!isValidEmail) {
      setValidationStates({ ...validationStates, emailState: false });
      return;
    }else{
        return render(<Login2/>)
    }
    alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <h1>Acceder</h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
          Siguiente
        </Button>
      </Form>
    </div>
  );
}

export default Login;