import Image from 'next/image'

function Structure() {
  return (
    <div className='bg-black flex flex-row items-center justify-around'>
        <div className='text-white py-20'>
            <h1 className='font-bold text-8xl mb-10'>STRUCTURE</h1>
            <p>
            For every business we choose to invest in, a 50-50 arrangement is at the core of<br/>
            our partnership. Half of the ownership will belong to us, and the other half goes<br/>
            directly to the owner.<br/>

            <br/>Importantly, the owner isn't required to make any long term financial<br/>
            contributions; their commitment lies in the form of sweat equity, as they will<br/>
            actively operate the business.<br/> 

            <br/>While the owner retains full operational control, our FiftyFifty team will hold the<br/>
            ultimate decision-making authority, particularly on significant matters like a<br/>
            potential sale.<br/> 

            <br/>We acknowledge that a 50% equity stake may seem substantial, but it reflects the<br/>
            level of risk we assume with our funding. We firmly believe in the value we bring in<br/>
            terms of operational support, which is instrumental in ensuring the success of<br/>
            each and every company we partner with.
            </p>
        </div>

        <div>
            <Image src="/header/FiftyFifty-Logo.png" alt='logo' width={300} height={300}/>
        </div>
    </div>
  )
}

export default Structure;