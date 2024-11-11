import React, { useContext } from 'react';
import { AppContext } from "../store/appContext";
import "../styles/language-selector.css";

export const LanguageToggler = () => {
  const { store, actions } = useContext(AppContext);

  const handleToggle = () => {
    actions.changeLanguage(store.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="toggle-wrapper">
      <label className='switch'>
        <input 
        type='checkbox' 
        onChange={handleToggle} 
        checked={store.language === 'es'} />
        <div className="indicator left"></div>
        <div className="indicator right"></div>
        <div className="button"></div>
      </label>
    </div>
  );
};
