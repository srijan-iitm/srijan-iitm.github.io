import React, {Component} from 'react'
import SrijanNav from './SrijanNav/SrijanNav'
import "./Srijan.css"
import AOS from 'aos'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import iit_mandi from './img/iit_mandi.png'
import nirmaan from './img/nirmaan.png'
import autocad from './img/autocad.png'
import staadpro from './img/staadpro.jpg'
import bridge from './img/bridge.jpg'
import 'aos/dist/aos.css'; 
import amit from './img/team/amit.jpg' 
import amitjr from './img/team/amitjr.jpg' 
import ankit from './img/team/ankit.jpg' 
import dangi from './img/team/dangi.jpg' 
import vikas from './img/team/vikas.jpg' 
import vikash from './img/team/vikash.jpg' 
import huzaifa from './img/team/huzaifa.jpg' 
import mahipal from './img/team/mahipal.jpg' 
import shivam from './img/team/shivam.jpg' 
import sanjeev from './img/team/sanjeev.jpg' 
import raj from './img/team/raj.jpg' 
import garva from './img/team/garva.jpg' 
import puru from './img/team/puru.jpg' 
import {SocialIcon} from 'react-social-icons';
import MaterialIcon from 'material-icons-react';

AOS.init()
AOS.refresh();

class Srjan extends Component{

    handleSubmit = () => {
        window.location.replace('/register')
    }
    render(){
        return (
            <div style={{ overflowX: "hidden"}}>
                <div id="TopSection">
                <SrijanNav />
                    <div data-aos="fade-up" data-aos-duration="1000" className="aosSrjan1">
                        <center>
                            <Card id="card-iit-logo">
                                <center>
                                    <img src={iit_mandi} id="logo_iit" alt="logo"></img>
                                </center>
                            </Card>
                        </center>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" className="aosSrjan2" id="cardTop">
                    <Card bg="light" className="cardSrjan cardSrjan1">
                        <center>
                        <Card id="card-nirmaan-logo">
                            <center>
                                <img src={nirmaan} id="logotop" alt="logo"></img>
                            </center>
                        </Card>
                        </center>
                    </Card>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="aosSrjan3" id="cardSecond">
                    <Card bg="light" className="cardSrjan cardSrjan2">
                        <Card.Body>
                        <Card.Title><h1 id="hindi-name">सृजन</h1></Card.Title>
                        <hr></hr>
                        <Card.Title><h1 id="english-name">Srijan</h1></Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                    <div data-aos="fade-up" className="aosSrjan4">
                    </div>
                    <center>
                    <h3>
                        <Badge className="date" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" variant="secondary">21</Badge>
                        <Badge className="date" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700" variant="secondary">-</Badge>
                        <Badge className="date" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900" variant="secondary">23</Badge> &nbsp;
                        <Badge data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000" variant="secondary">Feb'20</Badge>
                    </h3>
                        <div data-aos="fade-up" 
                        data-aos-duration="1000" 
                        data-aos-delay="1100">
                        <AwesomeButton 
                        ripple
                        onPress={this.handleSubmit}
                        type="primary"
                        >Participate</AwesomeButton>
                        </div>
                    </center>
                </div>
                <Container id="SecondSection">
                <Jumbotron fluid data-aos="flip-up" data-aos-duration="1000">
                    <Container>
                        <p>
                        Ever been curious about how a Five Star Hotel is designed?<hr></hr>
                        Worried about all those menus that you find in STAAD. Pro?<hr></hr>
                        Or wondered what Building Information Modelling (BIM) is?<hr></hr>
                        Well if your answer is yes to any one of those questions then you are at the right place.<hr></hr>
                        Bridging the gap between Academics and Industry
                        </p>
                        <span style={{fontSize: 30}}>IIT Mandi</span> <br></br> presents <br></br> <span style={{fontSize: 30}}><b>SRIJAN 2020</b></span><br></br> 21st- 23rd Feb.
                    </Container>
                </Jumbotron>
                </Container>
                <Container fluid id="events">
                    <br></br>
                    <h1><Badge variant="info" data-aos="zoom-in-down" data-aos-duration="1000">Workshops</Badge></h1>
                    <br></br>
                <Container id="eventcontainer">
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-right" className="cards">
                    <img src={staadpro} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-left" className="card-right">
                    <Card.Header></Card.Header>
                    <Card.Body>
                    <Card.Title>Training for Bentley STAAD.Pro</Card.Title>
                    <Card.Text>
                        <b>Speaker: Er. Anisurya Ghosh</b>
                        <hr></hr>
                        21st February 2020 | Friday
                        3 Sessions | 2 Hrs. each (~ 6 Hrs.)
                    </Card.Text>
                    </Card.Body>
                </Card>
                </center>
                </div>
                </div>
                <br></br>
                <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-right" className="card-right">
                    <Card.Header></Card.Header>
                    <Card.Body>
                    <Card.Title>Structural Engineering</Card.Title>
                    <Card.Text>
                        <b>Speaker: Er. Suneel Voditel</b>
                        <hr></hr>
                        22th February 2020 | Saturday
                        3 Sessions | 2 Hrs. each (~ 6 Hrs.)
                    </Card.Text>
                    </Card.Body>
                </Card>
                </center>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-left" className="cards">
                    <img src={autocad} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                </div>
                <br></br>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <center>
                <Card data-aos="fade-up-right" className="cards">
                    <img src={bridge} alt="cardpic" className="cardpic"></img>
                </Card>
                </center>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 card-info">
                <center>
                <Card border="primary" data-aos="fade-up-left" className="card-right">
                    <Card.Header></Card.Header>
                    <Card.Body>
                    <Card.Title>Building Information Modelling</Card.Title>
                    <Card.Text>
                        <b>Speaker: Dr. Amarnath CB</b>
                        <hr></hr>
                        23rd February 2020 | Sunday
                        3 Sessions | (~ 1.5 Hrs.)
                    </Card.Text>
                    </Card.Body>
                </Card>
                </center>
                </div>
                </div>
                <br></br>
                <a className="btn btn-primary" data-aos="fade-up" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1hypcxGWm5axwcrOVfPPViyo0dThZxAWI/view">View Details</a>
                </Container>
                </Container>
                <Container id="contact">
                    <Container id="contact-theme">
                    </Container>
                    <Container>
                    <div id="card-contact">
                    <center>
                    <Card border="primary" id="card-contact-main">
                        <Card.Header><h2>Contact Us</h2></Card.Header>
                        <Card.Body id="card-contact-body">
                            <SocialIcon url="https://www.facebook.com/nirmaaniitmandi/" className="socialicon"/>
                            <SocialIcon url="https://github.com/nirmaan-iitm" className="socialicon"/>
                            <SocialIcon url="https://www.linkedin.com/company/nirmman-iit-mandi/" className="socialicon"/>
                            <SocialIcon url="mailto:nirmaan_club@students.iitmandi.ac.in" className="socialicon"/>
                        </Card.Body>
                    </Card>
                    </center>
                    </div>
                    </Container>
                </Container>
                <Container id="team">
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h4>Team</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={sanjeev} rounded />
                            <br></br>
                            <Badge variant="secondary">Sanjeev Singh Yadav</Badge>
                            <br></br>
                            <a href="mailto:b17022@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+917248634696"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/profile.php?id=100009565724198"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={mahipal} rounded />
                            <br></br>
                            <Badge variant="secondary">Mahipalsingh Kulariya</Badge>
                            <br></br>
                            <a href="mailto:"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+918619410273"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/mahipalsingh.kulariya"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={huzaifa} rounded />
                            <br></br>
                            <Badge variant="secondary">Huzaifa S. Electricwala</Badge>
                            <br></br>
                            <a href="mailto:h.electricwala29@gmail.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+918087971052"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://in.linkedin.com/in/huzaifa-electricwala-725634100"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>in</Badge></a>
                        </Col>
                        <Col xs={6} md={6}>
                            <Image className="avatar" src={amit} rounded />
                            <br></br>
                            <Badge variant="secondary">Amit Chauhan</Badge>
                            <br></br>
                            <a href="mailto:b17006@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+918955975421"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/profile.php?id=100007859380225"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={6}>
                            <Image className="avatar" src={dangi} rounded />
                            <br></br>
                            <Badge variant="secondary">Sunil Kumar Dangi</Badge>
                            <br></br>
                            <a href="mailto:sunildangi458@gmail.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+919982299065"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/sunil.dangi.771282"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={raj} rounded />
                            <br></br>
                            <Badge variant="secondary">Rajkumar</Badge>
                            <br></br>
                            <a href="mailto:b17021@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+919112188264"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/imrrajsharma"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={vikas} rounded />
                            <br></br>
                            <Badge variant="secondary">Vikas Verma</Badge>
                            <br></br>
                            <a href="mailto:b17030@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+917665157665"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/vikasverma.viki.3"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={shivam} rounded />
                            <br></br>
                            <Badge variant="secondary">Shivam Kumar</Badge>
                            <br></br>
                            <a href="mailto:shivamkumarbairwa@gmail.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+917568015542"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/profile.php?id=100010248371323"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={6}>
                            <Image className="avatar" src={garva} rounded />
                            <br></br>
                            <Badge variant="secondary">Akash Garva</Badge>
                            <br></br>
                            <a href="mailto:b17002@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+91907985476"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/akash.garva.39"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={6}>
                            <Image className="avatar" src={ankit} rounded />
                            <br></br>
                            <Badge variant="secondary">Ankit Gupta</Badge>
                            <br></br>
                            <a href="mailto:b18008@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+916388792413"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/profile.php?id=100038335323275"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={vikash} rounded />
                            <br></br>
                            <Badge variant="secondary">Vikash singh</Badge>
                            <br></br>
                            <a href="mailto:Vikash.singh702@yahoo.com"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+918219690575"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/vikash.john.397"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={amitjr} rounded />
                            <br></br>
                            <Badge variant="secondary">Amit Kumar Jatav</Badge>
                            <br></br>
                            <a href="mailto:b18005@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+917877434200"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/amit.jatav.10690"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image className="avatar" src={puru} rounded />
                            <br></br>
                            <Badge variant="secondary">Purushottam Sinha</Badge>
                            <br></br>
                            <a href="mailto:b17053@students.iitmandi.ac.in"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="email"/></Badge></a>
                            <a href="tel:+917355414418"><Badge style={{verticalAlign: "middle"}}><MaterialIcon icon="call"/></Badge></a>
                            <a href="https://www.facebook.com/purushottam.sinha.31"><Badge variant="secondary" style={{verticalAlign: "middle", padding: 4.5 , paddingLeft: 6, paddingRight: 6, fontSize: 15}}>f</Badge></a>                        
                        </Col>
                    </Row>
                    </Container>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                </Container>
                <hr></hr>
                <center>
                    &copy; Srjan 2020
                </center>
                <hr></hr>
            </div>
        )
    }
}

export default Srjan