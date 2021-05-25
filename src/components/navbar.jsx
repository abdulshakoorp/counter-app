const Navbar = ({totalCounters}) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


// the above code is state less, that is why its created as function
// import React, { Component } from "react";
// class Navbar extends Component {
//   state = {};
//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-light bg-light">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               Navbar{" "}
//               <span className="badge badge-pill badge-secondary">
//                 {this.props.totalCounters}
//               </span>
//             </a>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

