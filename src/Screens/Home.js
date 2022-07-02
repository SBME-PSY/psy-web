import '../App.css';
import Aboutus from '../Components&sections/HomeSections/about_us';
import Features from '../Components&sections/HomeSections/Features';
import Header from '../Components&sections/HomeSections/Header';
import Navigation from '../Components&sections/HomeSections/Navbar';
import aboutus from '../assets/Img/undraw_About_us_page_re_2jfm.svg';
import mobile_app from '../assets/Img/undraw_Mobile_app_re_catg.svg';
import Download from '../Components&sections/HomeSections/Download';
import google_play from '../assets/Img/google-play-badge.png';
import app_store from '../assets/Img/Download-on-the-App-Store-01.png';
import Ourdoctors from '../Components&sections/HomeSections/Our_Doctors';
import Feedback from '../Components&sections/HomeSections/Feedback';
import Footer from '../Components&sections/HomeSections/Footer';
import { features, our_doctors, clients_feedback } from '../assets/data';
import { useSelector } from 'react-redux';
function Home() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <Navigation />
      <Header />
      <Features features={features} />
      <Aboutus aboutus={aboutus} />
      <Download
        mobile_app={mobile_app}
        google_play={google_play}
        app_store={app_store}
      />
      <Ourdoctors our_doctors={our_doctors} />
      <Feedback clients_feedback={clients_feedback} />
      <Footer google_play={google_play} app_store={app_store} />
    </div>
  );
}

export default Home;
