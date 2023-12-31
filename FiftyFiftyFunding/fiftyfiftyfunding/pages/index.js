import axios from 'axios';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import OurGoal from '../components/OurGoal';
import Structure from '../components/Structure';
import Team from '../components/Team';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div>
      <div className={styles.bgContainer}>
        <Navbar/>
        <Header/>
      </div>
      <OurGoal />
      <Team />
      <Structure />
      <Footer />
    </div>
  );
}