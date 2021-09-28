import './App.css';
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { Switch, Route, useHistory } from 'react-router-dom'
import FrontPage from "./Components/body/FrontPage";
import Overview from "./Components/body/Overview";

function App() {

    return (
    <div className="App">

      <Header header = "header"/>

dfsd
      <div className="routes">
          <Switch>
              <Route exact path="/" ><FrontPage/></Route>
              <Route path="/advertisements/" component={Overview}/>
              {/*<Route path="/advertisements/:category" ><Overview/></Route>*/}

          </Switch>
      </div>

      {/*<Footer footer = "footer"/>*/}

    </div>
  );
}

export default App;
