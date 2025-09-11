
import React from 'react';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="widget">
    <h2>{title}</h2>
    <p>This is a placeholder page for the {title} section.</p>
  </div>
);

export default PlaceholderPage;
