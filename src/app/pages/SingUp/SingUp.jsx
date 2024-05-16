import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import slyles from './SingUp.module.scss';
const SingUp = () => {
    return (
      <div className={slyles.container}>
        <div className={slyles.entrance}>
          <div className={slyles.entranceBlock}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
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
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                aria-describedby="basic-confirm-password"
              />
            </InputGroup>
            <Button variant="success">Go</Button>
          </div>
        </div>
      </div>
    )
}
  
export default SingUp;