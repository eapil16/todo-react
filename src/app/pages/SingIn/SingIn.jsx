import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import slyles from './SingIn.module.scss';
const SingIn = () => {
    return (
      <div className={slyles.container}>
        <div className={slyles.entrance}>
          <div className={slyles.entranceBlock}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-password"
              />
            </InputGroup>
            <Button variant="success">Go</Button>
          </div>
        </div>
      </div>
    )
}
  
export default SingIn;