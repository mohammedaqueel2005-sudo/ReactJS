import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className= {styles.Header}>
      <h1>BMS College of Engineering</h1>
      <button className={styles.btn}>Login</button>
    </div>
  );
}

export default Header;
