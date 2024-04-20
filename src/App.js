import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./pages/Header";
import Appointments from "./pages/Appointments";
import History from "./pages/History";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import SideNav from "./pages/SideNav";
import { useRef, useEffect, useState } from "react";

function App() {
  const sideNavRef = useRef(null);
  const showLogin = true;
  const [toggleSideNav, setToggleSideNav] = useState();
  useEffect(() => {
    setToggleSideNav(sideNavRef.current.toggleDrawer);
  }, []);

  return (
    <div className="App">
      <Header toggleSideNav={toggleSideNav} />
      <SideNav ref={sideNavRef} />
      <div className="m-5">{/* <Appointments /> */}</div>
      <div className="m-5">
        <History />
      </div>
    </div>
  );

  // <>
  //   <SignIn />
  //   <SignUp />
  // </>
}

export default App;
