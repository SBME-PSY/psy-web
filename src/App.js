import Aboutus from './about_us';
import './App.css';
import Features from './Features';
import Header from './Header';
import Navigation from './Navbar';
import therapy from './assets/Img/undraw_Group_chat_re_frmo.svg';
import online_test from './assets/Img/undraw_online_test_gba7.svg';
import meeting from './assets/Img/undraw_schedule_meeting_52nu.svg';
import doctors from './assets/Img/undraw_doctors_hwty.svg';
import online_article from './assets/Img/undraw_Online_article_re_daq5.svg';
import todo from './assets/Img/undraw_To_do_list_re_9nt7.svg';
import aboutus from './assets/Img/undraw_About_us_page_re_2jfm.svg';
import mobile_app from './assets/Img/undraw_Mobile_app_re_catg.svg';
import Download from './Download';
import google_play from './assets/Img/google-play-badge.png';
import app_store from './assets/Img/Download-on-the-App-Store-01.png';
import Ourdoctors from './Our_Doctors';

const features = [
  {
      "imagesrc":  therapy,
      "caption": "Participate in a one-on-one or group therapy ",
      "id":1,
  },
  {
      "imagesrc":online_test,
      "caption": "Take 2 types of tests, One made by AI, the other by our doctors. Which will give you an Initial diagnosis.",
      "id":2,
  },
  {
      "imagesrc":meeting,
      "caption":"Book a Doctor Appointment",
      "id":3
  },
  {
      "imagesrc":doctors,
      "caption":"Doctors follow up and medicine prescribtions",
      "id":4
  },
  {
      "imagesrc":online_article,
      "caption":"Read Articles Made by our Doctors to help you understand more about yourself",
      "id":5
  },
  {
      "imagesrc":todo,
      "caption":"Add your all of  your monthly routines and track them",
      "id":6
  },
];

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Features features={features}/>
      <Aboutus aboutus={aboutus}/>
      <Download mobile_app={mobile_app} google_play={google_play} app_store={app_store} />
      <Ourdoctors/>
    </div>
  );
}

export default App;
