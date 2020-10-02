import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0 1rem;
`;

const StyledNoButton = styled(Button)`
  margin-right: 2rem;
  padding: 0.375rem 2rem;
`;

const StyledYesButton = styled(Button)`
  margin-right: 14rem;
  padding: 0.375rem 2rem;
`;

const DeleteButton = ({ user, timesheet }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //this would be replaced with function from backend
  const deleteTimesheet = () => {
    console.log(user.timesheets.timesheets.length);
    for (let i = 0; i < user.timesheets.timesheets.length; i++) {
      if (user.timesheets.timesheets[i].id === timesheet.id) {
        user.timesheets.timesheets.splice(i, 1);
      }
    }
    console.log(user.timesheets.timesheets.length);
    handleClose();
  };

  return (
    <div>
      {timesheet.status === "Open" ? (
        <Container>
          <StyledButton
            style={{ backgroundColor: "#F6ABAB" }}
            onClick={handleShow}
          >
            Delete
          </StyledButton>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Are you sure you want to delete timesheet for Week{" "}
                {timesheet.week} ?
              </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
              <StyledYesButton variant="primary" onClick={deleteTimesheet}>
                {" "}
                Yes
              </StyledYesButton>

              <StyledNoButton variant="secondary" onClick={handleClose}>
                {" "}
                No{" "}
              </StyledNoButton>
            </Modal.Footer>
          </Modal>
        </Container>
      ) : (
        <Container>
          <StyledButton disabled={true}>Delete</StyledButton>
        </Container>
      )}
    </div>
  );
};

export { DeleteButton };
