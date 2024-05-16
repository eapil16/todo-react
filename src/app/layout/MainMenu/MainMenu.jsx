import { Link } from 'react-router-dom';
import slyles from './MainMenu.module.scss';
const MainMenu = () => {
    return (
     <ul className={slyles.menu}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/settings'>Settings</Link>
        </li>
        <li>
          <Link to='#'>Logout</Link>
        </li>
        <li>
          <Link to='/welcome'>Welcome</Link>
        </li>
        <li>
          <Link to='/singin'>SingIn</Link>
        </li>
        <li>
          <Link to='/singup'>SingUp</Link>
        </li>
        <li>
          <Link to='/forgotpassword'>ForgotPassword</Link>
        </li>
      </ul>
    )
}
  
export default MainMenu;