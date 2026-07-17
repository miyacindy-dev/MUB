import { Button, Card } from "react-bootstrap";

export default function UpcomingEventPreview({event}) {
    return (
        <Card className="shadow-sm border-0">
            <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                    {event.data}
                </Card.Subtitle>
                <Card.Text>
                    <strong>Location:</strong> {event.location}
                </Card.Text>
                <Card.Text>
                    {event.description}
                </Card.Text>
                <Button variant="dark">
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    );
}