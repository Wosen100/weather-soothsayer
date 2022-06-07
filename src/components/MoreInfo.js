import React from "react";
import { Col, Row } from "reactstrap";
import PropTypes from "prop-types";

export default function moreInfo({temp, lowtemp, hightemp, precip, date }) {
  return (
    <Row>
      <Col>
        <h1>Upcoming forcast</h1>
        <h1>{ temp }</h1>
        <h1>{ lowtemp }</h1>
        <h1>{ hightemp }</h1>
        <h1>{ precip }</h1>
        <h1>{ date }</h1>
      

      </Col>
    </Row>
  );
}

moreInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};
