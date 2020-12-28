import { black } from 'colors'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
// import {shopify} from '../images/shopify.jpg'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Latest</Col>
          <Col className='text-center py-3'>Information</Col>
          <Col className='text-center py-3'>Services</Col>
          <Col className='text-center py-3'>Support</Col>
        </Row>
        <Row>
          {/* <Col>
            <Image src='./images/shopify.jpg' style={{height: '130px'}} />
          </Col> */}
          <Col className='text-center py-3'>
            Powered by <span className="shopify">Shopify</span> <br /> &copy; 2020 https://monarchtracker.com/
          </Col>
          <Col>
            <div className='social-media'>
              <br />
              <i className='fab fa-yelp'>&nbsp;Yelp</i>
              <br />
              <i className='fab fa-facebook'>&nbsp;Facebook</i>
              <br />
              <i className='fab fa-twitter'>&nbsp;Twitter</i>
              <br />
              <i className='fab fa-google'>&nbsp;Maps</i>
            </div>
          </Col>
          <Col>
            <div className="credit-cards">
              <Image src='./images/american-express.png' alt="american-express.png" />
              <Image src='./images/discover.png' alt="discover.png" />
              <Image src='./images/mastercard.png' alt="mastercard.png" />
              <Image src='./images/visa.png' alt="visa.png" />
            </div>
          </Col>
        </Row>
        
      </Container>
    </footer>
  )
}

export default Footer
