import React from "react";
import { createRoot } from "react-dom/client";
import { Trophy, Clock, Users, Swords, CreditCard, ListChecks, MessageCircle } from "lucide-react";
import "./style.css";
import logo from "./assets/pause-logo.jpeg";

const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLScVIyCqzfuBH1sTMMGNiZldGiRjSRjTjodcVC6pcNVyJhqGbA/viewform";
const WHATSAPP_LINK = "https://wa.me/20121957229";

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="heroGlow" />
        <nav className="nav">
          <img src={logo} alt="Pause Logo" />
          <span>PAUSE WORLD CUP</span>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">PAUSE GAMING CAFÉ PRESENTS</p>
          <h1>PAUSE WORLD CUP S1</h1>
          <h2>FC 26 Tournament</h2>
          <p className="motto">Where Legends Compete.</p>

          <div className="actions">
            <a className="primaryBtn" href={FORM_LINK} target="_blank">Register Now</a>
            <a className="secondaryBtn" href={WHATSAPP_LINK} target="_blank">
              <MessageCircle size={18} /> Contact WhatsApp
            </a>
          </div>

          <div className="progressBox">
            <div className="progressText">
              <span>Registered Legends</span>
              <strong>0 / 32</strong>
            </div>
            <div className="bar"><div className="barFill" style={{ width: "0%" }} /></div>
          </div>
        </div>
      </section>

      <section className="infoGrid">
        <Card icon={<Users />} title="32 Legends" text="Only 32 confirmed participants will enter Season 1." />
        <Card icon={<Trophy />} title="World Cup Format" text="8 groups of 4. Top 2 qualify to the knockout stage." />
        <Card icon={<Clock />} title="24h Payment" text="Registration is confirmed only after payment within 24 hours." />
        <Card icon={<Swords />} title="Live Draw" text="Groups will be announced in a live draw on Pause social media." />
      </section>

      <section className="panel">
        <div>
          <p className="sectionTag">Tournament Rules</p>
          <h3>Simple. Fair. Competitive.</h3>
        </div>
        <ul className="rules">
          <li><ListChecks /> Real Name + Gamertag are required.</li>
          <li><ListChecks /> Each Legend chooses one national team and keeps it all tournament.</li>
          <li><ListChecks /> National teams are not exclusive.</li>
          <li><ListChecks /> Fair play is required at all times.</li>
          <li><ListChecks /> Waiting List opens after 32 confirmed Legends.</li>
        </ul>
      </section>

      <section className="panel payment">
        <div>
          <p className="sectionTag">Payment Methods</p>
          <h3>Confirm your spot.</h3>
          <p>Vodafone Cash, InstaPay, or payment inside Pause.</p>
        </div>
        <CreditCard size={56} />
      </section>

      <footer>
        <strong>PAUSE WORLD CUP S1</strong>
        <span>Where Legends Compete.</span>
      </footer>
    </main>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
