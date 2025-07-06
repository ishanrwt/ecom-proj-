// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import ROUTES from '../navigations/Routes'

// function Header() {
//   const [user, setUser] = useState({ id: null, role: null })
//   const navigate = useNavigate()

//   useEffect(() => {
//     let id = localStorage.getItem("id")
//     let role = localStorage.getItem("role")

//     if (id) setUser({ id: id, role: role })
//   }, [])

//   function renderMenu() {
//     if (user?.role == "admin") {
//       return (
//         <ul class="navbar-nav mr-auto">
//           <li class="nav-item active">
//             <Link to={ROUTES.universityAdmin.name} className='nav-link'>University Management</Link>
//           </li>
//           <li class="nav-item">
//             <Link to={ROUTES.universityAdmin.name} className='nav-link'>Department Management</Link>
//           </li>
//           <li class="nav-item">
//             <Link to={ROUTES.universityAdmin.name} className='nav-link'>Order Management</Link>
//           </li>
//         </ul>
//       )
//     }
//     else {
//      return(
//       <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <Link to={ROUTES.home.name} className='nav-link'>Home</Link>
//       </li>
//       <li class="nav-item">
//         <Link to={ROUTES.about.name} className='nav-link'>About</Link>
//       </li>
//       <li class="nav-item">
//         <Link to={ROUTES.contact.name} className='nav-link'>Contact</Link>
//       </li>
//       <li class="nav-item">
//         <Link to={ROUTES.support.name} className='nav-link'>Support</Link>
//       </li>
//     </ul>
//      )
//     }
//   }

//   function renderButtons() {
//     if (user?.id) {
//       return (
//         <button className='btn btn-outline-success my-2 my-sm-0' onClick={() => {
//           localStorage.clear()
//           navigate(ROUTES.login.name)
//         }}>Logout</button>
//       )
//     }
//     else {
//       return (
//         <div>
//           <Link to={ROUTES.login.name} className='btn btn-outline-success my-2 my-sm-0 m-1'>Login</Link>
//           <Link to={ROUTES.register.name} className='btn btn-outline-success my-2 my-sm-0 m-1'>Register</Link>
//         </div>
//       )
//     }
//   }

//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           {renderMenu()}
//           {renderButtons()}
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES from '../navigations/Routes';

function Header() {
  const [user, setUser] = useState({ id: null, role: null });
  const navigate = useNavigate();

  useEffect(() => {
    let id = localStorage.getItem("id");
    let role = localStorage.getItem("role");

    if (id) setUser({ id: id, role: role });
  }, []);

  function renderMenu() {
    if (user?.role === "admin") {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={ROUTES.universityAdmin.name} className="nav-link">University Management</Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.universityAdmin.name} className="nav-link">Department Management</Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.universityAdmin.name} className="nav-link">Order Management</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={ROUTES.home.name} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.about.name} className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.contact.name} className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.support.name} className="nav-link">Support</Link>
          </li>
          <li className="nav-item">
            <Link to={ROUTES.cart.name} className="nav-link">🛒 Cart</Link>
          </li>
        </ul>
      );
    }
  }

  function renderButtons() {
    if (user?.id) {
      return (
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
          localStorage.clear();
          navigate(ROUTES.login.name);
        }}>Logout</button>
      );
    } else {
      return (
        <div>
          <Link to={ROUTES.login.name} className="btn btn-outline-success my-2 my-sm-0 m-1">Login</Link>
          <Link to={ROUTES.register.name} className="btn btn-outline-success my-2 my-sm-0 m-1">Register</Link>
        </div>
      );
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand" to={ROUTES.home.name}> LIBERRY</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {renderMenu()}
          <div className="ml-auto">
            {renderButtons()}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
