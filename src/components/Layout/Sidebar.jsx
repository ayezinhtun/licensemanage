import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Bell,
  LogOut,
  ChevronLeft,
 ChevronRight,
 Activity,
 Settings,
 Zap,
 Shield,
 HelpCircle
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

    const quickActions = [
    { action: 'report', label: 'Generate Report', icon: Zap },
    { action: 'export', label: 'Export Data', icon: Shield },
    { action: 'settings', label: 'Settings', icon: HelpCircle },
  ];


  
  const handleQuickAction = (action) => {
    switch (action) {
       case 'add-license':
        // Navigate to add license
        break;
      case 'security-check':
        // Run security check
        break;
      case 'help':
        // Open help
        break;
    }
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { label: 'License Manager', icon: <FileText size={20} />, path: '/licenses' },
    { label: 'Reports & Analytics', icon: <BarChart3 size={20} />, path: '/reports' },
    {label: 'Notifications', icon: <Bell size={20} />, path: '/notifications'},
    {label: 'Audit Logs', icon: <Activity size={20} />, path: '/'},
    {label: 'Account Settings', icon: <Settings size={20} />, path: '/setting'},
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-width vh-100 pt-3 d-flex flex-column`}
        style={{
          width: collapsed ? '80px' : '300px',
          transition: 'width 0.3s ease',
          overflowY: 'auto',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'  
        }}
      >
        {/* Header */}
        <div className='border-bottom px-3'>
             <div className="d-flex justify-content-between align-items-center mb-3">
          {!collapsed && 
            <div className="d-flex align-items-center">
              <div style={{ width: '100px', height: '50px' }} className='me-2'> 
                  <img className='w-100 objectFit-cover' src="https://i.ibb.co/SX3kDYPr/1cloud-NG-Logo-v2.png" alt="" />
              </div>
              <div className="text">
                 <h5 className="fw-bold">License Manager</h5>
                <small className='text-muted'>1Cloud Technology</small>
              </div>
            </div>
          
          }
          <button
            className="btn btn-sm"
            onClick={toggleSidebar}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
        </div>

        {!collapsed && 
          <div className="d-flex align-items-center border-bottom py-3 px-2">
            <div className="me-2" style={{ width: '50px', height: '50px' }}>
                  <img className='w-100 h-100 rounded-circle objectFit-cover' src="https://i.ibb.co/cK708MyQ/woman-7305088-1280.jpg" alt="" />
            </div>
            <div className="">
              <span className='fw-semibold'>Admin User</span> <br />
              <small className='text-muted fs-sm'>admin@1cloudtechnology.com</small>
            </div>
          </div>
        }
       

        {/* Navigation */}
       <ul className="nav nav-pills flex-column px-3 py-2 border-bottom">
        {menuItems.map((item) => (
          <li key={item.label} className="nav-item hover-bg py-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 text-dark ${
                  isActive ? 'bg-primary text-white' : ''
                }`
              }
            >
              {item.icon}
              {!collapsed && <span className='text-muted fw-semibold'>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>


      {/* Quick Actions */}
     {!collapsed && (
  <div className="p-2 border-bottom">
    <button
      className="text-muted fw-bold btn btn-link w-100 text-start mb-2"
      onClick={() => setShowQuickActions(prev => !prev)}
      aria-expanded={showQuickActions}
      aria-controls="quickActions"
      style={{ textDecoration: 'none' }} // optional, no underline
    >
      Quick Actions
    </button>

    <AnimatePresence initial={false}>
      {showQuickActions && (
        <motion.div
          id="quickActions"
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="d-flex flex-column"
        >
          {quickActions.map((action) => (
            <button
              key={action.action}
              className="hover-bg w-100 text-start text-muted mb-2 d-flex align-items-center py-2" style={{ border: 'none', backgroundColor: 'white' }} 
              onClick={() => handleQuickAction(action.action)}
            >
              <action.icon size={16} className="me-2" />
              {action.label}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)}

        {/* Footer */}
        <div className="mt-auto">
          <button className="btn btn-outline-danger w-100 d-flex align-items-center gap-2">
            <LogOut size={18} />
            {!collapsed && 'Sign Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
