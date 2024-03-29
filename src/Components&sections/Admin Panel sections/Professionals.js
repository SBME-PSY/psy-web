import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SRLWrapper } from 'simple-react-lightbox';
import axios from 'axios';
import cv from '../../assets/Img/doctorCV--1656866426180-756467720.jpeg';
const Professionals = () => {
  const [loading, isLoading] = useState(true);
  const [error, loadError] = useState(false);
  const [data, setData] = useState();
  const [patchResult, setPatchResult] = useState('');
  const [patchDone, isPatchDone] = useState(false);
  const [Professional, setmodal_object] = useState(null);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const manageApplication = (status, id) => {
    axios
      .patch(
        `/psy/admins/app-response/${id}`,
        {
          status: status,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('AdminToken')}`,
          },
        }
      )
      .then((res) => {})
      .catch((err) => {});
  };

  const ApproveApplication = (id) => {
    manageApplication('approved', id);
    setPatchResult('Application has been approved');
    isPatchDone(true);
    getProfessionalsApplications();
    setModal(false);
  };

  const rejectApplication = (id) => {
    manageApplication('refused', id);
    setPatchResult('Application has been refused');
    isPatchDone(true);
    getProfessionalsApplications();
    setModal(false);
  };

  const getProfessionalsApplications = () => {
    axios
      .get('/psy/admins/pending-app', {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${localStorage.getItem('AdminToken')}`,
      })
      .then((res) => {
        setData(res.data.data);
        isLoading(false);
      })
      .catch((err) => {
        isLoading(false);
        loadError(true);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getProfessionalsApplications();
    }, 1000);
  }, [Professional]);

  return (
    <Container className="mt-5">
      <h1 className=" border-bottom border-2 pb-2 mt-5 border-dark text-center">
        Professionals Applications
      </h1>
      {loading && (
        <div
          className="d-flex flex-row align-content-center justify-content-center mt-5"
          style={{ minHeight: '100vh' }}
        >
          <Spinner></Spinner>
        </div>
      )}
      {error && (
        <h1 className="text-center">
          Sorry!! There was a problem fetching your data
        </h1>
      )}

      {Professional && (
        <Modal
          key={Professional.id}
          isOpen={modal}
          className="modal-lg"
          toggle={toggle}
        >
          <ModalHeader toggle={toggle}>Application data</ModalHeader>
          <ModalBody>
            {patchDone && <h4> {patchResult} </h4>}
            <Row>
              <div className="d-flex flex-row justify-content-center">
                <img
                  className="border-2 rounded-circle border-dark"
                  width="20%"
                  src={Professional.picture}
                  alt="profile pic"
                />
              </div>
            </Row>
            <Row>
              <Col>
                <h4 className="mt-4 pb-3 border-bottom border-1 border-dark">
                  {' '}
                  Personal data:{' '}
                </h4>
                <div className=" my-3 d-flex flex-row justify-content-center">
                  <h5 className="d-inline-block">Name:</h5>
                  <h5 className="d-inline-block mx-3">{Professional.name}</h5>
                </div>
                <div className=" my-3 d-flex flex-row justify-content-center">
                  <h5 className="d-inline-block">Email:</h5>
                  <h5 className="d-inline-block mx-3">{Professional.email}</h5>
                </div>
                <div className=" my-3 d-flex flex-row justify-content-center">
                  <h5 className="d-inline-block">Gender:</h5>
                  <h5 className="d-inline-block mx-3">{Professional.sex}</h5>
                </div>
                <div className=" my-3 d-flex flex-row justify-content-center">
                  <h5 className="d-inline-block">Marital Status:</h5>
                  <h5 className="d-inline-block mx-3">
                    {Professional.maritalStatus}
                  </h5>
                </div>
                {Professional.clinics.map((clinic, index) => {
                  return (
                    <div key={index}>
                      <div className=" my-3 d-flex flex-row justify-content-center">
                        <h5 className="d-inline-block">
                          Clinic Address: {clinic.address}{' '}
                        </h5>
                        <h5 className="d-inline-block mx-3">
                          Price: {clinic.price} EGP{' '}
                        </h5>
                        <h5 className="d-inline-block mx-3">
                          Rating: {clinic.rating} / 5{' '}
                        </h5>
                      </div>
                      <div className=" my-3 d-flex flex-row justify-content-center">
                        <h5 className="d-inline-block mx-3">
                          Clinic Phone:{clinic.PhoneNumber}
                        </h5>
                      </div>
                    </div>
                  );
                })}

                {/* <div className=' my-3 d-flex flex-row justify-content-center'>
                            <h5 className='d-inline-block'>Clinic Address:</h5>
                            <h5 className='d-inline-block mx-3'>{Professional.address}</h5>
                        </div> */}
                <div className=" my-3 d-flex flex-row justify-content-center">
                  <h5 className="d-inline-block">Phone Number:</h5>
                  <h5 className="d-inline-block mx-3">{Professional.phone}</h5>
                </div>
                <div className=" my-3 d-flex flex-row justify-content-center">
                  <h5 className="d-inline-block">Governerate:</h5>
                  <h5 className="d-inline-block mx-3">
                    {Professional.governorate}
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 className="mt-4 pb-3 border-bottom border-1 border-dark">
                  Certificate Information
                </h4>
              </Col>
            </Row>
            <Row>
              <Row>
                <h5 className="text-center d-inline-block">
                  Certificate Picture:
                </h5>
              </Row>
              <div className="d-flex flex-row justify-content-center">
                <SRLWrapper
                  // elements={
                  //   process.env.REACT_APP_REMOTE_SERVER_DOMAIN + Professional.cv
                  // }
                  elements={cv}
                >
                  <img
                    // src={
                    //   process.env.REACT_APP_REMOTE_SERVER_DOMAIN +
                    //   Professional.cv
                    // }
                    src={cv}
                    alt="college certificate"
                  />
                </SRLWrapper>
              </div>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => ApproveApplication(Professional._id)}
            >
              Accept Application
            </Button>
            <Button
              color="danger"
              onClick={() => rejectApplication(Professional._id)}
            >
              Reject Application
            </Button>
          </ModalFooter>
        </Modal>
      )}

      {data &&
        data.map((Professional, index) => {
          return (
            <Row
              key={index}
              id="application-row"
              className="my-5 mx-auto justify-content-around align-items-center  py-4 "
            >
              <Col xs={1}>
                <img
                  width="100%"
                  className="border-2 rounded-circle border-dark"
                  src={Professional.picture}
                  alt="doctor profile pic"
                />
              </Col>
              <Col xs={3}>
                <h6 className="mt-3">{Professional.name}</h6>
                <span className="mt-3">{Professional.email}</span>
              </Col>
              <Col xs="auto">
                <Button
                  color="primary"
                  onClick={() => {
                    toggle();
                    setmodal_object(Professional);
                  }}
                >
                  View Applications
                </Button>
              </Col>
            </Row>
          );
        })}
    </Container>
  );
};

export default Professionals;
