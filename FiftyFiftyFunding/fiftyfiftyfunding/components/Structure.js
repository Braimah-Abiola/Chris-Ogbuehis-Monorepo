import Image from 'next/image'

function Structure() {
  return (
    <div id='structure' className='bg-black flex flex-col md:flex-row items-center justify-around py-8 md:py-20'>
        <div className='text-white px-4 md:px-0'>
            <h1 className='font-bold text-5xl text-center md:text-left md:text-8xl mb-8 md:mb-10'>STRUCTURE</h1>
            <p className='text-md md:text-base'>
            For every business we choose to invest in, a 50-50 arrangement is at the core of <br className='hidden md:block'/>
            our partnership. Half of the ownership will belong to us, and the other half goes <br className='hidden md:block'/>
            directly to the owner. <br className='hidden md:block'/>

            <br/>Importantly, the owner is not required to make any long term financial<br className='hidden md:block'/>
            contributions; their commitment lies in the form of sweat equity, as they will <br className='hidden md:block'/>
            actively operate the business. <br/> 

            <br/>While the owner retains full operational control, our FiftyFifty team will hold the <br className='hidden md:block'/>
            ultimate decision-making authority, particularly on significant matters like a <br className='hidden md:block'/>
            potential sale. <br/> 

            <br/>We acknowledge that a 50% equity stake may seem substantial, but it reflects the <br className='hidden md:block'/>
            level of risk we assume with our funding. We firmly believe in the value we bring in <br className='hidden md:block'/>
            terms of operational support, which is instrumental in ensuring the success of <br/>
            each and every company we partner with.
            </p>
        </div>

        <div className='mt-8 md:mt-0'>
            <Image src="/header/FiftyFifty-Logo.png" alt='logo' width={200} height={200} className='mx-auto'/>
        </div>
    </div>
  )
}

export default Structure;
