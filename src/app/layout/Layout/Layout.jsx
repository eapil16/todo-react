/* eslint-disable react/prop-types */
import Header from '@layout/Header';
import Footer from '@layout/Footer';

import slyles from './Layout.module.scss';

const Layout = ({children}) => {
    return (
      <div className={slyles.wrapper}>
        <Header />
        <main className={slyles.mainSection}>
          {children}
        </main>
        <Footer />  
      </div>
    )
}
  
export default Layout;