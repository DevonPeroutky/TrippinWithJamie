import React from 'react'
import NavLink from './NavLink'

console.log("SUPPP");
export default React.createClass({
  render() {
  	console.log("SUPPP");
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" ng-show="loaded" ng-cloak>
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">Trippin With Jamie!</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a className="page-scroll desktop" href="#services">Benefits</a>
                        </li>
                        <li>
                            <a className="page-scroll desktop" href="#deals">Deals</a>
                        </li>
                        <li>
                            <a className="page-scroll desktop" href="#portfolio">Certifications</a>
                        </li>
                        <li>
                            <a className="page-scroll desktop" href="#blog">Blog</a>
                        </li>
                        <li>
                            <a className="page-scroll desktop" href="#contact">Book Us!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    	  {this.props.children}
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Trippin With Jamie LLC 2016</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li><a href="https://www.facebook.com/trippinwithjamie" target="_top"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/pub/jamie-scheff/5/283/756" target="_top"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
		  </div>
    )
  }
})
