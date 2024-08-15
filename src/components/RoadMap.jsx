import React from 'react';
import testimonials from '../data/index';
import Tilt from 'react-parallax-tilt';

const RoadMap = () => {
  return (
    <section className="bg-[#20152F] dark:bg-white dark:border-2 my-10 rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{
                background: 'linear-gradient(90deg, rgba(109,119,254,1) 0%, rgba(91,171,254,1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Read trusted reviews from our customers
            </h2>

            <p className="mt-4 sm:mt-6 max-w-lg leading-relaxed dark:text-gray-600 text-white opacity-75">
              Our AI-powered book writing assistant has transformed the creative process for countless authors. Whether you're a seasoned writer or just starting out, discover how our customers have elevated their storytelling, streamlined their workflow, and produced polished manuscripts that captivate readers.
            </p>
          </div>

          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-white transition sm:mt-6"
            style={{
              background: 'linear-gradient(90deg, rgba(109,119,254,1) 0%, rgba(91,171,254,1) 100%)',
            }}
          >
            <span className="font-medium">Read all reviews</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              transitionSpeed={1000}
              key={testimonial.id}
              className="flex h-full flex-col justify-between dark:bg-gradient-to-r from-[#6C78FE] to-[#5CA9FE] bg-[#150925] p-6 shadow-sm sm:p-8 rounded-lg"
            >
              <div>
                <div className="mt-4">
                  <p className="text-xl font-bold text-white sm:text-2xl">{testimonial.title}</p>

                  <p className="mt-2 leading-relaxed text-white opacity-75">{testimonial.text}</p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-white sm:mt-6 opacity-75">
                &mdash; {testimonial.author}
              </footer>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
