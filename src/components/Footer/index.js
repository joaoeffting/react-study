import React from 'react';

const Footer = () => {
    return (
        <div id="app-footer" className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-push-4 item text">
                            <h3 className="text-center">REACT STUDY</h3>
                            <p className="text-center">This is a projet to all my react things study</p>
                        </div>
                        <div className="col-md-12 col-sm-4 item social"><a href="https://www.linkedin.com/in/joaoeffting/" target="_blank"><i className="icon ion-social-linkedin"></i></a><a href="github.com/joaoeffting" target="_blank"><i className="icon ion-social-github"></i></a></div>
                    </div>
                    <p className="copyright">João Paulo Effting © 2017</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;