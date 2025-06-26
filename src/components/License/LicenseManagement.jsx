import { Binary, Calendar, Delete, DeleteIcon, Download, Edit, Filter, Plus, Search, Trash2 } from 'lucide-react'
import React from 'react'

const licenseData = [
    {
        id: 1,
        product: 'Office 365 Enterprise E3',
        vendor: 'Microsoft',
        code: 'MSO365-E3-2024-001',
        infrastructure: 'Corporate Infrastructure',
        operation: 'Internal Operations',
        department: 'IT Department',
        startDate: 'Jan 01, 2024',
        endEnd: 'Jan 01, 2024',
        price: 15000,
        qty: 75,
        status: 'Expired'
    }
]

const LicenseManagement = () => {
  return (
    <div className='container'>
        <div className="header d-flex align-items-center justify-content-between">
            <h3>License Management</h3>
            <div className="d-flex">
                <button className='btn btn-outline-secondary me-2 d-flex align-items-center'>
                    <Download/>
                    <span>Export</span>
                </button>
                <button className='btn btn-primary d-flex align-items-center'>
                    <Plus/>
                    <span>Add License</span>
                </button>
            </div>
        </div>

        <div className="border rounded-3 mt-4">
                <div className="p-3 border-secondary">
                    <div className="d-flex align-items-center gap-3">
                        <div className="flex-grow-1 position-relative">
                            <Search
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
                            type="search"
                            className="form-control ps-5 py-2"
                            placeholder="Search licenses..."
                            aria-label="Search licenses"
                            
                        />
                        </div>
                        <button type="button" className="btn btn-outline-secondary d-flex align-items-center gap-2">
                        <Filter size={16} />
                        Filters
                        </button>
                    </div>
                </div>


                <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                        <th scope="col" className='text-muted p-3'>LICENSE DEATILS</th>
                        <th scope="col" className='text-muted p-3'>PROJECT & CUSTOMER</th>
                        <th scope="col" className='text-muted p-3'>DATES</th>
                        <th scope="col" className='text-muted p-3'>COST & QUANTITY</th>
                        <th scope="col" className='text-muted p-3'>STATUS</th>
                        <th scope='col' className='text-muted p-3'>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {licenseData.map((data, index) =>{
                            return(
                    <tr key={index}>
                        <td className='p-3'>
                            <p style={{ fontSize: '14px' }} className='text-muted m-0 p-0'>{data.product}</p>
                            <p style={{ fontSize: '13px' }} className='text-muted m-0 p-0'>{data.vendor}</p>
                            <p style={{ fontSize: '12px' }} className='text-muted m-0 p-0'>{data.code}</p>
                        </td>
                        <td className='p-3'>
                             <p style={{ fontSize: '14px' }} className='text-muted m-0 p-0'>{data.infrastructure}</p>
                            <p style={{ fontSize: '13px' }} className='text-muted m-0 p-0'>{data.operation}</p>
                            <p style={{ fontSize: '12px' }} className='text-muted m-0 p-0'>{data.department}</p>
                        </td>
                        <td className='p-3'>
                            <div className="d-flex">
                                <Calendar size={16} className='text-muted me-2'/>
                                <p style={{ fontSize: '14px' }} className='text-muted m-0 p-0'>{data.startDate} <br /> to {data.endEnd}</p>
                            </div>
                            
                        </td>
                        <td className='p-3'>
                            <p style={{ fontSize: '13px' }} className='text-muted m-0 p-0'>$ {data.price}</p>
                            <p style={{ fontSize: '13px' }} className='text-muted m-0 p-0'>Qty: {data.qty}</p>
                        </td>
                        <td className='p-3'>
                            <div className='bg-danger text-white d-flex align-items-center justify-content-center rounded-4'>
                                <span>{data.status}</span>
                            </div>
                        </td>
                        <td className='p-3'>
                            <div className="d-flex align-items-center justify-content-center">
                                     <a href="" className='text-black me-2'>
                                <Edit size={20}/>
                            </a>
                            <a href="" className='text-black'>
                                <Trash2 size={20}/>
                            </a> 
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

export default LicenseManagement
