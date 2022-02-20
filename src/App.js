import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Header

import Header from "./components/header";

//Hero section
import Index from "./components";

//Portfolio
import WebsiteAccessibility from "./components/projects/websiteAccessibility";
import EmilyCarter from "./components/projects/emilyCarter";
//import ForestWise from "./components/projects/ForestWise";
import KOKO from "./components/projects/KOKO";
import Yolly from "./components/projects/yolly";
import CamelSkiSchool from "./components/projects/camelSkiSchool";
import AveryRow from "./components/projects/averyRow";

//footer
import Footer from "./components/footer";

//404
import PageNotFound from "./components/pageNotFound";

function App() {

  return (
    <Router>
    <div>
      <Header/> 
    <Switch>
      <Route exact path="/">
        <Index/>
      </Route>
      <Route path="/Accessiblity-tool">
          <WebsiteAccessibility/>
      </Route>
      <Route path="/Emily-Carter">
          <EmilyCarter/>
      </Route>
      <Route path="/KOKO">   
          <KOKO/>   
      </Route>
      <Route path="/Avery-Row">   
          <AveryRow/>   
      </Route>
      <Route path="/Camel-Ski-School">  
          <CamelSkiSchool/>  
      </Route>
      <Route path="/Yolly">  
          <Yolly/>  
      </Route>
      <Route path="/404"/>
          <PageNotFound/>
      <Redirect to="/404" />
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
