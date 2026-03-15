import { useState, useRef } from "react";
import EnvelopeOpening from "@/components/EnvelopeOpening";
import Hero from "@/components/Hero";
import BrideGroom from "@/components/BrideGroom";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import RSVP from "@/components/RSVP";
import WeddingGift from "@/components/WeddingGift";
import Closing from "@/components/Closing";
import JavaneseOrnaments from "@/components/JavaneseOrnaments";
import MusicPlayer from "@/components/MusicPlayer";

// Public domain Gamelan music (royalty-free)
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div style={{ backgroundColor: "#2a1618", minHeight: "100vh" }}>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={MUSIC_URL} loop preload="none" />

      {/* Envelope / Gate Opening Intro */}
      <EnvelopeOpening onOpen={() => setOpened(true)} audioRef={audioRef} />

      {/* Main Invitation Content */}
      {opened && (
        <div>
          <JavaneseOrnaments />
          <MusicPlayer audioRef={audioRef} />
          <Hero />
          <BrideGroom />
          <EventDetails />
          <Countdown />
          <RSVP />
          <WeddingGift />
          <Closing />
        </div>
      )}
    </div>
  );
}

export default App;
