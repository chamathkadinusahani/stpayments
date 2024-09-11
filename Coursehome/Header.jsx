import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle} />
        <h1 className={styles.schoolName}>ABC School</h1>
      </div>
      <div className={styles.contactInfo}>
        <button className={styles.contactButton}>Contact Us</button>
        <div className={styles.phoneContainer}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada2fc23a9a938e3dce37b9e79851609782e442a3ea3fa3b18d7867d620a2ef5?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.phoneIcon} />
          <span className={styles.phoneNumber}>(011) 2345 567</span>
        </div>
      </div>
    </header>
  );
}

export default Header;