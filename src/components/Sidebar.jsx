import { useState } from "react";
import {BarChart3, CheckCircle, Activity, Users, Settings, Plus} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  
  const menuItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Tasks', icon: CheckCircle, badge: '2' },
    { name: 'Activity', icon: Activity },
    { name: 'Customers', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  const projects = [
    { name: 'BizConnect', badge: '7' },
    { name: 'Growth Hub' },
    { name: 'Conversion Path' },
    { name: 'Marketing' },
  ];

  const members = [
    { name: 'Sandra Perry', role: 'Sales Lead', avatar: 'SP' },
    { name: 'Antony Cardenias', role: 'Developer', avatar: 'AC' },
    { name: 'Jamal Cornbly', role: 'Designer', avatar: 'JC' },
    { name: 'Cara Carr', role: 'Specialist', avatar: 'CC' },
    { name: 'Iona Rollins', role: 'Manager', avatar: 'IR' },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm ${
              activeItem === item.name
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </div>
            {item.badge && (
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      
      <div className="px-4 py-3 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Projects</h3>
        <div className="space-y-1">
          {projects.map((project) => (
            <button
              key={project.name}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">{project.name}</span>
              </div>
              {project.badge && (
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                  {project.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="px-4 py-3 border-t border-gray-200 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Members</h3>
          <Plus className="w-4 h-4 text-gray-400" />
        </div>
        <div className="space-y-3">
          {members.map((member) => (
            <div key={member.name} className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xs font-medium text-blue-600">{member.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                <div className="text-xs text-gray-500">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;