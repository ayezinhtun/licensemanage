import { BarChart3, Calendar, DollarSign, Download, FileText } from 'lucide-react'
import React from 'react'

const cards = [
    {
        id: 1,
        title: 'Total Licenses',
        number: '5',
        icon: FileText
    },
     {
        id: 2,
        title: 'Total Cost',
        number: '$50,400',
        icon: DollarSign
    },
     {
        id: 3,
        title: 'Vendors',
        number: '5',
        icon: BarChart3
    },
     {
        id: 4,
        title: 'Projects',
        number: '5',
        icon: Calendar
    },
]

const reportData = [
    {
        id: 1,
        product: 'Office 365 Enterprise E3',
        code : 'MSO365-E3-2024-001',
        vendor: 'Microsoft',
        project: 'Corporate Infrastructure',
        endDate: 'Jan01, 2025',
        cost: '15,000',
        status: 'Auto Renew'
    }
]

const Report = () => {
  return (
    <div className='container'>
        <div className="header d-flex align-items-center justify-content-between">
            <h3>Reports</h3>
            <div className="d-flex">
                <button className='btn btn-outline-secondary me-2 d-flex align-items-center'>
                    <FileText/>
                    <span>Export</span>
                </button>
                <button className='btn btn-primary d-flex align-items-center'>
                    <Download/>
                    <span>Add License</span>
                </button>
            </div>
        </div>

        <div className="border rounded-3 bg-white p-3 py-4 mt-4">
            <h5>Filters</h5>
            <div className="row mt-3">
                <div className="col-3">
                    <label htmlFor="" className='mb-2'>Vendor</label>
                    <input type="search" className='form-control' placeholder='Filter by vendor...' />
                </div>
                 <div className="col-3">
                    <label htmlFor="" className='mb-2'>Project</label>
                    <input type="search" className='form-control' placeholder='Filter by project...' />
                </div>
                 <div className="col-3">
                    <label htmlFor="" className='mb-2'>Date From</label>
                    <input type="date" className='form-control' />
                </div>
                 <div className="col-3">
                    <label htmlFor="" className='mb-2'>Date To</label>
                    <input type="date" className='form-control'/>
                </div>
            </div>
        </div>

        <div className="row mt-4">
            {cards.map((card, index) =>{
                const Icon = card.icon;
                return(
            <div key={index} className="col-3">
                <div className="d-flex align-items-center justify-content-between bg-white border rounded-3 p-4">
                    <div className="text">
                        <h6 className='text-muted'>{card.title}</h6>
                        <h6>{card.number}</h6>
                    </div>
                    <div className='rounded-3 d-flex align-items-center justify-content-center p-2' style={{ backgroundColor: '#eff6ff' }}>
                        <Icon className='text-primary'/>
                    </div>
                </div>
            </div>
                )
            })}
            
        </div>

        <div className="border rounded-3 mt-4 pt-4">
                
                <h5 className='ps-3 py-3'>License Details</h5>

                <table className="table table-hover mb-0 ps-3 p-3">
                    <thead>
                        <tr>
                        <th scope="col" className='text-muted p-3'>ITEM</th>
                        <th scope="col" className='text-muted p-3'>VENDOR</th>
                        <th scope="col" className='text-muted p-3'>PROJECT</th>
                        <th scope="col" className='text-muted p-3'>END DATE</th>
                        <th scope="col" className='text-muted p-3'>COST</th>
                        <th scope='col' className='text-muted p-3'>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((data, index) =>{
                            return(
                    <tr key={index}>
                        <td className='p-3'>
                            <p style={{ fontSize: '14px' }} className='text-muted m-0 p-0'>{data.product}</p>
                            <p style={{ fontSize: '13px' }} className='text-muted m-0 p-0'>{data.code}</p>
                        </td>
                        <td className='p-3'>
                             <p style={{ fontSize: '14px' }} className='text-muted m-0 p-0'>{data.vendor}</p>
                        </td>
                        <td className='p-3'>
                            <div className="d-flex">
                                <p style={{ fontSize: '14px' }} className='text-muted m-0 p-0'> {data.project} </p>
                            </div>
                            
                        </td>
                        <td className='p-3'>
                            <p style={{ fontSize: '13px' }} className='text-muted m-0 p-0'>$ {data.endDate} </p>
                        </td>
                        <td className='p-3'>
                            <p style={{ fontSize: '13px' }} className='text-muted m-0 p-0'>$ {data.cost} </p>
                        </td>
                        <td className='p-3'>
                            <div className='bg-danger text-white d-flex align-items-center justify-content-center rounded-4'>
                                <span>{data.status}</span>
                            </div>
                        </td>
                        
                        </tr>
                            )
                        })}
                        
                    </tbody>
                </table>

            
        </div>


    </div>
  )
}

export default Report
