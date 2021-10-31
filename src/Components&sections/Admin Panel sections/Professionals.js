import React ,{useState} from 'react';
import { Container, Row , Col, Button, Modal,ModalBody,ModalFooter,ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import certificate from '../../assets/Img/Idaho-State-U-Certificate-FA19-(1).jpg';

const ProfessionalsData = [{
    name:"John doe",
    id:1,
    gender:'male',
    email:'adaskjdas@gmail.com',
    phone_number:'+297798165028',
    marital_status:'single',
    Specialization:"Child depression",
    profile_picture: <FontAwesomeIcon size='3x' icon={faUser}/>,
    certificate:'abdfsd',
    clinic_address:'ksadlkas-dkgmfdl-6lkasdkal',
    certificate_picture: certificate
},{
    name:"adam doe",
    id:2,
    gender:'male',
    clinic_address:'ksadlkas-dkgmfdl-6lkasdkal',
    phone_number:'+216548165028',
    email:'adaskjdas@gmail.com',
    marital_status:'single',
    Specialization:"Child depression",
    profile_picture: <FontAwesomeIcon size='3x' icon={faUser}/>,
    certificate:'abdfsd',
    certificate_picture: certificate
},{
    name:"jane doe",
    id:3,
    gender:'female',
    phone_number:'+2362011123223',
    clinic_address:'ksadlkas-dkgmfdl-6lkasdkal',
    marital_status:'married',
    email:'adaskjdas@gmail.com',
    Specialization:"Child depression",
    profile_picture: <FontAwesomeIcon size='3x' icon={faUser}/>,
    certificate:'abdfsd',
    certificate_picture: certificate
}];


const Professionals=()=>{
    const [Professional,setmodal_opject] = useState(null);   
    const [modal, setModal] = useState(false);
    const toggle = () =>setModal(!modal);
  return (
      <Container className="mt-5">
         {Professional&& <Modal key={Professional.id} isOpen={modal} className='modal-lg'  toggle={toggle}>
                              <ModalHeader toggle={toggle}>Application Info</ModalHeader>
                              <ModalBody >
                                  <Row  ><div className='d-flex flex-row justify-content-center'>{Professional.profile_picture}</div></Row>
                                  <Row>
                                      <Col >
                                          <h4 className='mt-4 pb-3 border-bottom border-1 border-dark'> Personal Info: </h4>
                                          <div className=' my-3 d-flex flex-row justify-content-center'>
                                              <h5 className='d-inline-block'>Name:</h5>
                                              <h5 className='d-inline-block mx-3'>{Professional.name}</h5>
                                          </div>
                                          <div className=' my-3 d-flex flex-row justify-content-center'>
                                              <h5 className='d-inline-block'>Email:</h5>
                                              <h5 className='d-inline-block mx-3'>{Professional.email}</h5>
                                          </div>
                                          <div className=' my-3 d-flex flex-row justify-content-center'>
                                              <h5 className='d-inline-block'>Gender:</h5>
                                              <h5 className='d-inline-block mx-3'>{Professional.gender}</h5>
                                          </div>
                                          <div className=' my-3 d-flex flex-row justify-content-center'>
                                              <h5 className='d-inline-block'>Marital Status:</h5>
                                              <h5 className='d-inline-block mx-3'>{Professional.marital_status}</h5>
                                          </div>
                                          <div className=' my-3 d-flex flex-row justify-content-center'>
                                              <h5 className='d-inline-block'>Clinic Address:</h5>
                                              <h5 className='d-inline-block mx-3'>{Professional.clinic_address}</h5>
                                          </div>
                                          <div className=' my-3 d-flex flex-row justify-content-center'>
                                              <h5 className='d-inline-block'>Phone Number:</h5>
                                              <h5 className='d-inline-block mx-3'>{Professional.phone_number}</h5>
                                          </div>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col>
                                          <h4 className='mt-4 pb-3 border-bottom border-1 border-dark'>Certificate Information</h4>
                                          <div className=' my-3 d-flex flex-row justify-content-center'>
                                              <h5 className='d-inline-block'>Certificate name :</h5>
                                              <h5 className='d-inline-block mx-3'>{Professional.certificate}</h5>
                                          </div>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Row><h5 className='text-center d-inline-block'>Certificate Picture:</h5></Row>
                                      <div className='d-flex flex-row justify-content-center'>
                                          <img  width='100%' height='70%' src={Professional.certificate_picture} alt='college certificate'/>
                                      </div>
                                  </Row>
                              </ModalBody>
                              <ModalFooter>
                                  <Button color="success" onClick={toggle}>Accept Application</Button>
                                  <Button color="danger" onClick={toggle}>Reject Application</Button>
                              </ModalFooter>
                          </Modal>}
          <h1  className=" border-bottom border-2 pb-2 border-dark">Professionals Applications</h1>
          {ProfessionalsData.map((Professional)=>{
                  return(
                      <Row id="application-row" className="my-5 mx-auto justify-content-around align-items-center  py-4 ">
                          <Col xs={1}>
                              {Professional.profile_picture}
                          </Col>
                          <Col xs={3} >
                              <h6 className="mt-3">{Professional.name}</h6>
                              <span className='mt-3'>{Professional.Specialization}</span>
                          </Col>
                          <Col xs="auto">
                              <Button color="primary" onClick={()=>{
                                  toggle()
                                  setmodal_opject(Professional)
                              }}>View Applications</Button>
                          </Col>
                          
                      </Row>
                  )
              })}
      </Container>
  )
}

export default  Professionals;