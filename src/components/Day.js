import React from "react";
// import moment from "moment";
import moment from "moment";
import PropTypes from "prop-types";
import { Card, Col, Row } from "reactstrap";


// eslint-disable-next-line react/prop-types
function Day({ payload, selectday }) {
  return (
    <Card className="" onClick={selectday}>
      <Row>
        <Col>
        <h4> {moment(payload.valid_date,"YYYY-MM-DD").format("dddd")}</h4>
          <h6>{payload?.weather?.description}</h6>
          <span>{payload?.temp}<sup>0</sup></span>

          {/* <p className="temp"><strong>{temp}<sup>o</sup></strong></p> */}

        {/* <img src={`https://www.weatherbit.io/static/img/icons/${payload.weather.icon}.png`} alt="https://www.weatherbit.io/static/img/icons/r01d.png" /> */}
        <p><strong>High</strong>:{payload.high_temp}</p>
        <p><strong>Low</strong>:{payload.low_temp}</p>
        <p><strong>precip</strong>:{payload.precip}%</p>
          {/* <span>Temp avg: {payload?.temp}</span> */}


          {/* {<p>{(Date)(payload.datetime).toLocaleDateString('en-US'}
{ , { weekday: 'long' }) */}

          {/* }</p> */}
        </Col>
      </Row>
    </Card>
  );
}

Day.propTypes = {
payload: PropTypes.shape({
    weather: PropTypes.shape({ description: PropTypes.string.isRequired }),
    temp: PropTypes.string,
    valid_date: PropTypes.string,
    datetime: PropTypes.string,
    high_temp: PropTypes.string,
    low_temp: PropTypes.string,
    precip: PropTypes.string,
    // selectday: PropTypes.func,
    // weather.icon: PropTypes.string,
  }).isRequired,
};
export default Day;
