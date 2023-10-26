import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

const Header = () => {
  return (
    <div className="p-6 relative">
      <Head>
        <title>FiftyFifty Funding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-8xl line text-white font-bold uppercase">
        Welcome to <span className="text-[#01BFF1]">FiftyFifty,</span><br/>
        <span className='text-[#c3c3c3]'>where we fund</span> your<br/>
        business aspirations<br/>
        <span className='text-[#c3c3c3]'>while you retain</span> full<br/>
        operational control.</h1>
      <p className="text-white mt-2 mb-20 text-[20px]"><strong>Empowering more individuals</strong> within our community to become <strong>business owners,</strong> and <br/>concurrently, educating the community comprehensively on all facets of <strong>entrepreneurship</strong>.</p>
    </div>
  );
};

export default Header;
