import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Header

import Header from "./components/header";

//Hero section
import Index from "./components";

//Portfolio
import WebsiteAccessibility from "./components/projects/websiteAccessibility";
import EmilyCarter from "./components/projects/emilyCarter";
import WineSpark from "./components/projects/wineSpark";
import CulturedBiomecare from "./components/projects/culturedBiomecare";
//import ForestWise from "./components/projects/project5";
import SmallerProjects from "./components/projects/smallerProjects";
import AveryRow from "./components/projects/averyRow";

//footer
import Footer from "./components/footer";

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
      <Route path="/WineSpark">
          <WineSpark/>      
      </Route>
      <Route path="/Cultured-Biomecare">       
          <CulturedBiomecare/>    
      </Route>
      {/* <Route path="/ForestWise">   
          <ForestWise/>   
      </Route> */}
      <Route path="/Avery-Row">   
          <AveryRow/>   
      </Route>
      <Route path="/Smaller-Projects">  
          <SmallerProjects/>  
      </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
