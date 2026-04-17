import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer my-3">
      <div className="container footer-inner text-center">
        <p>© 2026 CarWash by Sivicar · Tutti i diritti riservati</p>

        <img
          src="/sivicar-logo.png"
          alt="sivicar-logo"
          className="footer-logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
