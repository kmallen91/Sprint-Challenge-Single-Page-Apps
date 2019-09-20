import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CharacterCard = (props) => {
  return (
    <div>
      <Card key={props.key}>
      <CardImg top width="100%" src={props.image} alt={props.name} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>From: {props.origin}</CardSubtitle>
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