
import React, { useState } from 'react';

const SettingsPage = () => {
    const [profile, setProfile] = useState({ username: 'AdminUser', email: 'admin@example.com' });
    const [notifications, setNotifications] = useState({ email: true, push: false });
    const [theme, setTheme] = useState('dark');

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNotifications({ ...notifications, [e.target.name]: e.target.checked });
    };

    return (
        <div className="settings-form">
            <div className="widget">
                <h3>Profile Settings</h3>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={profile.username} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={profile.email} onChange={handleProfileChange} />
                </div>
            </div>
            <div className="widget">
                <h3>Notification Settings</h3>
                <div className="form-group-checkbox">
                    <input type="checkbox" id="email-notifications" name="email" checked={notifications.email} onChange={handleNotificationChange} />
                    <label htmlFor="email-notifications">Email Notifications</label>
                </div>
                 <div className="form-group-checkbox">
                    <input type="checkbox" id="push-notifications" name="push" checked={notifications.push} onChange={handleNotificationChange} />
                    <label htmlFor="push-notifications">Push Notifications</label>
                </div>
            </div>
             <div className="widget">
                <h3>Theme</h3>
                <div className="form-group-radio">
                    <input type="radio" id="dark-theme" name="theme" value="dark" checked={theme === 'dark'} onChange={(e) => setTheme(e.target.value)} />
                    <label htmlFor="dark-theme">Dark Mode</label>
                </div>
                 <div className="form-group-radio">
                    <input type="radio" id="light-theme" name="theme" value="light" checked={theme === 'light'} onChange={(e) => setTheme(e.target.value)} />
                    <label htmlFor="light-theme">Light Mode</label>
                </div>
            </div>
            <div className="form-actions">
                <button className="save-btn">Save Settings</button>
            </div>
        </div>
    );
};

export default SettingsPage;
