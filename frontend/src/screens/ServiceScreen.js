import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetServiceDetailsQuery } from '../slices/servicesApiSlice';
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';

const ServiceScreen = () => {
  const { id: serviceId } = useParams();

  const {
    data: service,
    isLoading,
    error,
  } = useGetServiceDetailsQuery(serviceId);

  const addToCartHandler = () => {
    console.log('add to cart');
  };

  return (
    <Container>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={service.image} alt={service.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{service.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={service.rating}
                    text={`${service.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price: ${service.price}</ListGroupItem>
                <ListGroupItem>
                  Description: {service.description}
                </ListGroupItem>
                <ListGroupItem>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={!service.isAvailable}
                  >
                    Request Service
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ServiceScreen;
