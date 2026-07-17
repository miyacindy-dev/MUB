import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container className="hero-content text-center">
        <p className="hero-kicker">Madison Mixed Ultimate</p>

        <h1>Welcome to the Herd.</h1>

        <p className="hero-description">
          Mad Udderburn is a competitive, inclusive, and cow-powered mixed
          ultimate team based in Madison, Wisconsin.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button as={Link} to="/team" className="mub-primary-button">
            Meet the Team
          </Button>

          <Button as={Link} to="/join" variant="outline-light">
            Join the Herd
          </Button>
        </div>
      </Container>
    </section>
  );
}