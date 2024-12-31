import './Header.css';


export function Header() {
    return (
      <header className="header" id="header">
        <h1>Sewane 🙏</h1>
        <nav>
          <ul className="nav-links">
          <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div></div>
      </header>
    );
  }
  