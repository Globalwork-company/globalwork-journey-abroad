
import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">GlobalWork Pass</h1>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Jobs
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Success Stories
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-blue-900 border-blue-900">
              Sign In
            </Button>
            <Button className="bg-blue-900 hover:bg-blue-800">
              Apply Now
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
