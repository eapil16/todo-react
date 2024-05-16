import Button from 'react-bootstrap/Button';


import slyles from './Welcome.module.scss';
const Welcome = () => {
    return (
      <div className={slyles.container}>
        <div className={slyles.entrance}>
          <div className={slyles.entranceBlock}>
            <Button variant="success">Sign In</Button>
            <Button variant="success">Sign Up</Button>
          </div>
        </div>
      </div>
    )
}
  
export default Welcome;