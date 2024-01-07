import React from 'react';
import WrapperCard from './UI/WrapperCard';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <footer className="bg-gray-500 py-5">
      <div className="">
        <WrapperCard className="p-4">
          <div className="">
            <div className="">
              <div className="py-3">
                <h2 className="font-weight-bold">ALREADY A CUSTOMER</h2>
                <ul>
                  <li>Reserved Area</li>
                  <li>Mobile Application</li>
                  <li>Insurance Renewal</li>
                  <li>Claims Management</li>
                  <li>Info & Help</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-3">
                <h2 className="font-weight-bold">ONLINE SUPPORT</h2>
                <ul>
                  <li>Car FAQs</li>
                  <li>Motorcycle FAQs</li>
                  <li>Home FAQs</li>
                  <li>Additional guarantees</li>
                  <li>Insurance glossary</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-3">
                <h2 className="font-weight-bold">INSURANCE GUARANTEES</h2>
                <ul>
                  <li>RC Car</li>
                  <li>Road Assistance</li>
                  <li>Driver Injuries</li>
                  <li>Legal Protection</li>
                  <li>Crystals</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-3">
                <h2 className="font-weight-bold">INFORMATION AND PRIVACY</h2>
                <ul>
                  <li>Privacy Disclaimer</li>
                  <li>Information sets</li>
                  <li>Reserved area information</li>
                  <li>Terms of Service</li>
                  <li>Cookie policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" align-items-center justify-content-center mt-4">
            <div className="col-md-6 text-center">
              <img src={logo} className="img-fluid" alt="Logo" style={{ maxWidth: '200px' }} />
            </div>
            <div className="col-md-6 text-center">
              <div>
                <AiFillInstagram className="" />
                <AiFillFacebook className="" />
                <AiFillLinkedin className="" />
              </div>
            </div>
          </div>
        </WrapperCard>
      </div>
    </footer>
  );
}

export default Footer;
