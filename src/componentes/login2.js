
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Parte from './parte';
import Partes from './partes';
import { render } from '@testing-library/react';

function Login2() {
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

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    const isValidPassword = validatePassword(formValues.password);

    if (!isValidPassword) {
      setValidationStates({ ...validationStates, passwordState: false });
      return;
    }else{
        return render(<Partes/>)
    }
    alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <h1>Acceder</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
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
          Siguiente
        </Button>
      </Form>
    </div>
  );
}

export default Login2;
