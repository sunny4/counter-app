import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-scondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-scondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
