import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Clock, DollarSign, Filter, Search } from 'lucide-react';

const Jobs = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const jobs = [
    // Canada Jobs
    {
      id: 1,
      title: "Farm Worker - Seasonal",
      company: "Sunrise Farms Ltd",
      location: "Ontario, Canada",
      salary: "CAD 18/hour",
      duration: "2-Year Contract",
      country: "🇨🇦",
      category: "agriculture",
      benefits: ["Housing Provided", "Health Insurance", "Visa Support"],
      urgent: true
    },
    {
      id: 2,
      title: "Live-in Caregiver",
      company: "Family Care Services",
      location: "Toronto, Canada",
      salary: "CAD 2,800/month",
      duration: "Permanent",
      country: "🇨🇦",
      category: "caregiving",
      benefits: ["Free Accommodation", "Family Benefits", "Path to PR"]
    },
    {
      id: 5,
      title: "Construction Worker",
      company: "BuildRight Corp",
      location: "Alberta, Canada",
      salary: "CAD 22/hour",
      duration: "18-Month Contract",
      country: "🇨🇦",
      category: "construction",
      benefits: ["Safety Training", "Health Insurance", "Overtime Available"]
    },
    {
      id: 6,
      title: "Truck Driver",
      company: "TransCanada Logistics",
      location: "British Columbia, Canada",
      salary: "CAD 25/hour",
      duration: "Permanent",
      country: "🇨🇦",
      category: "transport",
      benefits: ["Company Vehicle", "Fuel Allowance", "Insurance Coverage"]
    },
    
    // USA Jobs
    {
      id: 3,
      title: "Warehouse Associate",
      company: "Logistics Pro Inc",
      location: "Texas, USA",
      salary: "USD 15/hour",
      duration: "1-Year Contract",
      country: "🇺🇸",
      category: "warehouse",
      benefits: ["Health Coverage", "Overtime Pay", "Training Provided"]
    },
    {
      id: 4,
      title: "Hotel Housekeeper",
      company: "Oceanview Resort",
      location: "Florida, USA",
      salary: "USD 14/hour + Tips",
      duration: "Seasonal (6 months)",
      country: "🇺🇸",
      category: "hospitality",
      benefits: ["Staff Housing", "Meal Allowance", "Tips Included"],
      urgent: true
    },
    {
      id: 7,
      title: "Farm Supervisor",
      company: "Golden Valley Farms",
      location: "California, USA",
      salary: "USD 20/hour",
      duration: "2-Year Contract",
      country: "🇺🇸",
      category: "agriculture",
      benefits: ["Management Training", "Health Benefits", "Visa Support"]
    },
    
    // Kuwait Jobs
    {
      id: 8,
      title: "Hotel Manager",
      company: "Kuwait Luxury Hotels",
      location: "Kuwait City, Kuwait",
      salary: "KWD 800/month",
      duration: "2-Year Contract",
      country: "🇰🇼",
      category: "hospitality",
      benefits: ["Free Accommodation", "Transportation", "Annual Leave"]
    },
    {
      id: 9,
      title: "Construction Foreman",
      company: "Gulf Construction Co",
      location: "Kuwait City, Kuwait",
      salary: "KWD 600/month",
      duration: "3-Year Contract",
      country: "🇰🇼",
      category: "construction",
      benefits: ["Housing Allowance", "Medical Insurance", "Overtime Pay"]
    },
    {
      id: 10,
      title: "Warehouse Supervisor",
      company: "Kuwait Logistics",
      location: "Shuwaikh, Kuwait",
      salary: "KWD 550/month",
      duration: "2-Year Contract",
      country: "🇰🇼",
      category: "warehouse",
      benefits: ["Transportation", "Health Insurance", "Annual Bonus"]
    },
    
    // Dubai Jobs
    {
      id: 11,
      title: "Hotel Receptionist",
      company: "Emirates Grand Hotel",
      location: "Dubai, UAE",
      salary: "AED 4,500/month",
      duration: "2-Year Contract",
      country: "🇦🇪",
      category: "hospitality",
      benefits: ["Visa Processing", "Accommodation", "Medical Insurance"],
      urgent: true
    },
    {
      id: 12,
      title: "Delivery Driver",
      company: "Dubai Express Delivery",
      location: "Dubai, UAE",
      salary: "AED 3,200/month",
      duration: "1-Year Contract",
      country: "🇦🇪",
      category: "transport",
      benefits: ["Company Vehicle", "Fuel Allowance", "Commission"]
    },
    {
      id: 13,
      title: "Caregiver",
      company: "Premium Care Services",
      location: "Dubai, UAE",
      salary: "AED 3,800/month",
      duration: "2-Year Contract",
      country: "🇦🇪",
      category: "caregiving",
      benefits: ["Free Accommodation", "Medical Coverage", "Annual Leave"]
    },
    
    // Qatar Jobs
    {
      id: 14,
      title: "Construction Worker",
      company: "Doha Building Group",
      location: "Doha, Qatar",
      salary: "QAR 2,500/month",
      duration: "2-Year Contract",
      country: "🇶🇦",
      category: "construction",
      benefits: ["Free Housing", "Transportation", "Overtime Available"]
    },
    {
      id: 15,
      title: "Restaurant Server",
      company: "Qatar Fine Dining",
      location: "Doha, Qatar",
      salary: "QAR 2,200/month + Tips",
      duration: "18-Month Contract",
      country: "🇶🇦",
      category: "hospitality",
      benefits: ["Staff Meals", "Tips", "Health Insurance"]
    },
    {
      id: 16,
      title: "Warehouse Worker",
      company: "Qatar Logistics Hub",
      location: "Doha, Qatar",
      salary: "QAR 2,000/month",
      duration: "2-Year Contract",
      country: "🇶🇦",
      category: "warehouse",
      benefits: ["Transportation", "Overtime Pay", "Annual Leave"]
    },
    
    // Netherlands Jobs
    {
      id: 17,
      title: "Agricultural Worker",
      company: "Dutch Greenhouses Ltd",
      location: "Amsterdam, Netherlands",
      salary: "EUR 12/hour",
      duration: "Seasonal (8 months)",
      country: "🇳🇱",
      category: "agriculture",
      benefits: ["EU Work Permit", "Housing Assistance", "Training"]
    },
    {
      id: 18,
      title: "Hotel Cleaner",
      company: "Amsterdam Hotels Group",
      location: "Amsterdam, Netherlands",
      salary: "EUR 11/hour",
      duration: "1-Year Contract",
      country: "🇳🇱",
      category: "hospitality",
      benefits: ["Work Permit Support", "Language Training", "Health Insurance"]
    },
    {
      id: 19,
      title: "Elderly Caregiver",
      company: "Netherlands Care Services",
      location: "Rotterdam, Netherlands",
      salary: "EUR 2,400/month",
      duration: "Permanent",
      country: "🇳🇱",
      category: "caregiving",
      benefits: ["EU Residence", "Dutch Language Course", "Full Benefits"]
    },
    
    // UK Jobs
    {
      id: 20,
      title: "Farm Worker",
      company: "British Agriculture Co",
      location: "Yorkshire, UK",
      salary: "GBP 10.50/hour",
      duration: "Seasonal (6 months)",
      country: "🇬🇧",
      category: "agriculture",
      benefits: ["Visa Sponsorship", "Accommodation", "Transport"]
    },
    {
      id: 21,
      title: "Care Assistant",
      company: "UK Elder Care",
      location: "London, UK",
      salary: "GBP 11/hour",
      duration: "Permanent",
      country: "🇬🇧",
      category: "caregiving",
      benefits: ["NHS Benefits", "Training Provided", "Career Progression"]
    },
    {
      id: 22,
      title: "Warehouse Operative",
      company: "British Logistics",
      location: "Manchester, UK",
      salary: "GBP 10/hour",
      duration: "12-Month Contract",
      country: "🇬🇧",
      category: "warehouse",
      benefits: ["Overtime Available", "Health Benefits", "Training"]
    },
    
    // Australia Jobs
    {
      id: 23,
      title: "Fruit Picker",
      company: "Aussie Orchards",
      location: "Queensland, Australia",
      salary: "AUD 25/hour",
      duration: "Seasonal (4 months)",
      country: "🇦🇺",
      category: "agriculture",
      benefits: ["Working Holiday Visa", "Accommodation", "Transport"],
      urgent: true
    },
    {
      id: 24,
      title: "Aged Care Worker",
      company: "Australian Care Services",
      location: "Sydney, Australia",
      salary: "AUD 28/hour",
      duration: "Permanent",
      country: "🇦🇺",
      category: "caregiving",
      benefits: ["Visa Sponsorship", "Superannuation", "Health Insurance"]
    },
    {
      id: 25,
      title: "Construction Laborer",
      company: "Sydney Build Corp",
      location: "Sydney, Australia",
      salary: "AUD 30/hour",
      duration: "18-Month Contract",
      country: "🇦🇺",
      category: "construction",
      benefits: ["Safety Training", "High Wages", "Overtime Available"]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || 
                          (selectedCountry === 'canada' && job.country === '🇨🇦') ||
                          (selectedCountry === 'usa' && job.country === '🇺🇸') ||
                          (selectedCountry === 'kuwait' && job.country === '🇰🇼') ||
                          (selectedCountry === 'uae' && job.country === '🇦🇪') ||
                          (selectedCountry === 'qatar' && job.country === '🇶🇦') ||
                          (selectedCountry === 'netherlands' && job.country === '🇳🇱') ||
                          (selectedCountry === 'uk' && job.country === '🇬🇧') ||
                          (selectedCountry === 'australia' && job.country === '🇦🇺');
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    
    return matchesSearch && matchesCountry && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Opportunities</h1>
          <p className="text-xl text-gray-600">Find your perfect international career opportunity</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All Countries</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="kuwait">Kuwait</option>
              <option value="uae">UAE (Dubai)</option>
              <option value="qatar">Qatar</option>
              <option value="netherlands">Netherlands</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All Categories</option>
              <option value="agriculture">Agriculture & Farming</option>
              <option value="caregiving">Caregiving</option>
              <option value="warehouse">Warehouse</option>
              <option value="hospitality">Hospitality</option>
              <option value="construction">Construction</option>
              <option value="transport">Driving & Transport</option>
            </select>
            <Button className="bg-blue-900 hover:bg-blue-800">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Job Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-xl transition-shadow duration-300 relative">
              {job.urgent && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  URGENT
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{job.country}</span>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                    <div>
                      <div className="text-sm text-gray-600">Salary</div>
                      <div className="font-semibold text-green-600">{job.salary}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold">{job.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Benefits Include:</div>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/job/${job.id}`}
                    className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                  >
                    View Details
                  </Link>
                  <Button
                    asChild
                    className="bg-blue-900 hover:bg-blue-800"
                  >
                    <Link to={`/apply?job=${job.id}`}>Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCountry('all');
                setSelectedCategory('all');
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
