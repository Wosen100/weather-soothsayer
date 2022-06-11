import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

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

export default function moreInfo({ temp, lowtemp, hightemp, precip, date, onReset }) {
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

              <h1 style={{ fontSize: "20px" }}>
                <h1>Temp: {temp.toFixed(1)} </h1>
                <h1>Low-Temp: {lowtemp.toFixed(1)} </h1>
                <h1>High-Temp: {hightemp.toFixed(1)} </h1>
                <h1> Precip: {precip.toFixed(1)} </h1>
                <h1>Date: {date} </h1>
              </h1>
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

moreInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};
