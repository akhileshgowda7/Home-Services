import React, { useEffect } from 'react';
import { useGetServicesQuery } from '../slices/servicesApiSlice';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Service from '../components/Service';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const { data: servicesData, isLoading, error } = useGetServicesQuery();
  console.log(servicesData, isLoading, error);

  // Extract the services array from the servicesData object
  const services = servicesData?.services || [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {services.map((service) => (
              <Col key={service._id} sm={12} md={6} lg={4} xl={3}>
                <Service service={service}></Service>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
