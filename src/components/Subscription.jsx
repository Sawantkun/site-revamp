import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setStatus('Thank you for subscribing!');
      setEmail('');
    } else {
      setStatus('Please enter a valid email address.');
    }
  };

  return (
    <section className="w-full py-16 rounded-lg shadow-lg dark:shadow-none dark:border-2 mx-auto dark:bg-white bg-[#20152F]">
      <h2
        className="text-4xl text-center font-bold tracking-tight sm:text-5xl"
        style={{
          background: 'linear-gradient(90deg, rgba(109,119,254,1) 0%, rgba(91,171,254,1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Subscribe to our Newsletter
      </h2>
      <p className="text-center dark:text-gray-700 text-white opacity-75 mt-6 mb-8 ">
        Get the latest news and updates right in your inbox.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 mx-4 rounded-lg md:w-[300px] w-[280px]  bg-transparent focus:outline-none border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="inline-flex md:mt-0 mt-6 items-center gap-2 rounded-lg px-5 py-3 text-white transition hover:opacity-80"
            style={{
              background: 'linear-gradient(90deg, rgba(109,119,254,1) 0%, rgba(91,171,254,1) 100%)',
            }}
          >
            <span className="font-medium">Subscribe</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 rtl:rotate-180"
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
          </button>
        </div>
      </form>
      {status && <p className="text-center text-[5087D4] mt-4">{status}</p>}
    </section>
  );
};

export default NewsletterSubscription;
