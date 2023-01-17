import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {getDynamicLanguage} from "./utilityI18n";


export const updateI18n = (lang: string, callback: any) => {
  if(i18n.languages.includes(lang)){
    callback()
  } else {
    getDynamicLanguage(lang).then((translation: any) => {
      i18n.addResourceBundle(lang, 'translation', translation)
      callback();
    })
  }
}

export const setI18n = (lang: string, callback: any) => {
  getDynamicLanguage(lang).then((translation: any) => {
    i18n.use(initReactI18next).init({
      resources: {
        [lang]: {
          translation
        }
      },
      fallbackLng: 'it',
      interpolation: {
        escapeValue: false,
      },
    })
    callback && callback();
  })

}


export default i18n
