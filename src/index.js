import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'
import Navbar from './Navbar'

// /Import react-router functions
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// add NavLink to import 
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

/* Add basic styling for NavLinks */
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'black',
//   textDecoration: 'none',
//   color: 'white',
// }

// const Navbar = () => 
//   <div>
//     <NavLink 
//     to="/"
//     exact
//     style={link}
//     activeStyle={{
//       background: 'purple'
//     }}
//     >Home</NavLink>

//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'purple'
//       }}
//     >About</NavLink>

//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'purple'
//       }}
//     >Login</NavLink>
  

//   <NavLink 
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'purple'
//       }}
//   >Signup</NavLink>

//   <NavLink 
//     to="/messages"
//     exact
//     style={link}
//     activeStyle={{
//       background: 'purple'
//     }}
//   >Messages</NavLink>
// </div>

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
// const Home = () => <h1>Home!</h1>;

// const About = () => {
//   return (
//     <div>
//       <h1>This my about component!</h1>
//     </div>
//   );
// };
// const About = () => <h1>This is my about component!</h1>

// const Login = () => 
  // return (
  //   <div>
      // <form>
      //   <h1>Login</h1>
      //   <div>
      //     <input type="text" name="username" placeholder="username" />
      //     <lable htmlFor="username">Username</lable>
      //   </div>
      //   <div>
      //     <input type="text" name="password" placeholder="password" />
      //     <lable htmlFor="password">Password</lable>
      //   </div>
      //   <input type="submit" value="Login" />
      // </form>
  //   </div>
  // );

// const Signup = () => <h1>This is Signup page!</h1>

// const Messages = () => <h1>Check your messages!</h1>


ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* another option is the line below; */}
        {/* <Route path="/" render={() => <h1>Home!</h1>} /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
  </div>
  </Router>),
 
  document.getElementById('root')
);
