import { Container } from "react-bootstrap";
import HeroSection from "../components/home/HeroSection";
import UpcomingEventPreview from "../components/home/UpcomingEventPreview";
import UpdateCard from "../components/home/UpdateCard";
import NewsletterForm from "../components/forms/NewsletterForm";
import SectionHeading from "../components/layout/SectionHeading";

import { events } from "../data/events";
import { updates } from "../data/updates";

export default function HomePage() {
    return (
        <>
            <HeroSection />

            <Container className="py-5">
                <SectionHeading
                    eyebrow="Next on the field"
                    title="Upcoming Events"
                    description="Practices, tournaments, and opportunities to meet the herd."
                />

                <UpcomingEventPreview event={events[0]} />
            </Container>

            <section className="section-soft py-5">
                <Container>
                    <SectionHeading
                        eyebrow="Fresh from the pasture"
                        title="Team Updates"
                    />

                    <div className="row g-4">
                        {updates.slice(0, 3).map((update) => (
                            <div className="col-md-4" key={update.id}>
                                <UpdateCard update={update} />
                            </div>
                        ))} 
                    </div>
                </Container>
            </section>

            <Container className="py-5">
                <NewsletterForm />
            </Container>
        </>
    );
}