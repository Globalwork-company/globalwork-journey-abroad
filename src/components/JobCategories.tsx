
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Building, Users, Coffee, Wrench, Home, Heart, GraduationCap, Laptop, Cpu, Calculator, Globe } from 'lucide-react';

const JobCategories = () => {
  const categories = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Agriculture & Farming",
      jobs: "120+ Jobs",
      salary: "CAD 16-30/hr",
      popular: true,
      category: "agriculture"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Hospitality",
      jobs: "95+ Jobs",
      salary: "USD 14-20/hr",
      category: "hospitality"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Driving & Transport",
      jobs: "85+ Jobs",
      salary: "CAD 18-25/hr",
      category: "transport"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Caregiving",
      jobs: "110+ Jobs",
      salary: "CAD 2400-3800/mo",
      category: "caregiving"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Construction",
      jobs: "130+ Jobs",
      salary: "USD 16-30/hr",
      category: "construction"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Warehouse",
      jobs: "100+ Jobs",
      salary: "USD 15-25/hr",
      category: "warehouse"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare & Nursing",
      jobs: "150+ Jobs",
      salary: "USD 22-45/hr",
      popular: true,
      category: "healthcare"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education & Teaching",
      jobs: "80+ Jobs",
      salary: "USD 18-35/hr",
      category: "education"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Remote Work",
      jobs: "200+ Jobs",
      salary: "USD 15-50/hr",
      popular: true,
      category: "remote"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "ICT & Engineering",
      jobs: "90+ Jobs",
      salary: "USD 25-60/hr",
      category: "ict"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Finance & Accounting",
      jobs: "75+ Jobs",
      salary: "USD 20-40/hr",
      category: "finance"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Services",
      jobs: "65+ Jobs",
      salary: "USD 16-35/hr",
      category: "international"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Job Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore high-demand opportunities across multiple countries with competitive salaries and benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={`/jobs?category=${category.category}`}>
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer relative transform hover:-translate-y-1">
                {category.popular && (
                  <div className="absolute -top-3 -right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-900">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.jobs}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-lg font-bold text-green-600">{category.salary}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors" asChild>
            <Link to="/jobs">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
