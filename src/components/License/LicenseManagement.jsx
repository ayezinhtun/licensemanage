import {
  Calendar,
  Download,
  Edit,
  Filter,
  Plus,
  Search,
  Trash2
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import LicenseModel from './LicenseModel';
import LicenseEditModal from './LicenseEdit';
import supabase from '../../supabaseClient';

const LicenseManagement = () => {
  const [licenseData, setLicenseData] = useState([]);
  const [selectedLicense, setSelectedLicense] = useState(null);

  // Fetch licenses
  const fetchData = async () => {
    const { data, error } = await supabase.from('Licenses').select('*');
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setLicenseData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete license
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this license?')) return;

    const { error } = await supabase.from('Licenses').delete().eq('id', id);
    if (error) {
      alert('Failed to delete license: ' + error.message);
    } else {
      alert('License deleted successfully!');
      setLicenseData((prev) => prev.filter((license) => license.id !== id));
    }
  };

  // Open edit modal with selected license
  const handleEdit = (license) => {
    setSelectedLicense(license);
  };

  // Update license in DB and state
  const handleUpdate = async (updatedLicense) => {
    const { error } = await supabase
      .from('Licenses')
      .update(updatedLicense)
      .eq('id', updatedLicense.id);

    if (error) {
      alert('Update failed: ' + error.message);
      return;
    }

    setLicenseData((prev) =>
      prev.map((license) =>
        license.id === updatedLicense.id ? updatedLicense : license
      )
    );

    setSelectedLicense(null); // Close modal
  };

  return (
    <div className="container">
      <div className="header d-flex align-items-center justify-content-between">
        <h3>License Management</h3>
        <div className="d-flex">
          <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
            <Download />
            <span className="ms-1">Export</span>
          </button>
          <button
            className="btn btn-primary d-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#addlicenseModal"
          >
            <Plus />
            <span className="ms-1">Add License</span>
          </button>
          <LicenseModel />
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
                  color: '#6c757d',
                  pointerEvents: 'none'
                }}
              />
              <input
                type="search"
                className="form-control ps-5 py-2"
                placeholder="Search licenses..."
              />
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
            >
              <Filter size={16} />
              Filters
            </button>
          </div>
        </div>

        <table className="table table-hover mb-0">
          <thead>
            <tr>
              <th className="text-muted p-3">LICENSE DETAILS</th>
              <th className="text-muted p-3">PROJECT & CUSTOMER</th>
              <th className="text-muted p-3">DATES</th>
              <th className="text-muted p-3">COST & QUANTITY</th>
              <th className="text-muted p-3">STATUS</th>
              <th className="text-muted p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {licenseData.map((data) => {
              const isExpired =
                data.license_end_date && new Date(data.license_end_date) < new Date();

              return (
                <tr key={data.id}>
                  <td className="p-3">
                    <p className="text-muted m-0 p-0">{data.item}</p>
                    <p className="text-muted m-0 p-0">{data.vendor}</p>
                    <p className="text-muted m-0 p-0">{data.serial_number}</p>
                  </td>
                  <td className="p-3">
                    <p className="text-muted m-0 p-0">{data.project_name}</p>
                    <p className="text-muted m-0 p-0">{data.customer_name}</p>
                    <p className="text-muted m-0 p-0">{data.department}</p>
                  </td>
                  <td className="p-3">
                    <div className="d-flex">
                      <Calendar size={16} className="text-muted me-2" />
                      <p className="text-muted m-0 p-0">
                        {data.license_start_date || '-'} <br /> to{' '}
                        {data.license_end_date || '-'}
                      </p>
                    </div>
                  </td>
                  <td className="p-3">
                    <p className="text-muted m-0 p-0">${data.license_cost ?? '0'}</p>
                    <p className="text-muted m-0 p-0">Qty: {data.quantity ?? '0'}</p>
                  </td>
                  <td className="p-3">
                    <div
                      className={`${
                        isExpired ? 'bg-danger' : 'bg-success'
                      } text-white d-flex align-items-center justify-content-center rounded-4 py-1`}
                    >
                      <span>{isExpired ? 'Expired' : 'Active'}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        href="#"
                        className="text-black me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editLicenseModal"
                        onClick={() => handleEdit(data)}
                      >
                        <Edit size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-black"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(data.id);
                        }}
                      >
                        <Trash2 size={20} />
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <LicenseEditModal
        license={selectedLicense}
        onUpdate={handleUpdate}
        onClose={() => setSelectedLicense(null)}
      />
    </div>
  );
};

export default LicenseManagement;
