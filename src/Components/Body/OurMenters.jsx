import React from "react";
import { Card } from "react-bootstrap";

export const OurMenters = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Menter's name</Card.Header>
        <Card.Body>
          <img src="" alt="menter's img" />
        </Card.Body>
        <Card.Footer>
          <p>Menter's desc</p>
        </Card.Footer>
      </Card>
    </div>
  );
};
