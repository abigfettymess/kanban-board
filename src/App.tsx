import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from '@emotion/styled';
import Tasks from "./routes/Tasks";

const DIV = styled.div`

`;

const App = () => {
  return (
    <DIV>
      <Switch>
        <Route path="/" component={Tasks} />
      </Switch>
    </DIV>
  );
}

export default App;
