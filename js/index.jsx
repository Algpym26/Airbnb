import React, { useState } from 'react';
import EducationHub from './EducationHub';
import DisputeResolution from './DisputeResolution';

function App() {
  const [tab, setTab] = useState('education'); // Default tab is set to 'education'

  const handleTabChange = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Airbnb In-App Education Hub & Dispute Resolution</h1>
      </header>
      <nav className="tabs">
        <button onClick={() => handleTabChange('education')}>Education Hub</button>
        <button onClick={() => handleTabChange('dispute')}>Dispute Resolution</button>
      </nav>
      <main className="main-content">
        {tab === 'education' ? <EducationHub /> : <DisputeResolution />}
      </main>
    </div>
  );
}

export default App;

// EducationHub.js - Component for the In-App Education Hub

import React from 'react';
import EducationalContent from './EducationalContent';

function EducationHub() {
  return (
    <div className="education-hub">
      <h2>In-App Education Hub for Sustainable Travel Practices</h2>
      <EducationalContent />
    </div>
  );
}

export default EducationHub;
jsx








// EducationalContent.js - Component to display educational materials

import React from 'react';

function EducationalContent() {
  return (
    <div className="educational-content">
      {/* Display curated educational materials */}
      <h3>Curated Educational Materials</h3>
      <ul>
        <li>Articles</li>
        <li>Guides</li>
        <li>Videos</li>
        <li>Infographics</li>
      </ul>
      {/* Interactive features */}
      <h3>Interactive Features</h3>
      <ul>
        <li>Quizzes</li>
        <li>Polls</li>
        <li>Surveys</li>
        <li>Discussion Forums</li>
        <li>Q&A Sessions</li>
      </ul>
      {/* Multimedia content */}
      <h3>Multimedia Content</h3>
      <ul>
        <li>Videos</li>
        <li>Animations</li>
        <li>Interactive Maps</li>
      </ul>
    </div>
  );
}

export default EducationalContent;





// DisputeResolution.js - Component for Dispute Resolution section

import React from 'react';
import LegalAssistance from './LegalAssistance';

function DisputeResolution() {
  return (
    <div className="dispute-resolution">
      <h2>Dispute Resolution and Legal Assistance</h2>
      <LegalAssistance />
    </div>
  );
}

export default DisputeResolution;
jsx
Copy code
// LegalAssistance.js - Component to display legal assistance information

import React from 'react';

function LegalAssistance() {
  return (
    <div className="legal-assistance">
      {/* Display legal assistance information */}
      <h3>Legal Assistance and Support</h3>
      <ul>
        <li>Legal Experts</li>
        <li>Law Firms</li>
        <li>Resources</li>
        <li>Templates</li>
        <li>Guidelines</li>
      </ul>
      {/* Training and Education */}
      <h3>Training and Education</h3>
      <ul>
        <li>Training Programs</li>
        <li>Webinars</li>
        <li>Workshops</li>
        <li>Online Courses</li>
      </ul>
    </div>
  );
}

export default LegalAssistance;




