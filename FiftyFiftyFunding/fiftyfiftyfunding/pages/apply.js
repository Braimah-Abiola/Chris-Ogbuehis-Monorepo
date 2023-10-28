import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PopupButton } from '@typeform/embed-react'

function Apply() {
  return (
    <div className='bg-black'>
        <Navbar />

        <div className='mt-20 px-10'>
        <h2 className="text-[#01BFF1] uppercase font-semibold text-lg md:text-xl">apply now</h2>
        <h1 className="text-white text-3xl md:text-8xl mt-5 mb-16 md:mb-24 font-bold uppercase">
            Lets start <br className='hidden md:block'/> 
            something <br className='hidden md:block'/> 
            together
        </h1>


            {/* Button */}
            <div>
                <PopupButton id="netPyDqo" style={{ fontSize: 20 }} className="my-button text-white bg-blue-600">
                    Apply For Funding
                </PopupButton>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Apply;
