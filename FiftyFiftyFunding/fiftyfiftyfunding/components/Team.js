import React from 'react'

function Team() {
  return (
    <div className='bg-radial-gradient-blue'>
      <section className="py-16 text-center">
      <h2 className="text-white text-8xl mb-8 font-bold"><span className='text-black'>WE ARE</span> DRIVEN.</h2>
      <p className="text-black font-semibold mb-10 text-center">
        We love what we do.<br/>
        We're excited to get to it every day.<br/>
        Meet the team below.
      </p>

      {/* White Arrow */}
      <div className="flex justify-center items-center mt-5 mb-20">
        <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24" stroke="white" strokeWidth="2"/>
            <path d="M15 20L25 30L35 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>


    {/* Personalities */}
    <div className="flex justify-center items-center flex-wrap bg-[#151515] rounded-lg mx-auto w-[95%]">
        <div className="w-1/3 p-4">
            <img src="/team/Cedric.png" alt="Cedric Egboh" className="mb-4" />
            <h3 className="text-white text-lg">Cedric Egboh</h3>
            <p className="text-gray-300">ATHLETE / INVESTOR REAL ESTATE</p>
        </div>

        <div className="w-1/3 p-4">
            <img src="/team/Onyi.png" alt="Onyi Odukwe" className="mb-4" />
            <h3 className="text-white text-lg">Onyi Odukwe</h3>
            <p className="text-gray-300">CEO, GLO TANNING</p>
        </div>

        <div className="w-1/3 p-4">
            <img src="/team/Micah.png" alt="Micah McDonald" className="mb-4" />
            <h3 className="text-white text-lg">Micah McDonald</h3>
            <p className="text-gray-300">PRESIDENT, DHL DRAWBACK SERVICES</p>
        </div>
    </div>
</section>

    </div>
  )
}

export default Team;