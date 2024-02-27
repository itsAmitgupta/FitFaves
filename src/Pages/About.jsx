import React from "react";

function About() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          About us: Discover Your ideal Gym
        </h2>
        <p class="mb-8 flex flex-wrap flex-row lg:mb-16 font-semibold text-gray-500 dark:text-gray-400 sm:text-xl">
          <span className="pt-3"> Welcome to our platform dedicated to helping you find the perfect gym
          in your area! We understand the importance of fitness and the role it
          plays in maintaining a healthy lifestyle. Whether you're a seasoned
          gym-goer or just starting your fitness journey, we're here to guide
          you every step of the way. </span>
          <span className="pt-3"> At <span className="font-bold underline"> FitFaves</span>, we are passionate
          about connecting individuals with the right fitness facilities that
           suit their needs, preferences, and goals. With our user-friendly
          interface and comprehensive database of gyms, you can easily explore a
          variety of options, from traditional gyms to specialized studios. </span>
            <span className="pt-3">
          Our mission is to empower you to make informed decisions about your
           fitness journey. We provide detailed information about each gym,
          including amenities, equipment, classes offered, pricing, and reviews
          from fellow members. Our goal is to ensure that you find a gym that
          not only meets your physical fitness requirements but also fits
          seamlessly into your lifestyle. </span>
    <span className="pt-3"> Whether you're searching for a gym with state-of-the-art equipment, a vibrant group fitness community, or
          personalized training programs, we've got you covered. With our
          platform, you can discover and compare gyms in your area, making it
          easier than ever to find the perfect fit. </span>
          <span className="pt-3">
          Join us on your quest for better health, improved fitness, and a happier, more active life. Let
          us help you find the best gym to support your journey towards your
          fitness goals. Get started today and take the first step towards a
          healthier you with <span className="font-bold underline text-2xl"> FitFaves</span>.</span>
        </p>
      </div>
    </section>
  );
}

export default About;
