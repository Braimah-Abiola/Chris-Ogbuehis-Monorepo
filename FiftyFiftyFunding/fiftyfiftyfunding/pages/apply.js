import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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


            {/* Form */}
            <div className='rounded-lg border border-[#737373] text-white p-7 mb-40'>

                {/* EXECUTIVE SUMMARY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>EXECUTIVE SUMMARY</h2>
                    <input 
                        type="text" 
                        placeholder="Briefly describe your business idea and its uniqueness" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                    {/* className="bg-[#1F1F1F] p-2 w-full md:w-[80%] text-white outline-none focus:border-white focus:border-2" */}

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
                <div className='flex flex-col md:flex-row gap-4 md:gap-60 mb-16'>
                    <div>
                        <h2 className='mb-8 font-semibold'>BUSINESS PLAN</h2>
                        <p className='text-xs md:uppercase md:text-[15px]'>
                            Create a video detailing the reasons you believe FiftyFifty should<br className='hidden md:block'/> invest in your business. Feel free to elaborate on why alternative<br className='hidden md:block'/> funding avenues have proven unsuccessful and articulate the<br className='hidden md:block'/> significance of this opportunity for you and your family.
                        </p>
                    </div>

                    <div className="cursor-pointer flex flex-col gap-5 items-center justify-center w-full md:w-[350px] h-[250px] md:h-[350px] bg-neutral-950 rounded-[25px] border border-neutral-500">
                        <Image src='/apply/folder.png' alt='folder-icon' width={80} height={80} className='md:w-[100px] md:h-[100px]'/>
                        <p className='text-xs md:text-base'>UPLOAD VIDEO</p>
                    </div>
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
                        placeholder="Detail the roles and responsibilites of team members" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Mention any advisors or mentors" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* FINAL PROJECTIONS */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>FINAL PROJECTIONS</h2>
                    <input 
                        type="text" 
                        placeholder="Present a summary of your final projections for the next 3-5 years" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Include income statements, balance sheets, and cash flow forecasts" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss the assumptions behind your financials" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* FUNDING REQUEST */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>FUNDING REQUEST</h2>
                    <input 
                        type="text" 
                        placeholder="Specify the amount of funding you need and how you plan to use it" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain the expected return on investment (ROI) for the investors" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Discuss the type of investment you are seeking (e.g. equity, debt)" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* USE OF FUNDS */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>USE OF FUNDS</h2>
                    <input 
                        type="text" 
                        placeholder="Provide a breakdown of how you will allocate the funds" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Show how the investment will support business growth and sustainability" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* EXIT STRATEGY */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>EXIT STRATEGY (IF APPLICABLE)</h2>
                    <input 
                        type="text" 
                        placeholder="Describe potential exit options for the investor, such as acquisition or IPO" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain the timeline for the exit strategy" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* RISKS AND CHALLENGES */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>RISKS AND CHALLENGES</h2>
                    <input 
                        type="text" 
                        placeholder="Identify potential risks and challenges your business may face" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />

                    <input 
                        type="text" 
                        placeholder="Explain your plan to mitigate these risks" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                {/* APPENDIX */}
                <div className='flex flex-col gap-5 mb-16'>
                    <h2 className='mb-8 font-semibold'>APPENDIX</h2>
                    <input 
                        type="text" 
                        placeholder="Include any additional information that supports your business plan(e.g. Market research, product demos, legal documents)" 
                        className="bg-[#1F1F1F] p-2 w-[80%] text-white outline-none focus:border-white focus:border-2"
                    />
                </div>

                <div className='flex flex-col md:flex-row items-center justify-between py-4 md:py-0'>
                    <div className="border border-white text-white font-bold py-2 px-4 inline-flex items-center hover:bg-white hover:text-black cursor-pointer transition">
                        <span className="mr-2">SUBMIT BUSINESS PLAN</span>
                    </div>

                    <div>
                        <p className='text-center mt-7 md:mt-0 md:text-left'>
                            Ensure that your business plan is well-written, free of errors, and professionally formatted. It's also important to tailor the plan to the specific needs<br/> and expectations of the investor you are approaching. Be prepared to answer questions and provide additional information as requested.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Apply;