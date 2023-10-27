import React from 'react'
import Image from 'next/image'

function OurGoal() {
  return (
    <div className='bg-black'>
      {/* Our Goal */}
      <section id='our-goal' className="flex flex-col md:flex-row items-center justify-around py-12">
        <div className="w-full md:w-1/2 px-6">
            <h2 className="text-[#01BFF1]">OUR GOAL</h2>
            <h1 className="text-white text-4xl md:text-6xl mt-5 mb-3 font-bold">FIFTYFIFTY GOAL</h1>
            <p className="text-white leading-relaxed mb-8">
                We are in the process of establishing a platform where aspiring entrepreneurs can showcase their business plans to a panel, with the aim of securing full funding for their ventures. Our mission is to empower more individuals within our community to become business owners, and concurrently, to educate the community comprehensively on all facets of entrepreneurship.
            </p>
        </div>

        <div className="my-6 md:my-0">
            <Image src='/ourgoal/image1.png' alt='our-goal-1' width='300' height='300' layout="responsive"/>
        </div>
      </section>

      {/* What we do */}
      <section id='how-it-works' className='flex flex-col-reverse md:flex-row-reverse items-center justify-around py-12'>
        <div className="text-left md:text-right w-full md:w-1/2 px-6">
            <h2 className="text-[#01BFF1]">WHAT WE DO</h2>
            <h1 className="text-white text-4xl md:text-6xl mt-5 mb-3 font-bold">HOW<br/> IT WORKS</h1>
            <p className="text-white leading-relaxed mb-8">
                Our company, known as FiftyFifty, is all about a series of shows where aspiring entrepreneurs send In their business plan to us. Our panel will then look over each plan and we will choose two businesses to Invest In. The investment we provide will fully fund your business. We will assist you in locating a suitable site, developing the infrastructure, procuring equipment, and more. However, the day-to-day operations will be your responsibility. Please complete the provided business plan template or upload your existing business plan. Additionally, we request a video presentation explaining why we should consider investing in your venture.
            </p>
            <div className="border border-white text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-white hover:text-black cursor-pointer transition">
                <span className="mr-2">APPLY NOW →</span>
            </div>
        </div>

        <div className="my-6 md:my-0">
            <Image src='/ourgoal/image2.png' alt='how-it-works' width='300' height='300' layout="responsive"/>
        </div>
      </section>
    </div>
  )
}

export default OurGoal;
