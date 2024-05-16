import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import slyles from './ForgotPassword.module.scss';
const ForgotPassword = () => {
    return (
      <div className={slyles.container}>
        <div className={slyles.entrance}>
          <div className={slyles.entranceBlock}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-email"
              />
            </InputGroup>
            <Button variant="success">Go</Button>
          </div>
        </div>
      </div>
    )
}
  
export default ForgotPassword;