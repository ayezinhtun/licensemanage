import React, { act } from 'react'
import { color, motion } from 'framer-motion';
import SimplePageSwitcher from './Chart';

import {
  FileText,
  AlertTriangle,
  DollarSign,
  Building,
  FolderOpen,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Calculator,
  PlusIcon,
  DownloadIcon,
  UploadIcon,
  RefreshCcw,
  BarChart3,
  Receipt,
  Calendar,
  Bell,
  MessageCircle
} from 'lucide-react';
import Recent from './Recent';

const cards = [
    {
        id: 1, 
        title: 'Total Licenses',
        icon: FileText,
        value: 5,
        description: 'All active Licenses',
        percent: '+12%'
    },
    {
        id: 2, 
        title: 'Expiring Soon',
        icon: AlertTriangle,
        value: 0,
        description: 'Next 30 days',
        percent: 'Normal'
    },
    {
        id: 3, 
        title: 'Annual Cost',
        icon: DollarSign,
        value: '$50,400',
        description: 'Total yearly spend',
        percent: '+8.2%'
    },
    {
        id: 4, 
        title: 'Active Licenses',
        icon: CheckCircle,
        value: 5,
        description: 'Currently active',
        percent: '100%'
    },
     {
        id: 5, 
        title: 'Expired Licenses',
        icon: XCircle,
        value: 5,
        description: 'Need renewal',
        percent: 'Action needed'
    },
     {
        id: 6, 
        title: 'Auto Renewals',
        icon: Clock,
        value: 3,
        description: 'Automated renewals',
        percent: '60%'
    },
     {
        id: 7, 
        title: 'Vendors',
        icon: Calculator,
        value: 5,
        description: 'Unique vendors',
        percent: '+2 this month'
    },
     {
        id: 8, 
        title: 'Projects',
        icon: FolderOpen,
        value: 5,
        description: 'Linked projects',
        percent: '+5 active'
    },
     {
        id: 5, 
        title: 'Customers',
        icon: Users,
        value: 5,
        description: 'Active customers',
        percent: 'Stable'
    },
];

const quickactions = [
    {
        id: 1,
        icon: PlusIcon,
        title: 'Add New License',
        description: 'Quickly add a new license to your inventory',
        color: '#3b82f6',
    },
     {
        id: 2,
        icon: DownloadIcon,
        title: 'Export Report',
        description: 'Download current license data as CSV or PDF',
        color: '#22c55e',
    },
     {
        id: 3,
        icon: UploadIcon,
        title: 'Import Licenses',
        description: 'Bulk import licenses from spreadsheet',
        color: '#8b5cf6',
    },
     {
        id: 4,
        icon: RefreshCcw,
        title: 'Sync Data',
        description: 'Refresh license data from all sources',
        color: '#f97316'
    },
     {
        id: 5,
        icon: AlertTriangle,
        title: 'Check Expires',
        description: 'Review licenses expiring in the next 30 days',
        color: '#ef4444',
    },
     {
        id: 6,
        icon: BarChart3,
        title: 'View Analytics',
        description: 'Quickly add a new license to your inventory',
        color: '#6366f1'
    },
]

const Overview = () => {
  return (
        <div className=''>
            <div className='d-flex algin-items-center justify-content-between'>
                <div className="text">
                    <h2 className='fw-bold'>Good Afternoon, Admin! 👋 </h2>
                    <p>Here's what's happening with your licenses today</p>
                </div>
                <div className='d-flex align-items-center'>
                    <p>Tuesday, June 24, 2025</p>
                </div>
            </div>

            <div className="row mt-4">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return(
                        <div key={index} className="col-lg-4 mb-4">
                   <motion.div
                        whileHover={{
                            y: -2,
                             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        className="card p-3 border-light-subtle"
                        style={{cursor: 'pointer' }}
                        >
                            <div className='d-flex align-items-center justify-content-between'>
                                <span className='fw-semibold text-muted'>{card.title}</span>
                                <div className='p-1 rounded d-flex align-items-center justify-content-center ' style={{ backgroundColor: '#CAE8BD' }}>
                                  
                                    <Icon className='text-primary' size={18}/>
                                </div>
                            </div>
                             <h4 className='my-2'>{card.value}</h4>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <span className='text-muted'>{card.description}</span>
                                    <div className='p-1 rounded d-flex align-items-center justify-content-center ' style={{ backgroundColor: '#CAE8BD' }}>
                                          <TrendingUp className='text-success me-1' size={13}/>
                                        <span className='text-success'>{card.percent}</span>
                                    </div>
                                </div>
                            
                        </motion.div>
                </div>
                    )

                })}

            </div>

            <div className="container bg-white border rounded-2 p-3 py-4 border-light-subtle">
                <h5>Quick Actions</h5>
                <small className='text-muted'>Common tasks and shortcuts</small>
                <div className="row mt-4 d-flex align-items-stretch">
                {quickactions.map((action, index) => {
                const Icon = action.icon
                        return(
                             <div key={index} className="col-lg-4  d-flex mb-4">
                                <div className="d-flex p-3 text-white rounded-3" style={{ backgroundColor: action.color }}>
                                    <Icon className='me-2'/>
                                    <div>
                                        <h4 className='font-semibold fs-6'>{action.title}</h4>
                                        <small>{action.description}</small>
                                    </div>
                                </div>
                            </div>
                        )
                })}
                   
                </div>
            </div>

            <div className='row mt-4'>
                <div className="col-lg-8">
                    <SimplePageSwitcher/>
                    <Recent/>
                </div>
                <div className="col-lg-4">
                    <div className="bg-white border rounded-3 py-4 mb-4">
                        <div className='d-flex align-items-center ps-4 pb-3 border-bottom'>
                            <Calendar className='me-2'/>
                             <h5>Upcoming Expirations</h5>
                        </div>

                        <div className="d-flex align-items-center justify-content-center flex-column py-5">
                            <Calendar/>
                            <h6>No upcoming expirations</h6>
                        </div>
                        
                    </div>
                    <div className="border rounded-3 bg-white">
                        <div className="header d-flex align-items-center justify-content-between p-3 border-bottom">
                            <div className='d-flex align-items-center'>
                                <Bell className='text-primary me-2'/>
                                <h5>Recent Notifications</h5>
                            </div>
                            <div>
                                <span>2 notifications</span>
                            </div>
                        </div>
                        <div className='container mt-3'>
                            <div className="d-flex py-3">
                                 <CheckCircle className='text-success me-2' />
                                <div className="text">
                                    <h6>Welcome to License Manager</h6>
                                    <span>Your license management system is ready to use</span>
                                     <div className="d-flex align-items-center">
                                        <Calendar className='text-muted me-2' size={15}/>
                                        <span className='text-muted'>2 hours ago</span>
                                    </div>
                                </div>  
                               
                            </div>

                             <div className="d-flex py-3">
                                 <MessageCircle className='text-warning me-2' />
                                <div className="text">
                                    <h6>New Comment Added</h6>
                                    <span>Admin added a comment on Microsoft Office 365 license</span>
                                     <div className="d-flex align-items-center">
                                        <Calendar className='text-muted me-2' size={15}/>
                                        <span className='text-muted'>1 day ago</span>
                                    </div>
                                </div>  
                               
                            </div>
                           
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Overview
