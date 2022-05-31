import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from '@jonraaron/data';
import { useState } from 'react';

let hasBeenInitialized = false;
let initialLanguageSelection: Language;

export const supportedLanguages: Language[] = [
  {
    code: 'en',
    name: 'English',
    country: 'us',
  },
  {
    code: 'es',
    name: 'Español',
    country: 'es',
  },
  {
    code: 'pt',
    name: 'Português',
    country: 'br',
  },
];

export function initI18n(loadPath: string, defaultLanguage: string) {
  if (hasBeenInitialized) {
    throw Error('i18n has already been initialized!');
  }
  initialLanguageSelection =
    initialLanguageSelection ||
    supportedLanguages.find((lang) => lang.code === defaultLanguage) ||
    supportedLanguages[0];

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: defaultLanguage,
      debug: process.env['NODE_ENV'] === 'development',
      backend: { loadPath },

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    })
    .then(() => {
      hasBeenInitialized = true;
    });
}

const newCallback = (languageCode: string) => {
  const currentLanguage =
    supportedLanguages.find((lang) => lang.code === languageCode) ||
    supportedLanguages[0];
  initialLanguageSelection = currentLanguage;
};
i18n.on('languageChanged', newCallback);

export const useI18n = () => {
  const [language, setLanguage] = useState<Language>(
    initialLanguageSelection || supportedLanguages[0]
  );

  function getCurrentLanguage(): Language {
    if (!hasBeenInitialized) {
      throw Error(
        'i18n must first be initialized before getCurrentLanguage can be called!'
      );
    }
    return language;
  }

  function changeLanguage(language: Language) {
    if (!hasBeenInitialized) {
      throw Error(
        'i18n must first be initialized before changeLanguage can be called!'
      );
    }
    setLanguage(language);
    i18n.changeLanguage(language.code);
  }

  function onLanguageChanged(callback: (language: Language) => void) {
    const newCallback = (languageCode: string) => {
      const currentLanguage =
        supportedLanguages.find((lang) => lang.code === languageCode) ||
        supportedLanguages[0];
      callback(currentLanguage);
    };
    i18n.on('languageChanged', newCallback);
  }

  return { getCurrentLanguage, changeLanguage, onLanguageChanged };
};
