'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
    const webinars = [
        {
          title: "Mastering Piano Techniques",
          description: "Join our expert instructors as they dive into advanced piano techniques to help you elevate your playing. This webinar is perfect for intermediate and advanced pianists looking to refine their skills.",
          isFeatured: true,
          slug: "mastering-piano-techniques"
        },
        {
          title: "The Art of Music Composition",
          description: "Learn the fundamentals of composing your own music. This webinar will guide you through melody creation, harmonization, and structure, with tips from professional composers.",
          isFeatured: false,
          slug: "art-of-music-composition"
        },
        {
          title: "Improvisation for Guitarists",
          description: "Explore the world of improvisation with our guitar experts. Whether you're into jazz, rock, or blues, this webinar will teach you how to create spontaneous music and express your creativity.",
          isFeatured: true,
          slug: "improvisation-for-guitarists"
        },
        {
          title: "Vocal Training Essentials",
          description: "This webinar focuses on vocal techniques that will help you improve your pitch, tone, and breath control. Ideal for singers of all levels who want to take their vocal skills to the next level.",
          isFeatured: false,
          slug: "vocal-training-essentials"
        },
        {
          title: "Music Theory Simplified",
          description: "A beginner-friendly webinar designed to make music theory easy to understand. Learn the basics of scales, chords, and rhythm, and apply this knowledge to any instrument.",
          isFeatured: true,
          slug: "music-theory-simplified"
        }
      ];
      
  return (
    <div className="p-12 bg-grey-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            ENHANCE YOUR MUSICAL JOURNEY
          </p>
        </div>
        <div className="m-10">
            <HoverEffect 
            items={webinars.map(webinar => (
                
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: `/${webinar.slug}`
                }
                
            ))}
            
            />

        </div>
        <div className="m-10 text-center">
          <div className="m-10 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neural-600 text-neutral-700 bg-white hover:bg-grey-100 transition duration-200"
          >
            View All Webinars
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
