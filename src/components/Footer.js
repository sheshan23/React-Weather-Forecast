import React from 'react';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row ">             
                    <div className="col-7 offset-1 col-sm-6 align-self-center">
                        <address>
                        <h5 className="">Sheshan Patel</h5>
                        <i className="fa fa-phone fa-lg"></i>: +647-540-2989<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="patelsheshan0@gmail.com">patelsheshan0@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-4 col-sm-5 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/sheshanpatel23/" target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-github" href="https://github.com/sheshan23/React-Weather-Forecast" target="_blank"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto col-md-auto">
                        <br/><p>© Copyright 2018 Weather Forecast Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;