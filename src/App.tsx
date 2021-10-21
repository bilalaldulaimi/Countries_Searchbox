import {BrowserRouter as Router, Route} from 'react-router-dom';
import Countries from "./Components/Countries";
import Header from "./Components/Header";
//import Filter from "./Components/Filter";

function App() { 

  return(
  <Router>
    <Header />
      <Route exact path="/">
        {/* <Filter /> */}
        <Countries />
      </Route>
  </Router>
  );
}

export default App;
