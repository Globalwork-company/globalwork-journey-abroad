
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedJobs from '@/components/FeaturedJobs';
import JobCategories from '@/components/JobCategories';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedJobs />
      <JobCategories />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
