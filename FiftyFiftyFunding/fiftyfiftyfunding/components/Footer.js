import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-black flex items-center justify-between py-24 px-20 flex-row border-t-2 border-slate-700'>
        <div>
            <Image src="/header/FiftyFifty-Logo.png" alt='logo' width={100} height={100}/>
        </div>

        <div className='flex flex-col text-white items-center gap-16'>
            <div className="flex justify-center space-x-6 text-white">
                <a href="#our-goal" className="hover:underline uppercase">Our goal</a>
                <a href="#how-it-works" className="hover:underline uppercase">How it works</a>
                <a href="#meet-the-team" className="hover:underline uppercase">Meet the team</a>
                <a href="#structure" className="hover:underline uppercase">Structure</a>
            </div>

            <div className="flex items-center justify-center space-x-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-[#1F1F1F] p-2 text-white outline-none focus:border-white focus:border-2"
                />

                <div className="border border-white text-white font-bold py-2 px-4 inline-flex items-center hover:bg-white hover:text-black cursor-pointer transition">
                    <span className="mr-2">STAY IN THE LOOP →</span>
                </div>
            </div>

            <p>© Copyright 2023 FiftyFifty Inc.</p>
        </div>

        <div>
            <Image src="/header/bcorp.png" alt='logo' width={100} height={100}/>
        </div>
    </div>
  )
}

export default Footer;