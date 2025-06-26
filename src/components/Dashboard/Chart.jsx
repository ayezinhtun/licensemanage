import { TrendingUp, BarChart3, PieChart as PieChartIcon, Component } from 'lucide-react';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#6366F1', '#F59E0B', '#10B981', '#EF4444', '#3B82F6'];
const costData = [
  { month: 'Jan', cost: 4000 },
  { month: 'Feb', cost: 3000 },
  { month: 'Mar', cost: 5000 },
  { month: 'Apr', cost: 4500 },
  { month: 'May', cost: 6000 },
  { month: 'Jun', cost: 7000 },
  { month: 'July', cost: 8000 },

];

const expiryData = [
  {month: 'Jan', license: 4},
  {month: 'Feb', license: 5},
  {month: 'Mar', license: 6},
  {month: 'Apr', license: 7},
  {month: 'May', license: 8}
];

const vendorData = [
  { vendor: 'Microsoft', value: 20, totalCost: 5000 },
  { vendor: 'Adobe', value: 10, totalCost: 2500 },
  { vendor: 'Autodesk', value: 5, totalCost: 1500 },
];

const pages = {
  cost: {
    title: 'Cost Trends',
    subtitle: 'Monthly license costs over time',
    icon: TrendingUp,
    component: (
    <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={costData}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip
              contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
               formatter={(value) => [`$${value.toLocaleString()}`, 'Cost']}
             />
            <Line type="monotone"
              dataKey="cost"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
  ),

  },
  expiry: {
    title: 'Expiry Trends',
    subtitle: 'Licenses expiring by month',
    icon: BarChart3,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={expiryData}
        >
         <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#6b7280" fontSize={12}/>
          <YAxis stroke="#6b7280" fontSize={12} domain={[0, 15]} tickCount={6}/>
          <Tooltip
          contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
          formatter={(value) => [`${value} licenses`, 'Expiring']}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="license" fill="#F59E0B" radius={[4, 4, 0, 0]}  />
        </BarChart>
      </ResponsiveContainer>
    )
  },

  vendor: {
    title: 'Vendor Distribution',
    subtitle: 'License distribution by vendor',
    icon: PieChartIcon,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={vendorData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({vendor, percent}) => `${vendor} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {vendorData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
           <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name, props) => [
                `${value} licenses ($${props.payload.totalCost.toLocaleString()})`,
                props.payload.vendor
              ]}
            />
        </PieChart>
      </ResponsiveContainer>
    )
  },
};

export default function SimplePageSwitcher() {
  const [page, setPage] = useState('cost');
  const { title, subtitle, icon: Icon , component} = pages[page];

  return (
    <div className="container p-3 border rounded-2 bg-white">
      <div className="header d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center">
          <div
            className="rounded-2 d-flex align-items-center justify-content-center me-2"
            style={{ backgroundColor: '#eff6ff', width: '40px', height: '40px' }}
          >
            <Icon className="text-primary" />
          </div>
          <div className="text">
            <h5 className="m-0">{title}</h5>
            <span className="text-muted fs-6">{subtitle}</span>
          </div>
        </div>

        <div className="right d-flex gap-2">
        {Object.keys(pages).map((key) => (
            <button
            key={key}
            className={`btn ${page === key ? 'btn-primary' : 'border-light-subtle'}`}
            onClick={() => setPage(key)}
            disabled={false} // just an example, add logic as needed
            >
            {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
        ))}
        </div>
      </div>

      <div className="container mt-4">
        {component}
      </div>
    </div>
  );
}
