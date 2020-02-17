import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import './Register.css'
import QR from './QR.png'

class Register extends Component{
    handleRegister = (e) => {
        e.preventDefault()
        window.location.replace('https://forms.gle/3Fwwwkg2H7WfHh3i8')
    }
    handlePayment = (e) => {
        e.preventDefault()
        window.location.replace('https://forms.gle/VUsS5Us51aY3BjqAA')
    }
    render(){
        return (
            <Container>
                <h4 id="top-heading"><b>Srijan'20</b></h4>
            <Jumbotron style={{marginTop: 50}}>
                <Container>
                    <h3>Registration Portal</h3>
                    <br></br>
                    <p>
                        <Button onClick = {this.handleRegister}>Register</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron style={{marginTop: 50}}>
                <Container>
                    <h3>Payment Portal</h3>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-12 col-xs-12 col-md-6 col-ls-6">
                            <h6><b>Steps:</b></h6>
                            <br></br>
                            <p style={{textAlign: "left"}}><b>Please fill the registration form first.</b></p>
                            <p style={{textAlign: "left"}}>1. Pay using UPI by scanning the QR Code or using the UPI ID.</p>
                            <p style={{textAlign: "left"}}>2. Fill in the Delails in form by the clicking the button below.</p>
                            <br></br>
                            <Button onClick = {this.handlePayment}>Payment Details</Button>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-6 col-ls-6">
                            <img src={QR} id="img-qr" alt="qr"></img>
                            <p><b>OR</b></p>
                            <p><b>Pay At:</b></p>
                            <p><b>9457513683@ybl</b></p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            </Container>
        )
    }
}

export default Register;