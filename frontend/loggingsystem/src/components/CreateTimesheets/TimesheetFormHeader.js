import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const SubContainer = styled.div`
display:flex;
width:100%;
height: 5rem;
`


const ButtoneLayout = styled.div`
float: right;
width: 50rem;

`

const TimeSheetInfo = styled.div`
margin: 1rem;
width: 30rem;
padding: 0.25rem 1rem; 
`

const TimesheetHeader = () => {

    const SubmitButtonStyled = {
        fontSize: "1rem",
        margin: "1rem",
        padding: "0.25rem 1rem",
        border: "none",
        borderRradius: "3px",
        float: "right",
        backgroundColor: 'green'
    }

    const SaveButtonStyled = {
        fontSize: "1rem",
        margin: "1rem",
        padding: "0.25rem 1rem",
        border: "none",
        borderRradius: "3px",
        float: "right",
        color: "black",
        backgroundColor: 'yellow'
    }

    const DeleteButtonStyled = {
        fontSize: "1rem",
        margin: "1rem",
        padding: "0.25rem 1rem",
        border: "none",
        borderRradius: "3px",
        float: "right",
        backgroundColor: 'red'
    }

    return (

        <SubContainer>
            <TimeSheetInfo><h5>Timesheet for Week 20.04.2020</h5></TimeSheetInfo>
            <ButtoneLayout>
                <Button style={DeleteButtonStyled}>DELETE</Button>
                <Button style={SaveButtonStyled}>SAVE</Button>
                <Button style={SubmitButtonStyled}>SUBMIT</Button>
            </ButtoneLayout>
        </SubContainer>

    )

}

export { TimesheetHeader }