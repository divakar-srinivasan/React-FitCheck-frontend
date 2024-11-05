import React from 'react'
import about_1 from '../../images/about-1.jpeg'
import about_2 from '../../images/about-2.jpeg'
import about_3 from '../../images/about-3.jpeg'
import about_4 from '../../images/about-4.jpeg'
import bgVideo from '../../images/bg-video.mp4'

const About = () => {
  return (
    <>
        <video
          autoPlay
          loop
          muted
          className="  w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
      </video>    
    <div className='bg-black w-full h-full'>

      <div className='p-10'>
      <h1 data-aos='fade-right' className='pb-8 text-3xl text-red-700 font-libre font-bold'>About Us</h1>
        <p data-aos='zoom-out-down' className='text-custom-red font-bold font-flower text-center text-3xl'>Welcome to about_4</p>
        <p data-aos='zoom-in' className='text-white text-center px-28 py-10 font-roboto text-xl'>Your ultimate platform for conquering fitness goals. Whether you're just starting your fitness journey or are a seasoned pro, about_4 empowers you to reach new heights with personalized tracking, motivation, and community support.</p>
      </div>
      <div className='flex items-center px-20'>
      <img data-aos='fade-right' src={about_1} alt='loading' className='w-96 h-auto' />
      <p data-aos='fade-left' className='text-white px-28 font-mono text-xl'>At about_4, we are passionate about providing a seamless and inspiring platform where you can monitor your progress, set ambitious goals, and stay motivated. From daily workouts and nutrition tracking to joining community challenges and accessing expert wellness tips, we've got you covered!</p>
      </div>

      <h1 data-aos='fade-right' className='p-16 text-3xl text-red-700 font-libre font-bold'>Our about_3</h1>
      <div className='flex items-center px-20'>
      <p data-aos='fade-right' className='text-white px-28 font-mono text-xl'>To revolutionize the way you achieve fitness by offering the best tools and resources for tracking your progress and smashing your goals. Our about_3 is to create a supportive community that motivates and inspires individuals of all fitness levels.</p>
      <img data-aos='fade-left' src={about_3} alt='loading' className='w-96 h-auto' />
      </div>

      <h1 data-aos='fade-right' className='p-16 text-3xl text-red-700 font-libre font-bold'>Our about_2</h1>
      <div className='flex items-center px-20'>
      <img data-aos='fade-right' src={about_2} alt='loading' className='w-96 h-auto' />
      <p data-aos='fade-left' className='text-white px-28 font-mono text-xl'>To become the go-to fitness tracking platform that fosters an inclusive, motivating environment where every user can achieve their personal best and celebrate their fitness journey.</p>
      </div>

      <h1 data-aos='fade-right' className='p-16 text-3xl text-red-700 font-libre font-bold'>Why Choose about_4?</h1>
      <div className='flex items-center px-20 justify-around'>
      <div>
      <ol className='space-y-2'>
        <li className='text-white text-xl font-mono'>Comprehensive Fitness Tracking</li>
        <li className='text-white text-xl font-mono'>User-friendly Interface</li>
        <li className='text-white text-xl font-mono'>Stay Connected with the Fitness Community</li>
        <li className='text-white text-xl font-mono'>Instant Progress Updates</li>
        <li className='text-white text-xl font-mono'>Customizable Notifications</li>
        <li className='text-white text-xl font-mono'>Simple Goal Setting</li>
        <li className='text-white text-xl font-mono'>Exciting Motivational Challenges</li>
      </ol>
      </div>

      <img data-aos='fade-right' src={about_4} alt='loading' className='w-96 h-auto' />
      </div>

      </div>
    </>
  );
}

export default About;
