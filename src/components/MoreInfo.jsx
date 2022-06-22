import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import styled from "styled-components";


const Infowrapper = styled.div`
  color: "orange" !important;
  background-color: bisque;
  border: 2px solid orange;
  font-weight: 20px;
  border-radius: 50px 50px;
  h1 {
    font-size: 20px;
  }
  text-align: center;
`;

export default function moreInfo({ lowtemp, hightemp, precip, date, onReset, feellowTemp, feelhighTemp, relativeHumidity, windSpeed, windDirection  }) {
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
                
                <h1>Date: {date} </h1>
              </h1>

              <section>
                <p className="dayList">
                  <strong>High</strong>:
                  {hightemp.toFixed(1)}<sup>o</sup>|<strong>Feels like:</strong>{feelhighTemp}<sup>o</sup>
                </p>
                <p className="dayList"> <strong>low</strong>:
                  {lowtemp.toFixed(1)}<sup>o</sup>| <strong>Feels like:</strong>{feellowTemp}<sup>o</sup>
                </p>
                <p className="dayList">
                  <strong>likelhood of Precipitation:</strong>
                  {precip}<sup>o</sup>|
                  <strong> Relative Humidty  </strong> {relativeHumidity}<sup>o</sup>
                </p>
                <p className="dayList">Wind Speed:{windSpeed}| <strong>Wind Direction:</strong>{windDirection}</p>
              </section>

            </Col>
          </Infowrapper>

          <Button className="goback"
          
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
