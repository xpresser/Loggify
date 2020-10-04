import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import { deleteTimesheetById } from "../../../api/timesheets";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledYesButton = styled(Button)`
  padding: 0.375rem 2rem;
`;

const DeleteButton = ({ user, timesheet }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //this would be replaced with function from backend
  const deleteTimesheet = () => {
    deleteTimesheetById({ timesheetId: timesheet.id });
    window.location.reload();
    handleClose();
  };

  return (
    <div>
      {timesheet.status === "OPEN" ? (
        <Container>
          <Button variant={"danger"} className={"m-1"} onClick={handleShow}>
            Delete
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <p className={"text-danger"}>Delete timesheet?</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete timesheet for week{" "}
              {timesheet.startingDate}?
            </Modal.Body>
            <Modal.Footer>
              <StyledYesButton
                className="btn btn-danger"
                block
                onClick={deleteTimesheet}
              >
                {" "}
                Delete
              </StyledYesButton>
            </Modal.Footer>
          </Modal>
        </Container>
      ) : (
        <Container>
          <Button variant={"danger"} className={"m-1"} disabled={true}>
            Delete
          </Button>
        </Container>
      )}
    </div>
  );
};

export { DeleteButton };
