import { Bell, Check, CheckCircle, MessageSquare, Trash2 } from 'lucide-react'
import React from 'react'
import '../Layout/Sidebar.css'
import { title } from 'framer-motion/client'

const notifications = [
    {
        id: 1,
        icon: CheckCircle,
        title: 'Welcome to License Manager',
        description: 'Your license management system has been successfully set up. You can now start managing your licenses efficiently.',
        time: '2 hours ago',
    },
    {
        id: 2,
        icon: MessageSquare,
        title: 'New Comment Added',
        description: 'Admin user added a comment on Microsoft Office 365 license regarding renewal process.',
        time: '1 day ago'
    }
]

const settings = [
    {
        id: 1,
        title: 'License Expiry Alerts',
        description: 'Get notified when licenses are about to expire'
    },
    {
        id: 2, 
        title: 'Comment Notifications',
        description: 'Get notified when someone comments on licenses'
    },
    {
        id: 3, 
        title: 'Renewal Confirmations',
        description: 'Get notified when licenses are renewed'
    },
    
]

const Notification = () => {
  return (
    <div className='container'>
      <div className="d-flex align-items-center justify-content-between">
        <div className="text">
            <h3>Notifications</h3>
            <span>1 unread notifications</span>
        </div>
        <button className='btn btn-outline-secondary'>
            Mark All as Read
        </button>
      </div>

      <div className="border rounded-3 bg-white pt-4 mt-4">
         <div className="header d-flex align-items-center justify-content-between border-bottom px-3 pb-3">
            <div className="text d-flex align-items-center">
                <Bell className='text-primary me-2'/>
                <h6>All Notifications</h6>
            </div>
            <span>3 notifications</span>
         </div>
         {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return(
                    <div key={index} className="container d-flex justify-content-between p-3 hover-bg">
                        <div className="left d-flex">
                            <div className="bg-success bg-opacity-10 me-2 d-flex align-items-center justify-content-center rounded-1" style={{ width: '30px', height: '30px' }}>
                                <Icon className='text-success'/>
                            </div>
                            <div className="text">
                                <h6>{notification.title}</h6>
                                <span className='text-muted'> {notification.description} </span> <br />
                                <span className='text-muted'>{notification.time}</span>
                            </div>
                        </div>
                        <div className="right">
                            <Trash2 className='text-muted' size={16}/>
                        </div>
                    </div>
            )
         })}

      </div>

      <div className="border rounded-3 bg-white pt-4 mt-4">
         <div className="header d-flex align-items-center justify-content-between border-bottom px-3 pb-3">
            <div className="text d-flex align-items-center">
                <h6>Notification Settings</h6>
            </div>
         </div>
         {settings.map((setting, index) => {
        
            return(
                    <div key={index} className="container d-flex justify-content-between p-3 hover-bg">
                        <div className="left d-flex">
                            
                            <div className="text">
                                <h6>{setting.title}</h6>
                                <span className='text-muted'> {setting.description} </span> <br />
                            </div>
                        </div>
                        <div className="right">
                            <Check className='text-muted' size={16}/>
                        </div>
                    </div>
            )
         })}

      </div>
    </div>
  )
}

export default Notification
