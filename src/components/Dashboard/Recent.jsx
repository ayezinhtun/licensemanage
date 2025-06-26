import { Activity, Download, Edit, NotebookPen, Plus, RefreshCw } from 'lucide-react'
import React from 'react'
import '../Layout/Sidebar.css'
const activities = [
    {
        id: 1,
        icon: Plus,
        title: 'New License added',
        description: 'Microsoft Office 365 Enterprise E6 license added for Corporate Inftastructure project',
        user: 'Admin User',
        status: 'Created',
        color: '#f0fdf4'
    },
     {
        id: 2,
        icon: RefreshCw,
        title: 'License renewed',
        description: 'Adobe Creative Cloud license renewed for Marketing & Design project',
        user: 'John Manager',
        status: 'Created',
        color: '#eff6ff'
    },
    {
        id: 3,
        icon: Edit,
        title: 'License updated',
        description: 'Slack Pro license details updated - increased user count to 80',
        user: 'Sarah Analyst',
        status: 'Updated',
        color: '#fff7ed'
    },
     {
        id: 4,
        icon: Download,
        title: 'Report export',
        description: 'License report exported to CSV format for Q4 review',
        user: 'Admin User',
        status: 'Exported',
        color: '#faf5ff'
    },

]

const Recent = () => {
  return (
    <div className='container bg-white mt-4 border p-3 rounded-3'>
        <div className='d-flex mb-5 align-items-center justify-content-between'>
             <div className='d-flex align-items-center'>
                <div className='bg-light rounded-3 p-1 me-2'>
                    <Activity/>
                </div>
                <div className="text">
                    <h5 className='m-0'>Recent Activity</h5>
                    <span className='text-muted'>Latest actions and changes</span>
                </div>
            </div>
            <div className='bg-light rounded-3 p-1 px-2'>
                5 activities
            </div>
        </div>

        <div className='container'>
            {activities.map((activity, index) => {
                const Icon = activity.icon;
               return(
                 <div key={index} className='d-flex hover-bg py-2 mb-4 align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <div className='rounded-2 me-2' style={{ backgroundColor: activity.color }}>
                                <Icon/>
                            </div>
                            <div className="text">
                                <p className='m-0 fw-semibold'>{activity.title}</p>
                                <small className='text-muted'>{activity.description}</small> <br />
                                <small style={{ fontSize: '13px' }}>by {activity.user}</small>
                            </div>
                        </div>
                        <div className='rounded-3 p-1 px-2' style={{ backgroundColor: activity.color }}>
                            {activity.status}
                        </div>
                </div>
               )
            })}
           
        </div>
    </div>
  )
}

export default Recent
