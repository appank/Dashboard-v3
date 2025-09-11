
import React from 'react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
    BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const AnalyticsPage = () => {
    const lineChartData = [
        { name: 'Jan', users: 400, sales: 240 },
        { name: 'Feb', users: 300, sales: 139 },
        { name: 'Mar', users: 200, sales: 980 },
        { name: 'Apr', users: 278, sales: 390 },
        { name: 'May', users: 189, sales: 480 },
        { name: 'Jun', users: 239, sales: 380 },
        { name: 'Jul', users: 349, sales: 430 },
    ];

    const barChartData = [
        { name: 'Electronics', sales: 4000 },
        { name: 'Clothing', sales: 3000 },
        { name: 'Books', sales: 2000 },
        { name: 'Home Goods', sales: 2780 },
    ];

    const pieChartData = [
        { name: 'Organic Search', value: 400 },
        { name: 'Direct', value: 300 },
        { name: 'Referral', value: 300 },
        { name: 'Social Media', value: 200 },
    ];
    const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="content-widgets-grid">
            <div className="widget">
                <h3>User Growth & Sales</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                        <XAxis dataKey="name" stroke="var(--secondary-text)"/>
                        <YAxis stroke="var(--secondary-text)"/>
                        <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}/>
                        <Legend />
                        <Line type="monotone" dataKey="users" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="widget">
                <h3>Sales by Category</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)"/>
                        <XAxis dataKey="name" stroke="var(--secondary-text)"/>
                        <YAxis stroke="var(--secondary-text)"/>
                        <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}/>
                        <Legend />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="widget">
                <h3>Traffic Sources</h3>
                 <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                            {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsPage;
