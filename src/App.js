import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return <div className="App">
    <SignIn></SignIn>
    <SignUp></SignUp>
    
   
      {/* <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Redirect to="/signin" />
        </Switch>
      </Router> */}
    
  


  </div>;
}

export default App;
