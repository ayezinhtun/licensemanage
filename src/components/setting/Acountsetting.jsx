import { color } from 'framer-motion';
import { col, title } from 'framer-motion/client';
import { Bell, ShieldCheck, User, Lock, Icon, Mail } from 'lucide-react';
import React, { useState } from 'react';

const tabs = [
  { key: 'profile', label: 'Profile', Icon: User },
  { key: 'security', label: 'Security', Icon: Lock },
  { key: 'notifications', label: 'Notifications', Icon: Bell },
  { key: 'privacy', label: 'Privacy', Icon: ShieldCheck },
];

const Preferences = [
    {
        id: 1,
        title: 'Email Notifications',
        description: 'Receive email notifications for important updates'
    },
    {
        id: 2,
        title: 'License Expiry Alerts',
        description: 'Get notified when licenses are about to expire'
    },
    {
        id: 3,
        title: 'Weekly Reports',
        description: 'Receive weekly summary reports via email'
    }

]

const Privacies = [
    {
        id: 1, 
        title: 'Data Protection',
        color: 'bg-primary bg-opacity-10',
        description: 'Your data is secured with industry-standard encryption and is only used for license management purposes. 1Cloud Technology complies with all relevant data protection regulations.'
    },
    {
        id: 2, 
        title: 'Activity Logging',
        color: 'bg-success bg-opacity-10',
        description: 'All license management activities are logged for adult purposes. These logs help maintain security and compliance.'
    },
    {
        id: 3, 
        title: 'Data Rentention',
        color: 'bg-danger bg-opacity-10',
        description: "License data is retained according to your organization's data retention policy. Contact your administrator for more information."
    },
]

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
     <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3">Account Settings</h1>
            <img
            src="https://1cloudtechnology.com/assets/onecloudlogo.png"
            alt="1Cloud Technology"
            style={{ height: '40px' }}
            />
        </div>
        
    <div className="container bg-white border rounded-3 px-0">
      {/* Tab Buttons */}
      <ul className="nav nav-tabs px-0 pt-0 border-0 border-bottom">
        {tabs.map((tab, index) =>{
            const Icon = tab.Icon;
            return(
                 <li key={index} className="nav-item m-0">
                    <button
                        className={`nav-link py-3 border-0 ${
                        activeTab === tab.key ? 'active bg-primary bg-opacity-50 text-white' : ''
                        }`}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        <div className="d-flex align-items-center text-black">
                        <Icon size={16} className="me-2" />
                        {tab.label}
                        </div>
                    </button>
                </li>
            )
        })}
      </ul>

      {/* Tab Content */}
      <div className="mt-4 p-3">
        {activeTab === 'profile' && (
          <div className='container' >
            <h5 className='mb-3'>Profile Information</h5>
            <div className="row mb-3">
                <div className="col-6">
                    <label htmlFor="" className='mb-2'>Full Name</label>
                      <div className="position-relative">
                            <User
                                size={20}
                                style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#6c757d', // muted color
                                pointerEvents: 'none'
                                }}
                            />

                        <input
                            type="text"
                            className="form-control ps-5 py-2"
                            placeholder="Admin User"
                            aria-label="Admin User"
                            
                        />
                        </div>
                </div>
                 <div className="col-6">
                    <label htmlFor="" className='mb-2'>Email Address</label>
                      <div className="position-relative">
                            <Mail
                                size={20}
                                style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#6c757d', // muted color
                                pointerEvents: 'none'
                                }}
                            />

                        <input
                            type="email"
                            className="form-control ps-5 py-2"
                            placeholder="admin@gmail.com"
                            aria-label="email"
                            
                        />
                        </div>
                </div>
            </div>
            <div className="text-end">
                <button className='btn btn-primary'>Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className='container' >
            <div className="border-bottom pb-5">
                <h5 className='mb-3'>Change Password</h5>
            <div className="row mb-3">
                <div className="col-6">
                    <div className=" mb-3">
                    <label htmlFor="" className='mb-2'>Current Password</label>
                      <div className="position-relative">
                            <Lock
                                size={20}
                                style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#6c757d', // muted color
                                pointerEvents: 'none'
                                }}
                            />

                        <input
                            type="password"
                            className="form-control ps-5 py-2"
                            placeholder=""
                            aria-label=""
                            
                        />
                        </div>
                    </div>
                     <div className="mb-3">
                    <label htmlFor="" className='mb-2'>New Password</label>
                      <div className="position-relative">
                            <Lock
                                size={20}
                                style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#6c757d', // muted color
                                pointerEvents: 'none'
                                }}
                            />

                        <input
                            type="password"
                            className="form-control ps-5 py-2"
                            placeholder=""
                            aria-label=""
                            
                        />
                        </div>
                     </div>
                        <div className="mb-3">
                    <label htmlFor="" className='mb-2'>Confirm New Password</label>
                      <div className="position-relative">
                            <Lock
                                size={20}
                                style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#6c757d', // muted color
                                pointerEvents: 'none'
                                }}
                            />

                        <input
                            type="password"
                            className="form-control ps-5 py-2"
                            placeholder=""
                            aria-label=""
                            
                        />
                        </div>
                     </div>
                </div>
                
                
            </div>
            <div className="text-end">
                <button className='btn btn-primary'>Save Changes</button>
            </div>
            </div>

            <div className="footer">
                <h5 className='mt-3'>Two-Factor Authentiation</h5>
                <div className="d-flex align-items-center justify-content-between p-3 bg-primary bg-opacity-10 rounded-2">
                    <div className="text">
                        <h6>Enable 2FA</h6>
                        <span>Add an extra layer of security to your account</span>
                    </div>
                    <input type="checkbox" />
                </div>
            </div>
            
          </div>
        )}

        {activeTab === 'notifications' && (
           <div className="container">
                <h5 className='mb-3'>Notification Perferences</h5>
                 {Preferences.map((preference, index) => {
                    return(
                         <div key={index} className="d-flex align-items-center justify-content-between p-3 mb-3 bg-secondary bg-opacity-10 rounded-2">
                            <div className="text">
                                <h6>{preference.title}</h6>
                                <span>{preference.description}</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                    )
                 })}
                <div className="text-end">
                    <button className='btn btn-primary'>Save Preference</button>
                 </div>
            </div>
        )}

         {activeTab === 'privacy' && (
             <div className="container">
                <h5 className='mb-3'>Privacy Settings</h5>
                 {Privacies.map((privacy, index) => {
                    return(
                         <div key={index} className={`d-flex align-items-center justify-content-between p-3 mb-3 rounded-2 ${privacy.color}`}>
                            <div className="text">
                                <h6>{privacy.title}</h6>
                                <span>{privacy.description}</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                    )
                 })}
            </div>
        )}
      </div>
    </div>

     </div>
  );
};

export default AccountSettings;
