import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import OurMentorsChild from "./OurMentorsChild";
export const OurMenters = () => {
  const [mentorData, setMentorData] = useState();
  const mentorSelector = useSelector((state) => state.mentorReducer.mentors);
  useEffect(() => {
    setMentorData(mentorSelector);
  }, [mentorSelector]);
  return (
    <div>
      {mentorData &&
        mentorData.map((details) => {
          return (
            <Card style={{ width: "18rem", display: "inline-block" }}>
              <Card.Header>{details.name}</Card.Header>
              <Card.Body>
                <img
                  src={details.img}
                  alt="menter's img"
                  style={{ width: "15rem" }}
                />
              </Card.Body>
              <Card.Footer>
                <p>{details.desc}</p>
              </Card.Footer>
            </Card>
          );
        })}
    </div>
  );
};
