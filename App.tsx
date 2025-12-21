
import React, { useState } from 'react';
import LandingPage from './pages/LandingPage.tsx';
import ThankYouPage from './pages/ThankYouPage.tsx';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {!isSubmitted ? (
        <LandingPage onFormSubmit={handleFormSubmit} />
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
};

export default App;
