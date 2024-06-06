import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

const options = {
    order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    lookupLocalStorage: 'lng'
}


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    debug: 'true',
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en']
});

export default i18n