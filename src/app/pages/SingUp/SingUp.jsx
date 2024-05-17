import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { registerUser } from '@store/slices/authSlice'

import slyles from './SingUp.module.scss';
const SingUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(registerUser({ email, password }));
    }
  };

    return (
      <Form onSubmit={handleSubmit}>  
        <div className={slyles.container}>
          <div className={slyles.entrance}>
            <div className={slyles.entranceBlock}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-name"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="basic-confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  required
                />
              </InputGroup>
              <Button type="submit" variant="success">Go</Button>
            </div>
          </div>
        </div>
        </Form>
    )
}
  
export default SingUp;