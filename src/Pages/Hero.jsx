import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section class="bg-[#A0AECD] dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-6">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Find the Best Gym Here!
          </h1>
          <p class="max-w-2xl mb-6 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            "Transform Your Body, Transform Your Life! Discover the Power of Fitness on Our Website!"
          </p>
          <a
            href="#card"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-grey-800 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <Link
            to='/contact'
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-indigo-700 bg-indigo-700 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img src="./src/assets/img1.jpg" alt="Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;