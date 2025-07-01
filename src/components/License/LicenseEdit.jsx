import React, { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';

const LicenseEditModal = ({ license, onUpdate }) => {
  const [formData, setFormData] = useState({
    company: '',
    vendor: '',
    item: '',
    serial_number: '',
    project_name: '',
    customer_name: '',
    business_unit: '',
    user_name: '',
    license_start_date: '',
    license_end_date: '',
    license_cost: '',
    quantity: '',
    item_description: '',
    remark: '',
    support_level: '',
    region: '',
    department: '',
    priority: '',
    contact_person: '',
    auto_renew: false
  });

  useEffect(() => {
    if (license) {
      // Format dates to YYYY-MM-DD if necessary
      setFormData({
        ...license,
        license_start_date: license.license_start_date ? license.license_start_date.substring(0, 10) : '',
        license_end_date: license.license_end_date ? license.license_end_date.substring(0, 10) : '',
        auto_renew: !!license.auto_renew,
      });
    }
  }, [license]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!license?.id) return;

    // Remove id from formData before update (optional)
    const { id, ...dataToUpdate } = formData;

    const { error } = await supabase
      .from('Licenses')
      .update(dataToUpdate)
      .eq('id', license.id);

    if (error) {
      alert('Update failed: ' + error.message);
    } else {
      alert('License updated successfully!');
      onUpdate(); // Refresh data in parent

      // Close modal using bootstrap's JS API
      const modalElement = document.getElementById('editLicenseModal');
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) modalInstance.hide();
    }
  };

  return (
    <div
      className="modal fade"
      id="editLicenseModal"
      tabIndex="-1"
      aria-labelledby="editLicenseModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        style={{ maxWidth: '700px', width: '100%' }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editLicenseModalLabel">
              Edit License
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body pt-4">
            <form onSubmit={handleSubmit}>
              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>Company <span style={{ color: 'red' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-50">
                  <label>Vendor <span style={{ color: 'red' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="vendor"
                    value={formData.vendor}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>Item *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="item"
                    value={formData.item}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-50 pe-3">
                  <label>Serial Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="serial_number"
                    value={formData.serial_number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>Project Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="project_name"
                    value={formData.project_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-50 pe-3">
                  <label>Customer Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>Business Unit *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="business_unit"
                    value={formData.business_unit}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-50 pe-3">
                  <label>User Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>License Start Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    name="license_start_date"
                    value={formData.license_start_date}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-50 pe-3">
                  <label>License End Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    name="license_end_date"
                    value={formData.license_end_date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>License Cost *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="license_cost"
                    value={formData.license_cost}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-50 pe-3">
                  <label>Quantity *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-100">
                  <label>Item Description</label>
                  <textarea
                    className="form-control"
                    name="item_description"
                    value={formData.item_description}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-100">
                  <label>Remark</label>
                  <textarea
                    className="form-control"
                    name="remark"
                    value={formData.remark}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>
              </div>

              <h5>Custom Fields</h5>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>Support Level</label>
                  <input
                    type="text"
                    className="form-control"
                    name="support_level"
                    value={formData.support_level}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-50 pe-3">
                  <label>Region</label>
                  <input
                    type="text"
                    className="form-control"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-50 pe-3">
                  <label>Department</label>
                  <input
                    type="text"
                    className="form-control"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-50 pe-3">
                  <label>Priority</label>
                  <input
                    type="text"
                    className="form-control"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group d-flex align-items-start justify-content-between mb-4">
                <div className="w-100">
                  <label>Contact Person</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact_person"
                    value={formData.contact_person}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  id="autoRenew"
                  name="auto_renew"
                  className="form-check-input"
                  checked={formData.auto_renew}
                  onChange={handleChange}
                />
                <label htmlFor="autoRenew" className="form-check-label">
                  Enable Auto Renew
                </label>
              </div>

              <div className="modal-footer p-0 mt-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary ms-2">
                  Update License
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseEditModal;
