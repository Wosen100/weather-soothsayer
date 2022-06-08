import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import PropTypes from "prop-types";


export default function moreInfo({ temp, lowtemp, hightemp, precip, date, onReset }) {

  const [rese, setRese] = useState(null);

  useEffect(() => { setRese(false) }, [])

  return (
    <div>

      {(!rese) ? <Row className="disaper">
        <Col>
          <h1>Upcoming forcast</h1>
          <h1>{temp}</h1>
          <h1>{lowtemp}</h1>
          <h1>{hightemp}</h1>
          <h1>{precip}</h1>
          <h1>{date}</h1>


        </Col>
        <Button variant="primary" onClick={() =>{
          setRese(true);
          onReset(null); 
        }}>Go Back</Button>




      </Row> : ""}

    </div>
  );
}

moreInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};
