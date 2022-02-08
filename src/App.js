import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Header

import Header from "./components/header";

//Hero section
import Index from "./components";

//Portfolio
import Project1 from "./components/projects/project1";
import Project2 from "./components/projects/project2";
import Project3 from "./components/projects/project3";
import Project4 from "./components/projects/project4";
//import Project5 from "./components/projects/project5";
import Project6 from "./components/projects/project6";
import Project7 from "./components/projects/project7";

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
          <Project1/>
      </Route>
      <Route path="/Emily-Carter">
          <Project2/>
      </Route>
      <Route path="/WineSpark">
          <Project3/>      
      </Route>
      <Route path="/Cultured-Biomecare">       
          <Project4/>    
      </Route>
      {/* <Route path="/ForestWise">   
          <Project5/>   
      </Route> */}
      <Route path="/Avery-Row">   
          <Project7/>   
      </Route>
      <Route path="/Smaller-Projects">  
          <Project6/>  
      </Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
