import React from 'react';

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar"
                    aria-controls="left-sidebar" aria-expanded="false" aria-label="Toggle sidebar">
                <span className="navbar-toggler-icon"/>
            </button>

            <a className="navbar-brand" href="index.html">
                <img src="https://image.flaticon.com/icons/svg/2285/2285576.svg" width="35" height="35" id="TodoIcon"
                     className="d-inline-block align-top" alt=""/>ToDo Manager</a>

            <form className="form-inline mx-auto my-2 my-lg-0 d-none d-sm-block">
                <input className="form-control mr-sm-2" type="search" placeholder="find task..." aria-label="Search"/>
            </form>

            <div className="navbar-nav ml-md-auto">
                <a className="nav-item nav-link" href="index.html">
                    <img src="https://image.flaticon.com/icons/svg/1077/1077012.svg" width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                </a>
            </div>

        </nav>
    );
}

export default Navbar;