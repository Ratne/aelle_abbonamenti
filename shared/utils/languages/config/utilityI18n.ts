import {initI18n} from "./localTranslate";

export const formatToI18n: any = (obj: any) => {
    return Object.keys(obj).reduce((acc, ele) => {
        return {
            ...acc,
            [ele]: typeof obj[ele] === 'string'? obj[ele].replace(/\{([0-9])}/g, "{{$1}}") :formatToI18n(obj[ele])
        }
    }, {})
}

export const getDynamicLanguage = (lang: string) => {
    return new Promise((resolve ) => {
        if(process.env.REACT_APP_LANGUAGE_URL){
            var scriptLang = document.createElement('script');
            scriptLang.setAttribute('src', process.env.REACT_APP_LANGUAGE_URL.replace('{{lang}}', lang));
            document.head.appendChild(scriptLang);
            const callback = () => {
                const translation = {...(initI18n[lang] || {}), ...formatToI18n(JSON.parse((window as any).js_resources))};
                resolve(translation)
            }
            scriptLang.onload = callback;
        } else {
            resolve(initI18n[lang] || {})
        }

    } )
}
