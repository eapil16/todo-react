import slyles from './Footer.module.scss';
const Footer = () => {
    return (
      <footer className={slyles.footer}>
        <div className={slyles.container}>
          <p>&copy; 2024</p>
        </div>
      </footer>
    )
}
  
export default Footer;