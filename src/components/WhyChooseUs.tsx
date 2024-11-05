"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const MusicSchoolContent = [
    {
      title: "Collaborative Music Learning",
      description:
        "Learn and play music together with your peers and instructors in real time. Collaborate on music pieces, share ideas, and get feedback instantly. Our platform helps you streamline your practice sessions, making your learning experience more engaging and productive.",
    },
    {
      title: "Real-time Practice and Feedback",
      description:
        "See and hear progress as it happens. Whether you're practicing solo or in a group, track every note and chord in real time. No more waiting for feedback or confusion about your practice sessions. Enjoy the simplicity and clarity of instant musical updates.",
    },
    {
      title: "Music Sheet Version Control",
      description:
        "Never worry about losing track of the latest version of your music sheets or practice notes. Our platform keeps everything up to date, ensuring that you're always practicing with the correct materials. Stay in sync with your instructors and fellow students for a smooth learning experience.",
    },
    {
      title: "Endless Learning Resources",
      description:
        "With access to a vast library of music resources and real-time updates, you’ll never run out of material to practice and explore. Keep your learning fresh with new techniques, songs, and performance tips to stay inspired and motivated.",
    },
  ];
  

const WhyChooseUs = () => {
  return <div>
    <StickyScroll content={MusicSchoolContent} />
  </div>;
};

export default WhyChooseUs;
