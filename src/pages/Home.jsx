import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Footer from '../partials/Footer';
import TopHeader from '../partials/TopHeader';
import PriceList from '../partials/PriceList';
import Sidebar from '../partials/Sidebar';

import { FloatButton } from 'antd';


function Home() {
  let width = window.innerWidth;
  return (
    <div className="flex flex-col min-h-screen overflow-hidden scroll-smooth">

      {/*  Site header */}
      <TopHeader />
      <Header />
      {
        width <= 768 ?
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right />
          :
          <></>

      }

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <PriceList />
        <FeaturesBlocks />
        <FloatButton.BackTop />
        <Testimonials />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;