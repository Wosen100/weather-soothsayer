import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
// import styledComponents from "styled-components";
// import styled from 'styled-components'



export default function Daydetails({ findCity, getCityWeather }) {
  console.log(getCityWeather);

  const [cities, setCities] = useState([]);
  const [selected, setSelected] =useState(null)

  const handleSearchCities = (event) => {
    event.preventDefault();

    const { city } = event.target.elements;
    setSelected(false)
    findCity(city.value).then((citiesResponse) => {
      setCities(citiesResponse ?? []);
    });
  };

  const fetchWeather = ({ lat, lon }) => {
    console.log(lat)
    return getCityWeather(lat, lon);
  }

  // const = styled.div`
  // hight: 30px

  // `

  const makeCityCard = (city) => (
 
    <Row>
      <Button onClick={() =>  {fetchWeather(city); setSelected(true)}} size="sm">
        <p>{city.name} , {city.state}</p>
        {/* <p>{city.state}</p> 
        <p>{city.country}</p> */} 

      </Button>


    </Row>

  );


  return (
    <Container>
      <Row>
        {/* show todays forcast on the left */}
        <Col md="8" sm="6" xs="6" className="border">
          Todays forcase
        </Col>

        {/* form on the right */}
        <Col md="4" sm="6" xs="6" className="border">
          <Row>
            <Form onSubmit={handleSearchCities}>
              <FormGroup>
                <Label>City</Label>
                <Input type="text" autoComplete="true" required name="city" id="city" />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>

          {/* show cities cards that are clickable */}


          {(!selected)?  <Row className="cityWrapper zindex">

            <Col>{cities.map(makeCityCard)}</Col>
          </Row> : "" }

        </Col>
      </Row>
    </Container>
  );
}

// proptypes
Daydetails.propTypes = {
  findCity: PropTypes.func.isRequired,
  getCityWeather: PropTypes.func.isRequired,
};
