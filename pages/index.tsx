import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Your Weather App</title>
        <meta name="description" content="Get accurate weather forecasts and plan your day with confidence." />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-[url('@/public/night_bg.png')] bg-cover bg-center h-screen w-full text-white">
        <header className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Weather App</h1>
          <p className="text-lg mb-8">Plan Your Day with Confidence. Get Accurate Weather Forecasts Now!</p>
        </header>

        <section className="text-center max-w-lg">
          <p className="mb-8 text-xl">
            Stay ahead with precise, up-to-the-minute weather insights for any city you need. Register now to unlock custom forecasts and weather updates designed for you.
          </p>
          <div className="flex space-x-4">
            <Link href="/signup">
              <p className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100">
                Sign Up
              </p>
            </Link>
            <Link href="/login">
              <p className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded shadow hover:bg-white hover:text-blue-600">
                Log In
              </p>
            </Link>
          </div>
        </section>

        <footer className="absolute bottom-4 text-sm text-white opacity-75">
          © 2024 Weather App - All rights reserved
        </footer>
      </main>
    </>
  );
};

export default LandingPage;
