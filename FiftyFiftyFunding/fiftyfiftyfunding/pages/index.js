import Header from '../components/Header';
import Navbar from '../components/Navbar';
import OurGoal from '../components/OurGoal';
import Team from '../components/Team';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.bgContainer}>
        <Navbar/>
        <Header />
      </div>
      <OurGoal />
      <Team />
      {/* Other components will go here */}
    </div>
  );
}
