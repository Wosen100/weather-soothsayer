import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { makeCityQueryUrl, makeWeatherQueryUrl } from "./api";
import "./App.css";
import { axios } from "./axios";
import Day from "./components/Day";
import Daydetails from "./components/Daydetails";
import Week from "./components/Week";

function App() {
// eslint-disable-next-line no-unused-vars
const [days, setDays] = useState([]);

  useEffect(() => {
    // #fetch forcase for 7 days
  }, []);

  const getCities = (query) => 
    // #query for cities and show them on them
     axios(makeCityQueryUrl(query))
  ;

  const getCityWeather = (lat,lon) =>axios(makeWeatherQueryUrl(lat,lon))

  return (
    <Container>
      <Row>
        <Daydetails findCity={getCities} getCityWeather={getCityWeather}  />
      </Row>
      <Row>
        <Week>
          {days.map((day) => (
            <Day
             payload={day} />
          ))}
        </Week>
      </Row>
    </Container>
  );
}

export default App;
