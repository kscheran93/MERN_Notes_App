import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div class="intro-text">
            <div>
              <h1 className="title">Welcome to Notes App</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
              <div class="buttonContainer">
                <a href="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    className="landingbutton"
                    variant="outline-primary"
                  >
                    Signup
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
