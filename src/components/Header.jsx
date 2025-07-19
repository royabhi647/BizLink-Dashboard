import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Calendar, CheckCircle, Clock, DollarSign, Users, TrendingUp, Activity, Settings, ArrowRight, ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-lg text-gray-900">BizLink</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search customers..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
          />
        </div>
        <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">
          <span>Sort by</span>
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm">
          <Users className="w-4 h-4" />
          <span>Me</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
          <Plus className="w-4 h-4" />
          <span>Add customer</span>
        </button>
      </div>
    </header>
  );
};

export default Header;