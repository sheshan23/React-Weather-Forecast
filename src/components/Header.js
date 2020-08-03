import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
          <React.Fragment>
            <Navbar dark expand="md">
              <div className="container">
                  <NavbarBrand className="mr-auto" href="/">
                      <h4 className="text-center">Weather Forecast</h4>
                  </NavbarBrand>
              </div>
            </Navbar>
            <Jumbotron>
              <div className="container">
                <div className="row row-header">
                  <div className="col-12 col-sm-2">
                    <NavbarBrand className="mr" href="/">
                      <img src="./images/1.png" height="80" width="80"
                          alt="0x0" />
                    </NavbarBrand>
                  </div>
                  <div className="col-12 col-sm-6">
                    <h1>Weather Forecast</h1>
                    <p>Enter the city and country name in the below fields and hit the search button to get the current weather at</p>
                  </div>
                </div>
              </div>
            </Jumbotron>
          </React.Fragment>
        );
    }
}

export default Header;