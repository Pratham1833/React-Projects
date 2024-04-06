import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className= {`${styles.nav} container`}>
        <div className="logo"> 
            <img src="/Images/logo.png"></img>
        </div>
        <ul>
            <li>Home</li>    
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar;