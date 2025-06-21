import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://insidious-round-power.glitch.me/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Failed to fetch from backend:", err);
        setMessage("Backend error ❌");
      });
  }, []);

  return <h1>{message}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

