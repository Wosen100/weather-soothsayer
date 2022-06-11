import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import styled from "styled-components";

const Titlewrapper = styled.div`
  color: "red" !importat;
  background-color: bisque;
  border: 2px solid red;
  font-weight: 20px;
  border-radius: 50px 50px;
  h1 {
    font-size: 20px;
  }
  text-align: center;
`;

export default function Daydetails({ findCity, getCityWeather }) {
  console.log(getCityWeather);

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

  const fetchWeather = ({ lat, lon }) => {
    console.log(lat);
    return getCityWeather(lat, lon);
  };

  // const = styled.div`
  // hight: 30px

  // `

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
        <Col md="8" sm="6" xs="6" className="border">
          <h1 style={{ fontSize: "35px", textTransform: "uppercase",  center: "center" }}>Today &apos;s forecast</h1>
        </Col>

        {/* form on the right */}
        <Col md="4" sm="6" xs="6" className="border">
          <Row>
            <Form onSubmit={handleSearchCities}>
              <FormGroup>
                <Label>City</Label>
                <Input type="text" autoComplete="true" required name="city" id="city" data-testid="cityInput" />
              </FormGroup>
              <Button color="primary" type="submit" data-testid="searchCityBtn">
                Submit
              </Button>
            </Form>
          </Row>

          {/* show cities cards that are clickable */}

          {!selected ? (
            <Row className="cityWrapper zindex">
              <Col data-testid="citiesFound">{cities.map(makeCityCard)}</Col>
            </Row>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Titlewrapper>
  );
}

// proptypes
Daydetails.propTypes = {
  findCity: PropTypes.func.isRequired,
  getCityWeather: PropTypes.func.isRequired,
};
