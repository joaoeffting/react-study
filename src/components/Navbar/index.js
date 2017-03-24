import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header"><a className="navbar-brand navbar-link" href="#">React Study</a>
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                </div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav">
                        <li className="active" role="presentation"><a href="#">Todo List</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;