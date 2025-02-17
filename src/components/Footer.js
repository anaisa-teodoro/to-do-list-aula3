import "../style/App.css";

function Footer() {
  return (
    <footer className="footer">
      <p>To-Do-List - Devs2Blu © {`${new Date().getFullYear()}`}</p>
    </footer>
  );
}

export default Footer;