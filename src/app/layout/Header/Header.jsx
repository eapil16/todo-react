import MainMenu from '@layout/MainMenu';

import slyles from './Header.module.scss';
const Header = () => {
    return (
      <header className={slyles.header}>
        <div className={slyles.container}>
          <div className={slyles.headerBlock}>
            <p>TODO-name</p>  
            <MainMenu />
          </div>
        </div>
      </header>
    )
}
  
export default Header;