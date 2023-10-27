import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Apply() {
  return (
    <div className='bg-black'>
        <Navbar />

        <div className='mt-20 px-10'>
            <h2 className="text-[#01BFF1] uppercase font-semibold">apply now</h2>
            <h1 className="text-white text-8xl mt-5 mb-24 font-bold uppercase">
                Lets start<br/> 
                something<br/> 
                together
            </h1>

            {/* Form */}
            <div className='rounded-lg border border-[#737373] text-white p-7'>

                {/* EXECUTIVE SUMMARY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>EXECUTIVE SUMMARY</h2>
                    <input 
                        type="text" 
                        placeholder="Briefly describe your business idea and its uniqueness" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Highlight your target market, competitive advantage, and financial needs" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Summarize the key points of the plan" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* BUSINESS PLAN */}
                <div className='flex flex-col gap-5 mb-16'>
                    
                </div>

                {/* BUSINESS DESCRIPTION */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>BUSINESS DESCRIPTION</h2>
                    <input 
                        type="text" 
                        placeholder="Explain your business concept, its mission and vision" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Describe the problem your business solves or the need it fulfills" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Provide an overview of your industry and market" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKET ANALYSIS */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKET ANALYSIS</h2>
                    <input 
                        type="text" 
                        placeholder="Identify your target market and its size" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Analyze your competition and explain how your business stands out" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss current market trends and opportunities" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* PRODUCTS OR SERVICES */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>PRODUCTS OR SERVICES</h2>
                    <input 
                        type="text" 
                        placeholder="Detail what products or services you offer" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Highlight their features, benefits, and how they address the market needs" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Include any proprietary technology or intellectual property" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKETING AND SALES STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKETING AND SALES STRATEGY (IF YOU HAVE ONE)</h2>
                    <input 
                        type="text" 
                        placeholder="Outline your marketing plan, including advertising, online presence, and branding" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MANAGEMENT AND TEAM */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MANAGEMENT AND TEAM (IF APPLICABLE)</h2>
                    <input 
                        type="text" 
                        placeholder="Provide brief profiles of the key members of your team, highlighting their relevant experience" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKETING AND SALES STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKETING AND SALES STRATEGY (IF YOU HAVE ONE)</h2>
                    <input 
                        type="text" 
                        placeholder="Outline your marketing plan, including advertising, online presence, and branding" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKETING AND SALES STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKETING AND SALES STRATEGY (IF YOU HAVE ONE)</h2>
                    <input 
                        type="text" 
                        placeholder="Outline your marketing plan, including advertising, online presence, and branding" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKETING AND SALES STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKETING AND SALES STRATEGY (IF YOU HAVE ONE)</h2>
                    <input 
                        type="text" 
                        placeholder="Outline your marketing plan, including advertising, online presence, and branding" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKETING AND SALES STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKETING AND SALES STRATEGY (IF YOU HAVE ONE)</h2>
                    <input 
                        type="text" 
                        placeholder="Outline your marketing plan, including advertising, online presence, and branding" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKETING AND SALES STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKETING AND SALES STRATEGY (IF YOU HAVE ONE)</h2>
                    <input 
                        type="text" 
                        placeholder="Outline your marketing plan, including advertising, online presence, and branding" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* MARKETING AND SALES STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>MARKETING AND SALES STRATEGY (IF YOU HAVE ONE)</h2>
                    <input 
                        type="text" 
                        placeholder="Outline your marketing plan, including advertising, online presence, and branding" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your sales strategy, distribution channels, and pricing" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss your customer acquisition and retention strategies" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Apply;