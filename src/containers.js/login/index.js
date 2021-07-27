import React, { useState } from 'react';
import CustomCarousel from '../../components/customCarousel';
import Button from '../../components/styledComponents/Button';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useCookies } from 'react-cookie';

const Login = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['agilis-user']);

    const loginPressed = () => {
        if(email && email === 'agilis@agilis.com' && password && password === '12345678') {
            setCookie('agilis-user', true, { path: '/' });
        } else {
            alert('Please enter the proper values to login.')
        }
    }

    return (
        <>
            <Button onClick={() => setShowLogin(true)}>
                {'Login'}
            </Button>
            <CustomCarousel />
            {showLogin ? <Modal
                show={showLogin}
                onHide={() => setShowLogin(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={4} md={4}>
                                <text>Email: </text>
                            </Col>
                            <Col xs={4} md={4}>
                                <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="email" />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4} md={4}>
                                <text>Password: </text>
                            </Col>
                            <Col xs={4} md={4}>
                                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowLogin(false)}>Close</Button>
                    <Button onClick={() => loginPressed()}>
                        {'Login'}
                    </Button>
                </Modal.Footer>
            </Modal> : null}
        </>
    );
}

export default Login;