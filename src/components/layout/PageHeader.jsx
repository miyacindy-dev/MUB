import { Container } from "react-bootstrap";

export default function PageHeader({
    eyebrow,
    title,
    description
}) {
    return (
        <header className="page-header">
            <Container className="text-center py-5">
                {eyebrow && (
                    <p className="section-eyebrow mb-2">
                        {eyebrow}
                    </p>
                )}

                <h1>{title}</h1>

                {description && (
                    <p
                        className="mx-auto text-muted"
                        style={{ maxWidth: "700px" }}
                    >
                        {description}
                    </p>
                )}
            </Container>
        </header>
    );
}