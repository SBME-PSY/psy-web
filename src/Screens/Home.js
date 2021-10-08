import Aboutus from '../Components&sections/about_us';
import '../App.css';
import Features from '../Components&sections/Features';
import Header from '../Components&sections/Header';
import Navigation from '../Components&sections/Navbar';
import therapy from '../assets/Img/undraw_Group_chat_re_frmo.svg';
import online_test from '../assets/Img/undraw_online_test_gba7.svg';
import meeting from '../assets/Img/undraw_schedule_meeting_52nu.svg';
import doctors from '../assets/Img/undraw_doctors_hwty.svg';
import online_article from '../assets/Img/undraw_Online_article_re_daq5.svg';
import todo from '../assets/Img/undraw_To_do_list_re_9nt7.svg';
import aboutus from '../assets/Img/undraw_About_us_page_re_2jfm.svg';
import mobile_app from '../assets/Img/undraw_Mobile_app_re_catg.svg';
import Download from '../Components&sections/Download';
import google_play from '../assets/Img/google-play-badge.png';
import app_store from '../assets/Img/Download-on-the-App-Store-01.png';
import Ourdoctors from '../Components&sections/Our_Doctors';
import Feedback from '../Components&sections/Feedback';
import Footer from '../Components&sections/Footer';


const our_doctors = [
  {
      "name": "John Doe",
      "specialization": "Specialized in Depression",
      "id":1
  },
  {
      "name": "Jane Doe",
      "specialization": "Specialized in Communication Disorders",
      "id":2
  },
  {
      "name": "Ahmed Galal",
      "specialization": "Specialized in Eating Disorders",
      "id":3
  },
  {
      "name": "Ahmed Essam Amir",
      "specialization": "Specialized in Personality Disorders",
      "id":4
  },
];

const features = [
  {
      "imagesrc":  therapy,
      "caption": "Participate in a one-on-one or group therapy ",
      "id":1,
  },
  {
      "imagesrc":meeting,
      "caption": "Book a Doctor Appointment",
      "id":2,
  },
  {
      "imagesrc":doctors,
      "caption":"Doctors follow up and medicine prescribtions",
      "id":3
  },
  {
      "imagesrc":online_test,
      "caption":"Take 2 types of tests, One made by AI, the other by our doctors. Which will give you an Initial diagnosis.",
      "id":4
  },
  {
      "imagesrc":todo,
      "caption":"Add your all of  your monthly routines and track them",
      "id":5
  },
  {
      "imagesrc":online_article ,
      "caption":"Read Articles Made by our Doctors to help you understand more about yourself",
      "id":6
  },
];

const clients_feedback = [
  {
    "feedback":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    "name":"user 1",
    "id":1
  },
  {
    "feedback":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    "name":"user 2",
    "id":2
  },
  {
    "feedback":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    "name":"user 3",
    "id":3
  },
  {
    "feedback":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    "name":"user 4",
    "id":4
  }
]

function Home() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Features features={features}/>
      <Aboutus aboutus={aboutus}/>
      <Download mobile_app={mobile_app} google_play={google_play} app_store={app_store} />
      <Ourdoctors our_doctors={our_doctors}/>
      <Feedback clients_feedback={clients_feedback}/>
      <Footer google_play={google_play} app_store={app_store}/>
    </div>
  );
}

export default Home;