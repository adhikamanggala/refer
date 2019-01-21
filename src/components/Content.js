import React, { Component } from "react";
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
//  CardSubtitle, CardBody } from 'reactstrap';
// import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardDeck } from 'reactstrap';
// import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import "../support/CardsCss/card.css";

class Content extends Component {
  render() {
    return (
      <div className="main-card">
        <div className="upper">
          <h2>START YOUR EXTRAORDINARY JOURNEY HERE</h2>
          <h4 className="text-muted">Pick your favorite activity!</h4>
        </div>

        <br />
        <br />

        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(https://4.bp.blogspot.com/-ujcpmz3ad_4/WLD-aq_j9GI/AAAAAAAAGFI/E1w8UlRmZbcirBzqSYadaPf6vLUQmrm4gCLcB/s1600/PADAR%2BISLAND.jpg)"
            }}
          >
            <Link style={{ color: "white" }} to="/page?choose=sightseeing"><h1 className="text-shadow">Sightseeing</h1></Link>
          </div>
        </div>
        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(https://manual.co.id/wp-content/uploads/2014/03/Nasi_Goreng_KampungMutton-Street-Menteng2.jpg)"
            }}
          >
            <Link style={{ color: "white" }} to="/page?choose=fnb"><h1 className="text-shadow">Food & Beverage</h1></Link>
          </div>
        </div>
        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/1d/1a/4e/1d1a4ee29933fe487a5a20d27d94276d.jpg)"
            }}
          >
            <Link style={{ color: "white" }} to="/page?choose=coffeeshop"><h1 className="text-shadow">Coffeeshop</h1></Link>
          </div>
        </div>
        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(https://s-media-cache-ak0.pinimg.com/originals/14/37/af/1437aff8fa38f231dead9206cf64f985.jpg)"
            }}
          >
            <Link style={{ color: "white" }} to="/page?choose=religious"><h1 className="text-shadow">Religious Tourism</h1></Link>
          </div>
        </div>
        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(http://infopromodiskon.com/userfiles/uploads/plaza-senayan-6.jpg)"
            }}
          >
            <Link style={{ color: "white" }} to="/page?choose=shopping"><h1 className="text-shadow">Shopping</h1></Link>
          </div>
        </div>
        <div className="flip">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(http://cheapairetickets.in/ckfinder/userfiles/images/Indonesia.jpg)"
            }}
          >
            <Link style={{ color: "white" }} to="/page?choose=nightlife"><h1 className="text-shadow">Nightlife</h1></Link>
          </div>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Content;
