import axios from 'axios';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import OurGoal from '../components/OurGoal';
import Structure from '../components/Structure';
import Team from '../components/Team';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';


export default function Home({ headerData }) {
  return (
    <div>
      <div className={styles.bgContainer}>
        <Navbar/>
        <Header data={headerData}/>
      </div>
      <OurGoal />
      <Team />
      <Structure />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get('http://localhost:1337/api/home-page');
  const headerData = res.data.data.attributes; // Adjust this line based on your Strapi API response

  return {
    props: {
      headerData,
    },
    revalidate: 10,
  };
}