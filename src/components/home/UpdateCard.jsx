import { Card } from "react-bootstrap";

export default function UpdateCard({update}) {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Body>
                <Card.Title>{update.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {update.date}
                </Card.Subtitle>

                <Card.Text>
                    {update.content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}