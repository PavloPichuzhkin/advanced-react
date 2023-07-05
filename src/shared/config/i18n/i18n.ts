import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

console.log(LanguageDetector)
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'uk', // if detected not default language i18n sent + 1 chunk with it
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    })

export default i18n
