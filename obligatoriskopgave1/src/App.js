import './App.css';
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { Switch, Route } from 'react-router-dom'
import FrontPage from "./Components/body/FrontPage";
import Overview from "./Components/body/Overview";

function App() {

    return (
    <div className="App">

      <Header header = "header"/>


      <div className="routes">
          <Switch>
              <Route exact path="/" ><FrontPage/></Route>
              <Route path="/advertisements/:category" ><Overview/></Route>

          </Switch>
      </div>

    </div>
  );
}

export default App;
