import React from 'react';
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';


const TimesheetRowForm = () => {

    const secondColStyle = {
        borderLeft: "1px solid black",
        borderBottom: "1px solid black",
        textAlign: "center",
        height: "3rem"
    }

    const secondColRightStyle = {
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
        borderBottom: "1px solid black",
        textAlign: "center",
        height: "3rem"
    }

    const StyledDropButton = {
        marginTop: "0.25rem",
        backgroundColor: "grey",
        border: "none"
    }

    const StyledInput = {
        marginTop: "0.45rem",
    }
    return (
        <Container>
            <div>
                <Row fluid="md">
                    <Col style={secondColStyle} xs={1}></Col>
                    <Col style={secondColStyle} xs={2}>
                        <Dropdown>
                            <Dropdown.Toggle style={StyledDropButton} id="dropdown-basic">
                                Select Project
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col style={secondColStyle} xs={2}>
                        <Dropdown >
                            <Dropdown.Toggle style={StyledDropButton} id="dropdown-basic">
                                Select Project
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col style={secondColStyle}><input style={StyledInput} size='1.5'></input></Col>
                    <Col style={secondColStyle}><input style={StyledInput} size='1.5'></input></Col>
                    <Col style={secondColStyle}><input style={StyledInput} size='1.5'></input></Col>
                    <Col style={secondColStyle}><input style={StyledInput} size='1.5'></input></Col>
                    <Col style={secondColStyle}><input style={StyledInput} size='1.5'></input></Col>
                    <Col style={secondColStyle}><input style={StyledInput} size='1.5'></input></Col>
                    <Col style={secondColStyle}><input style={StyledInput} size='1.5'></input></Col>
                    <Col style={secondColRightStyle}></Col>
                </Row>
            </div>
        </Container>
    )
}

export { TimesheetRowForm }