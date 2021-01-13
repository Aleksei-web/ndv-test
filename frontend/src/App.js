import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Contacts/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRoute from "./components/routes/UserRouter";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container">
        <Switch>
          <UserRoute exact path="/contacts" component={Contacts} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </>
  );
}

export default App;
