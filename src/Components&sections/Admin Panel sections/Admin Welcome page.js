import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import UserStatsGender from '../Admin Components/UserStatsGender';
import UserStatsGovernates from '../Admin Components/UserStatsGovernates';
import NumerStat from '../Admin Components/NumerStat';
import ResultsTestsStats from '../Admin Components/ResultsTestsStats';
import ResultsGovernateStats from '../Admin Components/ResultsGovernateStats';
import DoctorStatsGender from '../Admin Components/DoctorStatsGender';
const Statistics = () => {
  const [loading, isLoading] = useState(true);
  const [error, loadError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/psy/admins/stats',
    })
      .then((res) => {
        setData(res.data.data);
        isLoading(false);
      })
      .catch((err) => {
        isLoading(false);
        loadError(true);
      });
  }, []);
  if (loading) {
    return (
      <div className="d-flex flex-row align-content-center justify-content-center pt-5 bg-white">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <Wrapper>
      {error ? (
        <h1 className="d-flex flex-row align-content-center justify-content-center pt-5 bg-white">
          Sorry! There was a problem fetching your data
        </h1>
      ) : (
        <Container className="mt-5">
          <h1 className="pb-2 mt-5 text-center">
            <span className="stat-header">Statistics</span>
          </h1>
          <Row>
            <Col xs={12} className="statistics-col">
              <NumerStat
                numUsers={data.userStatsGender[0].numUsers}
                numDoctors={data.doctorStatsGender[0].numDoctors}
                numTestTaken={data.resultsStats[0].numResults}
                numTestTakenUnique={data.resultsUniqueStats[0].numUniqueResults}
              />
            </Col>
            <Col xs={12} md={6} className="mt-5">
              <UserStatsGender userStat={data.userStatsGender} />
            </Col>
            <Col xs={12} md={6} className="mt-5">
              <UserStatsGovernates data={data.userStatsGovernates} />
            </Col>
            <Col xs={12} md={6} className="mt-5">
              <ResultsTestsStats data={data.resultsTestsStats} />
            </Col>
            <Col xs={12} md={6} className="mt-5">
              <ResultsGovernateStats data={data.resultsGovernateStats} />
            </Col>
            <Col xs={12} md={6} className="mt-5">
              <DoctorStatsGender doctorStat={data.doctorStatsGender} />
            </Col>
          </Row>
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .stat-header {
    border-bottom: 2px solid #161925;
  }
`;

export default Statistics;
