import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function Daydetails(day, findCity, selectCityFn) {
  const [cities, setCities] = useState([]);

  const handleSearchCities = (city_query) => {
    findCity(city_query).then((cities_response) => setCities(cities_response));
  };

  const makeCityCard = (city) => (
    <div>
      <h2>city title</h2>
      <p>location</p>
    </div>
  );

  return (
    <Container>
      <Row>
        {/* show todays forcast on the left */}
        <Col>Todays forcase</Col>

        {/* form on the right */}
        <Col>
          <Row>
            <Form onSubmit={handleSearchCities}>
              <FormGroup>
                <Label>City</Label>
                <Input type="text" autocomplete required name="city" id="city" />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>

          {/* show cities cards that are clickable */}

          <Row>
            <Col>{cities.map(makeCityCard)}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
