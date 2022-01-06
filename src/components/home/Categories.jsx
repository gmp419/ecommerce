import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55 text-uppercase">
                    <h2 className="text-uppercase">Categories</h2>
                    <p className="text-capitalize">
                    Some of Our Exclusive Collection, You May Like
                    </p>
                </div>
                    <Row>
                        <Col key={1} xl={6} lg={6} md={2} sm={1} xs={12} >
                            <Row>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col key={1} xl={6} lg={6} md={2} sm={1} xs={12} >
                            <Row>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={1}>
                                <Card className="h-100 w-100 text-center">
                                    <Card.Body>
                                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="" className="center" />
                                    <h5 className='text-uppercase category-name'>
                                        Fashion
                                    </h5>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Categories
