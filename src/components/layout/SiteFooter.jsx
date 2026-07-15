import { Container } from "react-bootstrap";

export default function SiteFooter() {
    return (
        <footer className="site-footer mt-5">
            <Container className="text-center py-4">
                <h5>🐄 Mad Udderburn</h5>

                <p className="mb-1">
                    Madison, Wisconsin Mixed Ultimate Frisbee
                </p>

                <small>
                    © {new Date().getFullYear()} Mad Udderburn.
                    Built with React & React Bootstrap.
                </small>
            </Container>
        </footer>
    );
}