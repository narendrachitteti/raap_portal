import React, { useEffect, useState } from "react";
import './Welcomepage.css';
import { Link, useNavigate } from "react-router-dom";
import {} from "./GenericEstimation";

function Welcomepage() {
  return (
    <div className="container11">
      <header className="header11">
      <div className="logo">
        <img
          src={require("../assets/Header/New_RaaP_Logo.png")}
          alt="RaaP_Logo"
          style={{
            width: "10%",
            left: "4%",
            position: "absolute",
            top: "5%",
            
          }}
        />
        </div>
        <u><h2>RaaP Welcome Screen</h2></u>
      </header>
      <div className="content11"><br/><br/>
        <div className="info11">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;<u><h3>About RaaP:</h3></u>
          <p>
            RaaP (Rooms as a Product) makes construction more affordable for budget hotel and multifamily housing.
            We use our 45+ years of cost optimization experience and our experience as a General Contractor who's built
            over 8,000 units of budget hotels & affordable housing to provide digital tools and a marketplace that integrates
            the GC-Design-Prefab process.
          </p>
        </div>
        <div className="info11">
          <u><h3>Our Methodology:</h3></u>
          <ul>
            <li>1. We collaborate with hotel brands to productize their prototypes and construction designs, developing standardized assemblies and a Digital Twin of the hotel.</li>
            <li>2. Our proprietary data analytics tools and algorithms project key project parameters, quantities, and required pricing components.</li>
            <li>3. Construction costs are derived from a combination of nationwide pricing indices, validated by local GC inputs.</li>
            <li>4. These costs are then fine-tuned to match variations in key parameters (room mix, gross area, perimeter, etc.) and local market conditions.</li>
          </ul>
        </div>
        <center>
        <div className="buttons11">
        <Link
            to="/generic_estimation"
          >
          <button className="buttons11" style={{backgroundColor:"#3A7D22", color:"white"}}>Start Estimate</button><br/>
          </Link>
          <br/>
          <Link
            to="https://meetings.hubspot.com/rj-mahadev?uuid=b1295ee6-5b2c-41c6-87f4-f477cd7ae711"
          >
          <button className="buttons11" style={{backgroundColor:"#FFC000", color:"black",textDecoration:"none"}}>Talk To Us</button>
          </Link>
        </div>
        </center>
        <footer>
          <p className="disclaimer11">
            <b>Disclaimer:</b> Our Construction Cost Tool is being continuously updated with new features and brands. While we strive to project accurate costs based on the brand, project size, location, individual project customization and site-specific variables such as fluctuations in local construction costs can result in significant variances. Users are encouraged to discuss these issues directly with the RaaP team, who can help verify information independently and provide specific advice. By using this tool, you acknowledge that RaaP or our partners are not liable for any errors, omissions, or consequences arising from its use.
          </p>
          <p className="copyright11">©2024 raap.builders and/or its affiliates. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Welcomepage;