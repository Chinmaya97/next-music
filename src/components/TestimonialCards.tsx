"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "The instructors at this music school are truly amazing! They've helped me improve my skills faster than I ever thought possible. The real-time feedback during practice sessions has been a game-changer for my progress.",
    name: "Sarah Johnson",
    title: "Student, Piano Lessons",
  },
  {
    quote:
      "As a parent, I love how this music school fosters creativity and confidence in my child. The collaborative learning approach has made my daughter more engaged and excited about her violin lessons.",
    name: "Emily Davis",
    title: "Parent of Violin Student",
  },
  {
    quote:
      "Joining this music school was the best decision I've made for my drumming career. The support, resources, and one-on-one guidance have pushed me to achieve new heights in my performances.",
    name: "Michael Lee",
    title: "Student, Drum Lessons",
  },
  {
    quote:
      "I’ve never experienced such an interactive and collaborative learning environment. The ability to work with other musicians in real time has enhanced my guitar playing immensely. Highly recommend this school!",
    name: "David Smith",
    title: "Student, Guitar Lessons",
  },
  {
    quote:
      "The teachers here really care about your progress. Their personalized feedback and structured approach have made learning music both fun and effective. I'm grateful for the positive impact they've had on my singing abilities.",
    name: "Jessica Williams",
    title: "Student, Vocal Training",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden  ">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Here our Harmony: Voices of success{" "}
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
