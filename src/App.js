import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import "./App.css";
import Day from "./components/Day";
import Daydetails from "./components/Daydetails";
import Week from "./components/Week";

function App() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    // #fetch forcase for 7 days
  }, []);

  const getCities = (query) => {
    // #query for cities and show them on them
    return [];
  };

  return (
    <Container>
      <Row>
        <Daydetails />
      </Row>
      <Row>
        <Week>
          {days.map((day) => (
            <Day payload={day} />
          ))}
        </Week>
      </Row>
    </Container>
  );
}

export default App;
