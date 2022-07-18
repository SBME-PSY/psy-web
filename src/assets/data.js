import therapy from './Img/undraw_Group_chat_re_frmo.svg';
import online_test from './Img/undraw_online_test_gba7.svg';
import meeting from './Img/undraw_schedule_meeting_52nu.svg';
import doctors from './Img/undraw_doctors_hwty.svg';
import online_article from './Img/undraw_Online_article_re_daq5.svg';
import todo from './Img/undraw_To_do_list_re_9nt7.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faChartLine } from '@fortawesome/free-solid-svg-icons';
const our_doctors = [
  {
    name: 'John Doe',
    specialization: 'Specialized in Depression',
    id: 1,
  },
  {
    name: 'Jane Doe',
    specialization: 'Specialized in Communication Disorders',
    id: 2,
  },
  {
    name: 'Ahmed Galal',
    specialization: 'Specialized in Eating Disorders',
    id: 3,
  },
  {
    name: 'Ahmed Essam Amir',
    specialization: 'Specialized in Personality Disorders',
    id: 4,
  },
];

const features = [
  {
    imagesrc: therapy,
    caption: 'Participate in a one-on-one or group therapy ',
    id: 1,
  },
  {
    imagesrc: meeting,
    caption: 'Book a Doctor Appointment',
    id: 2,
  },
  {
    imagesrc: doctors,
    caption: 'Doctors follow up and medicine prescribtions',
    id: 3,
  },
  {
    imagesrc: online_test,
    caption:
      'Take 2 types of tests, One made by AI, the other by our doctors. Which will give you an Initial diagnosis.',
    id: 4,
  },
  {
    imagesrc: todo,
    caption: 'Add your all of  your monthly routines and track them',
    id: 5,
  },
  {
    imagesrc: online_article,
    caption:
      'Read Articles Made by our Doctors to help you understand more about yourself',
    id: 6,
  },
];

const clients_feedback = [
  {
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    name: 'user 1',
    id: 1,
  },
  {
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    name: 'user 2',
    id: 2,
  },
  {
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    name: 'user 3',
    id: 3,
  },
  {
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    name: 'user 4',
    id: 4,
  },
];

const governorate = [
  'Alexandria',
  'Aswan',
  'Asyut',
  'Beheira',
  'Beni Suef',
  'Cairo',
  'Dakahlia',
  'Damietta',
  'Faiyum',
  'Gharbia',
  'Giza',
  'Ismailia',
  'Kafr El Sheikh',
  'Luxor',
  'Matruh',
  'Minya',
  'Monufia',
  'New Valley',
  'North Sinai',
  'Port Said',
  'Qalyubia',
  'Qena',
  'Red Sea',
  'Sharqia',
  'Sohag',
  'South Sinai',
  'Suez',
];

const SidebarData = [
  {
    title: 'Statistics',
    path: '/Admin',
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    title: 'View & Edit Professionals',
    path: '/Admin/professionals',
    icon: <FontAwesomeIcon icon={faUserMd} />,
  },
];

const maritalStatus = ['Single', 'Married', 'Divorced', 'Seperated', 'Engaged'];
const sex = ['Male', 'Female'];
const role = ['user', 'doctor'];
const specialization = [
  'Psychiatrist',
  'Neuropsychologist',
  'Psychologist',
  'Clinical Psychologist',
  'Counseling Psychologist',
  'School Psychologist',
  'Psychotherapist',
  'Psychology Assistant',
  'Psychology Technician',
  'Psychology Teacher',
];

export {
  clients_feedback,
  features,
  our_doctors,
  governorate,
  SidebarData,
  maritalStatus,
  sex,
  role,
  specialization,
};
