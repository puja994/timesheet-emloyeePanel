
import './App.css';
import { Calender } from './pages/Calender.js';
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import Login from './pages/login/Login'
import { Availability } from './pages/availability/Availability';

function App() {
  return (
    <div className="App">
        <Router>
       <Switch>
         
    <Route exact path="/shift">
          <Calender />
        </Route>

    <Route exact path="/">
          <Login/>
        </Route>

        <Route exact path="/availability">
          <Availability/>
        </Route>

        <Route path="*">
						<h1>404 Page not found</h1>
					</Route>

        
        </Switch>
        </Router>
    </div>
  );
}

export default App;


// import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from './pages/login/Login'
// import {Dashboard} from './pages/dashboard/Dashboard.page'
// import {Employee} from './pages/employee/Employee'
// import {Shifts} from './pages/shifts/Shifts'
// import Profile from "./pages/profile/Profile"
// import PasswordReset from "./pages/password-reset/PasswordReset"



// function App() {
//   return (
//     <div className="App">
     
//      <Router>
//        <Switch>

//        <Route exact path="/">
//            <Login />
//          </Route>

//          <Route exact path="/dashboard">
//            <Dashboard />
//          </Route>

//          <Route exact path="/shifts">
//            <Shifts />
//          </Route>


//          <Route exact path="/employee">
//            <Employee />
//          </Route>

//          <Route path="/profile">
//            <Profile />
//          </Route>

//          <Route exact path="/reset-password">
// 						<PasswordReset />
// 					</Route>

//          <Route path="*">
// 						<h1>404 Page not found</h1>
// 					</Route>

//        </Switch>
//      </Router>
    
//     </div>
//   );
// }

// export default App;
