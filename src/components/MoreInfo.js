import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import styled from "styled-components";
import { WeatherType } from "./Day";

const Infowrapper = styled.div`
  color: "red" !important;
  background-color: bisque;
  border: 2px solid red;
  font-weight: 20px;
  border-radius: 50px 50px;
  h1 {
    font-size: 20px;
  }
  text-align: center;
`;

export default function MoreInfo({ payload: { temp, lowtemp, hightemp, precip, date, onReset } }) {
  const [rese, setRese] = useState(null);

  useEffect(() => {
    setRese(false);
  }, []);

  return (
    <div>
      {!rese ? (
        <Row className="disaper">
          <Infowrapper>
            <Col>
              <h1 style={{ fontSize: "35px" }}>
                {/* textTransform :   "uppercase"  */}
                Detailed forcast for a day :-&gt;
              </h1>

              <span style={{ fontSize: "20px" }}>
                <h1>Temp: {temp.toFixed(1)} </h1>
                <h1>Low-Temp: {lowtemp.toFixed(1)} </h1>
                <h1>High-Temp: {hightemp.toFixed(1)} </h1>
                <h1 alt="precipitation"> Precip: {precip.toFixed(1)} </h1>
                <h1>Date: {date} </h1>
              </span>
            </Col>
          </Infowrapper>

          <Button
            variant="primary"
            onClick={() => {
              setRese(true);
              onReset(null);
            }}
          >
            Go Back
          </Button>
        </Row>
      ) : (
        ""
      )}
    </div>
  );
}

MoreInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  payload: WeatherType.isRequired,
};
