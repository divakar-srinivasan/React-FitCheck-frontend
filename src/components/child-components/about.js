import React from 'react'
import img1 from '../../images/eventix-bg2.png'
import vision from '../../images/vision.jpg'
import mission from '../../images/mission.jpg'
import eventix from '../../images/eventix-bg.png'

const About = () => {
  return (
    <>
    <div className='bg-black w-full h-full'>
      <div className='about-bg'>
      </div> 
      <div className=' p-10'>
      <h1 data-aos='fade-right' className='pb-8 text-3xl text-red-700 font-libre font-bold'>About us</h1>
        <p data-aos='zoom-out-down' className='text-custom-red font-bold font-flower text-center text-3xl'>Welcome to Eventix</p>
        <p data-aos='zoom-in' className='text-white text-center px-28 py-10 font-roboto text-xl'> your one-stop platform for staying connected with all the latest college events. Whether you're a student, faculty member, or event organizer, we believe in the power of collaboration and engagement across departments to enrich the college experience.</p>
      </div>
      <div className='flex items-center px-20'>
      <img data-aos='fade-right' src={img1} alt='loading' className='w-96 h-auto' />
      <p data-aos='fade-left' className='text-white px-28 font-mono text-xl'> At Eventix, we are dedicated to providing a streamlined and dynamic platform where you can discover, track, and participate in a wide variety of events happening within our campus. From technical seminars and cultural fests to workshops and guest lectures, we cover it all!</p>
      </div>

      <h1 data-aos='fade-right' className='p-16 text-3xl text-red-700 font-libre font-bold'>Our Mission</h1>
      <div className='flex items-center px-20'>
      <p data-aos='fade-right' className='text-white px-28 font-mono text-xl'>To keep the student community informed, engaged, and inspired by showcasing the vibrant culture of events happening across different departments. We aim to enhance student participation and provide a seamless experience for event creation and management.</p>
      <img data-aos='fade-left' src={mission} alt='loading' className='w-96 h-auto' />
      </div>

      <h1 data-aos='fade-right' className='p-16 text-3xl text-red-700 font-libre font-bold'>Our Vision</h1>
      <div className='flex items-center px-20'>
      <img data-aos='fade-right' src={vision} alt='loading' className='w-96 h-auto' />
      <p data-aos='fade-left' className='text-white px-28 font-mono text-xl'>To become the go-to platform for college event management, promoting an inclusive and engaged campus culture where every student can contribute to and benefit from a lively event calendar.</p>
      </div>

      <h1 data-aos='fade-right' className='p-16 text-3xl text-red-700 font-libre font-bold'>Why Choose Eventix?</h1>
      <div className='flex items-center px-20 justify-around'>
      <div>
      <ol className='space-y-2'>
        <li className='text-white text-xl  font-mono'>Up-to-date Event Listings</li>
        <li className='text-white text-xl  font-mono'>User-friendly Interface</li>
        <li className='text-white text-xl  font-mono'>No More Scrolling Through Emails or WhatsApp Messages</li>
        <li className='text-white text-xl  font-mono'>Instant Event Bookings</li>
        <li className='text-white text-xl  font-mono'>Customizable Notifications</li>
        <li className='text-white text-xl  font-mono'>Event Creation Made Easy</li>
        <li className='text-white text-xl  font-mono'>Community-driven</li>

      </ol>
      </div>

      <img data-aos='fade-right' src={eventix} alt='loading' className='w-96 h-auto' />
      </div>

      </div>
    </>

  )
}

export default About