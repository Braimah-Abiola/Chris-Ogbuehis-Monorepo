import React from 'react'
import Image from 'next/image'

function OurGoal() {
  return (
    <div className='bg-black'>
      <section className="flex items-center justify-around py-12">
        {/* Our Goal */}
        <div className="w-1/2">
            <h2 className="text-[#01BFF1]">OUR GOAL</h2>
            <h1 className="text-white text-6xl mt-5 mb-3 font-bold">FIFTYFIFTY GOAL</h1>
            <p className="text-white leading-relaxed mb-8">
                We are in the process of establishing a platform where aspiring entrepreneurs can<br/>
                showcase their business plans to a panel, with the aim of securing full funding for<br/>
                their ventures. Our mission is to empower more individuals within our community<br/>
                to become business owners, and concurrently, to educate the community<br/> 
                comprehensively on all facets of entrepreneurship.
            </p>
        </div>

            <div>
                <Image src='/ourgoal/image1.png' alt='our-goal-1' width='600' height='600'/>
            </div>
        </section>

        {/* What we do */}
        <section className='flex flex-row-reverse items-center justify-around py-12'>
            <div className="text-right">
                <h2 className="text-[#01BFF1]">WHAT WE DO</h2>
                <h1 className="text-white text-6xl mt-5 mb-3 font-bold">HOW<br/> IT WORKS</h1>
                <p className="text-white leading-relaxed mb-8">
                    Our company, known as FiftyFifty, is all about a series of shows where aspiring<br/>
                    entrepreneurs send In their business plan to us. Our panel will then look over each<br/>
                    plan and we will choose two businesses to Invest In. The investment we provide<br/>
                    will fully fund your business. We will assist you in locating a suitable site,<br/>
                    developing the infrastructure, procuring equipment, and more.<br/>
                    However, the day-to-day operations will be your responsibility. Please complete the provided<br/>
                    business plan template or upload your existing business plan. Additionally, we<br/>
                    request a video presentation explaining why we should consider investing<br/>
                    in your venture.
                </p>
                <div className="border border-white text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-white hover:text-black cursor-pointer transition">
                    <span className="mr-2">APPLY NOW →</span>
                </div>
            </div>

            <div>
                <Image src='/ourgoal/image2.png' alt='our-goal-1' width='600' height='600'/>
            </div>
        </section>
    </div>
  )
}

export default OurGoal;