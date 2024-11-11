import React, { useState } from 'react';
import "../styles/language-selector.css";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'rus', name: 'Русский' },
  { code: 'deu', name: 'Deutsch' }
];

const translations = {
  'en': {
    'header': 'Spring',
    'paragraf': 'Hello',
    'lang-choice': 'Choose your language:'
  },
  'deu': {
    'header': 'Frühling',
    'paragraf': 'Hallo',
    'lang-choice': 'Wählen Sie Ihre Sprache:'
  },
  'rus': {
    'header': 'Весна',
    'paragraf': 'Привет',
    'lang-choice': 'Выберите ваш язык:'
  }
};

const getTranslation = (lang, text) => translations[lang][text];

const LanguageSelector = ({ lang, handleChangeLanguage }) => {
  const onChange = (e) => {
    handleChangeLanguage(e.target.className);
  };

  return (
    <div className="lang">
      <div className={lang}></div>
      <ul className="dropdown">
        {languages
          .filter((language) => language.code !== lang)
          .map((language) => (
            <li key={language.code} onClick={onChange}>
              <div value={language.code} className={language.code}></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

const LanguageSwitcher = () => {
  const [lang, setLang] = useState('en');

  const changeLanguageHandler = (newLang) => {
    setLang(newLang);
  };

  return (
    <div className="languageSwitcher">
      <p>{getTranslation(lang, 'paragraf')}</p>
      <h2>{getTranslation(lang, 'header')}</h2>
      <p className="small">{getTranslation(lang, 'lang-choice')}</p>
      <LanguageSelector lang={lang} handleChangeLanguage={changeLanguageHandler} />
    </div>
  );
};

export default LanguageSwitcher;
