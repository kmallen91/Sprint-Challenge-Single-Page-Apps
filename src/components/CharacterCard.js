import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CharacterCard = (props) => {
  return (
    
      <div>
      <Card className="card" key={props.key}>
      <CardImg className="image" top width="100%" src={props.image} alt={props.name} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>From: {props.origin.name}</CardSubtitle>
          <CardText>
          Gender: {props.gender}
          Status: {props.status}
          Species: {props.species}
          </CardText>
          <Button>?????</Button>
        </CardBody>
      </Card>
      </div>
    
  );
};

export default CharacterCard;