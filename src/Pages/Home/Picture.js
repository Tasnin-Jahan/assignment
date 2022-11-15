import React from 'react';
import img2 from '../images/icon-1.png';
import img3 from '../images/icon-2.png';
import img4 from '../images/icon-3.png';
import './Home.css';

const Picture = () => {
    return (

        <>
            <div>
                <div style={{ color: 'white', height: '550px', width: '1550px', paddingLeft: '400px', paddingRight: '40px' }} className=" pic-body text-center text-lg-center mt-xl-5 pt-4">

                    <div style={{ marginTop: '150px' }} className="p-4">

                        <div className="row">

                            <div className="text-lg-centre col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <ul className="list-unstyled mb-4">
                                    <img className='' style={{ width: '100px', height: '100px', marginRight: '15px' }} src={img2} alt="" />
                                    <li>
                                        <h4>+34793</h4>
                                    </li>
                                    <li>
                                        <h3>Happy Clients</h3>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-lg-center col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <ul className="list-unstyled mb-4">
                                    <img className='' style={{ width: '100px', height: '100px', marginRight: '15px' }} src={img3} alt="" />
                                    <li>
                                        <h4>+45382</h4>
                                    </li>
                                    <li>
                                        <h3>Department</h3>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-lg-center col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <ul className="list-unstyled mb-4">
                                    <img className='' style={{ width: '100px', height: '100px', marginRight: '15px' }} src={img4} alt="" />
                                    <li>
                                        <h4>+54762</h4>
                                    </li>
                                    <li>
                                        <h3>Vaccination</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </>
    );
};

export default Picture;