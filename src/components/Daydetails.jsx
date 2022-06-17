import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';

const Titlewrapper = styled.div`
  color: "orange" !importat;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: bisque;
  border: 2px solid orange;
  font-weight: 20px;
  border-radius: 50px 50px;
  h1 {
    font-size: 20px;
  }
  text-align: center;
`;

export default function Daydetails({ findCity, getCityWeathers}) {
  
  const [cities, setCities] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSearchCities = (event) => {
    event.preventDefault();

    const { city } = event.target.elements;
    setSelected(false);
    findCity(city.value).then((citiesResponse) => {
      setCities(citiesResponse ?? []);
    });
  };

  const fetchWeather = ({ lat, lon }) => getCityWeathers(lat, lon);



  const makeCityCard = (city) => (
    <Row>
      <Button
        onClick={() => {
          fetchWeather(city);
          setSelected(true);
        }}
        size="sm"
      >
        <p>
          {city.name} , {city.state}
        </p>
        {/* <p>{city.state}</p>
        <p>{city.country}</p> */}
      </Button>
    </Row>
  );

  return (
    <Titlewrapper>
      <Row className="titlewrapper">
        {/* show todays forcast on the left */}
        <Col md="8" sm="6" xs="6" className="noread">
          <h1 style={{ fontSize: '35px', textTransform: 'uppercase', center: 'center' }}>Today &apos;s forecast</h1>
        </Col>

        {/* form on the right */}
        <Col md="4" sm="6" xs="6" className="noread">
          <Row>
            <Form onSubmit={handleSearchCities}>
              <FormGroup>
                <Label>City

                <Input type="text" autoComplete="true" required name="city" id="city" placeholder="Type City Name HERE"/>
                </Label>
              </FormGroup>
              <Button className="secondaryone" type="submit">
                Submit
              </Button>
            </Form>
          </Row>

          {/* show cities cards that are clickable */}

          {!selected ? (
            <Row className="cityWrapper zindex">
              <Col>{cities.map(makeCityCard)}</Col>
            </Row>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </Titlewrapper>
  );
}

// proptypes
Daydetails.propTypes = {
  findCity: PropTypes.func.isRequired,
  getCityWeathers:PropTypes.func.isRequired
};
