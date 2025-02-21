 import React, { useState } from 'react';
 import './ThemeSwitcherCard.css';
 
 const ThemeSwitcherCard = () => {
   const [theme, setTheme] = useState('light');
 
   const toggleTheme = () => {
     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
   };
 
   return (
     <div className={`brand-card ${theme}`}>
       <h4>RabbitWiz</h4>
       <p>Consistent across themes</p>
       <button onClick={toggleTheme}>Toggle Theme</button>
     </div>
   );
 };
 
 export default ThemeSwitcherCard;