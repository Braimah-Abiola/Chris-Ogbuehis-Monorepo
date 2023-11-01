import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-black flex flex-col md:flex-row items-center justify-between py-8 md:py-24 px-4 md:px-20 border-t-2 border-slate-700'>
        <div className='mb-8 md:mb-0'>
            <Image src="/header/FiftyFifty-Logo.png" alt='logo' width={100} height={100}/>
        </div>

        <div className='flex flex-col text-white items-center gap-8 md:gap-16'>
            <div className="flex flex-wrap justify-center space-x-2 md:space-x-6 text-white">
                <a href="#our-goal" className="hover:underline uppercase mb-2 md:mb-0">Our goal</a>
                <a href="#how-it-works" className="hover:underline uppercase mb-2 md:mb-0">How it works</a>
                <a href="#meet-the-team" className="hover:underline uppercase mb-2 md:mb-0">Meet the team</a>
                <a href="#structure" className="hover:underline uppercase mb-2 md:mb-0">Structure</a>
            </div>

            <p className="mt-8 md:mt-0">© Copyright 2023 FiftyFifty Inc.</p>
        </div>

        <div className='mt-8 md:mt-0'>
            
        </div>
    </div>
  )
}

export default Footer;
