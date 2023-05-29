import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const service = ({service}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/service/${service._id}`}>
        <Card.Img src={service.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/service/${service._id}`}>
          <Card.Title as="div">
            {' '}
            <strong>{service.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={service.rating}
            text={`${service.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${service.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default service
