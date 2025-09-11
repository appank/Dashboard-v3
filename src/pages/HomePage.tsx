import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarIcon, UsersIcon, TrendingUpIcon, PercentIcon } from '../components/AnimatedIcons';

const dataOverviewData = [
    { name: 'Mon', value: 220 },
    { name: 'Tue', value: 180 },
    { name: 'Wed', value: 320 },
    { name: 'Thu', value: 250 },
    { name: 'Fri', value: 410 },
    { name: 'Sat', value: 300 },
    { name: 'Sun', value: 450 },
];

const HomePage = () => (
  <>
    <div className="content-cards">
      <div className="card">
        <div className="card-header">
          <h3>Sales</h3>
          <DollarIcon className="card-icon" />
        </div>
        <p>$15,024</p>
      </div>
      <div className="card">
        <div className="card-header">
          <h3>Users</h3>
          <UsersIcon className="card-icon" />
        </div>
        <p>1,204</p>
      </div>
      <div className="card">
        <div className="card-header">
          <h3>Performance</h3>
          <TrendingUpIcon className="card-icon" />
        </div>
        <p>+12%</p>
      </div>
        <div className="card">
        <div className="card-header">
          <h3>Conversion</h3>
          <PercentIcon className="card-icon" />
        </div>
        <p>5.7%</p>
      </div>
    </div>
    <div className="content-widgets">
        <div className="widget">
            <h3>Data Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dataOverviewData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                    <XAxis dataKey="name" stroke="var(--secondary-text)"/>
                    <YAxis stroke="var(--secondary-text)"/>
                    <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}/>
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" name="Page Views" />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="widget">
            <h3>Recent Transactions</h3>
            <table className="data-table">
                <thead>
                    <tr><th>ID</th><th>Date</th><th>Amount</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>2025-09-01</td><td>$250.00</td><td>Completed</td></tr>
                    <tr><td>2</td><td>2025-09-01</td><td>$120.50</td><td>Pending</td></tr>
                    <tr><td>3</td><td>2025-08-31</td><td>$3000.00</td><td>Completed</td></tr>
                    <tr><td>4</td><td>2025-08-30</td><td>$450.00</td><td>Cancelled</td></tr>
                </tbody>
            </table>
        </div>
    </div>
  </>
);

export default HomePage;