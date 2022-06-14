import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
// eslint-disable-next-line import/no-unresolved
import moment from "moment";
import { makeCityQueryUrl, makeWeatherQueryUrl } from "./api";
import "./App.css";
import { Axios } from "./axios";
import Day from "./components/Day";
import Daydetails from "./components/Daydetails";
import MoreInfo from "./components/MoreInfo";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [days, setDays] = useState([]);
  const [cityWeatherInfo, setCityWeatherInfo] = useState(null);
  const [selectoneday, setSelectoneday] = useState(null);

  useEffect(() => {
    // #fetch forcase for 7 days
  }, []);

  const onReset = (reset) => {
    setSelectoneday(reset); 
  }

  const getCities = (query) => 

    // #query for cities and show them on them
    Axios(makeCityQueryUrl(query));

  // setSelectoneday(null);
  

  const getCityWeather = (lat, lon) => Axios(makeWeatherQueryUrl(lat, lon)).then((data) => setCityWeatherInfo(data));

  return (
    <Container>
      <Row>
        <Daydetails findCity={getCities} getCityWeather={getCityWeather} />
      </Row>
      
      <Row>
        {/* <h1>Upcoming forcast</h1> */}
        <Row  style={{ display : !selectoneday ? "flex" : "none"}} >
          {cityWeatherInfo?.data.slice(0, 7).map((day) => (
            <Col key={day.ts}>
              <Day payload={day}
                selectday={() => setSelectoneday(day)}
                icon={day.weather.icon}
              />
            </Col>
          ))}
        </Row>
        <div>
          {selectoneday && (
            <MoreInfo
              temp={selectoneday.temp}
              lowtemp={selectoneday.low_temp}
              hightemp={selectoneday.high_temp}
              precip={selectoneday.precip}
              date={moment(selectoneday.valid_date).format("dddd, MMM, Do, YYYY")}
              onReset={onReset}
              />
          )
          }
        </div>
      </Row>
    </Container>
  );
}

export default App;
