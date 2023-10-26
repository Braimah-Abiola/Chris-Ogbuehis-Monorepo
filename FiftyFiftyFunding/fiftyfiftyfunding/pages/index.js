import Header from '../components/Header';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.bgContainer}>
      <Navbar/>
      <Header />
      {/* Other components will go here */}
    </div>
  );
}
