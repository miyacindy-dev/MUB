import { Route, Routes } from "react-router-dom";
import SiteNavbar from "./components/layout/SiteNavbar";
import SiteFooter from "./components/layout/SiteFooter";

import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import LearnPage from "./pages/LearnPage";
import JoinPage from "./pages/JoinPage";

export default function App() {
    return (
        <div className="app">
            <SiteNavbar />

            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/learn" element={<LearnPage />} />
                    <Route path="/join" element={<JoinPage />} />
                </Routes>
            </main>

            <SiteFooter />
        </div>
    )
}