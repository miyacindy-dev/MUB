import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [submittedEmail, setSubmittedEmail]= useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const normalizedEmail = email.trim();

        if (!normalizedEmail) {
            setError("Please enter an email address.");
            return;
        }

        if (!normalizedEmail.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }

        setSubmittedEmail(normalizedEmail);
        setEmail("");
        setError("");
    }

    return (
        <section className="newsletter-section">
            <div>
                <p className="section-eyebrow">Stay in the loop</p>
                <h2>Join the MUB Monthly Moo-sletter</h2>
                <p>
                    Receive team updates, event announcements, and occasional cow-related widsom.
                </p>
            </div>

            {submittedEmail && (
                <Alert variant="success" role="status">
                    Thanks! Updates will be sent to {submittedEmail}.
                </Alert>
            )}

            {error && (
                <Alert variant="danger" role="alert">
                    {error}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="newsletter-email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Button type="submit" className="mub-primary-button mt-3">
                    Subscribe
                </Button>
            </Form>
        </section>
    );

}