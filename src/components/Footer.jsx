import React from 'react'

import Button from '@mui/material/Button';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-primary p-3">
  <div className="row">
    <div className="col-4">
      <h1 className="text-light">
        <span style={{ color: "orange", fontSize: "40px", fontWeight: "600" }}>RB</span>uilder
      </h1>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam minima harum labore placeat voluptas. 
        Natus beatae ipsum quasi nisi error dolores, assumenda, reprehenderit repellendus iusto, 
        quibusdam minima. Ratione, voluptas commodi.
      </p>
    </div>

    <div className="col-4">
      <h1 className="text-light">
        <span style={{ color: "orange", fontSize: "40px", fontWeight: "600" }}>Q</span>uick 
        <span style={{ color: "orange", fontSize: "40px", fontWeight: "600" }}>L</span>inks
      </h1>
      <ul>
        <li><a>Home</a></li>
        <li><a>Resume Creator</a></li>
        <li><a>History</a></li>
      </ul>
    </div>

    <div className="col-4 mt-2 py-3 px-5">
      <form action="">
        <div className="d-flex justify-content-between align-items-center">
          <input type="text" className="form-control me-3" placeholder='Enter Your Email...' />
          <Button variant="outlined" color="warning" className="py-1 px-4 text-light">
            Subscribe
          </Button>
        </div>
      </form>

      <div className="d-flex justify-content-between align-items-center mt-5">
        <ImFacebook2 className="fs-2" />
        <FaInstagram className="fs-2" />
        <FaLinkedin className="fs-2" />
        <FaXTwitter className="fs-2" />
      </div>
    </div>
  </div>
</div>




    </>
  )
}

export default Footer
