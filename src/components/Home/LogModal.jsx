import React, { useState } from "react";
import { Modal } from "react-bootstrap/";

import "reactjs-popup/dist/index.css";
import { LinkContainer } from "react-router-bootstrap/";
import { Button } from "react-bootstrap/";
import Login from "../Login/Login";
import "./Home.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function LogModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal
        show={show}
        animation={true}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <LinkContainer to="/register">
            <Button variant="secondary">Register</Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogModal;
