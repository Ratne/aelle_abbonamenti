import configuration, {ChangeLanguageInterface} from "../../configuration";

export const setLanguageShared = (lang = 'it') => {
    configuration.configuration.lang = lang;
    //setMomentLocale(lang);
    configuration.events.changeLanguage.map(ev => ev.event && ev.event(lang))
}

export const removeEventLanguageShared = (id: number) => {
    configuration.events.changeLanguage = configuration.events.changeLanguage.filter(ele => ele.id === id)
}

export const addEventLanguageShared = (event: ChangeLanguageInterface) => {
    configuration.events.changeLanguage.push(event);
}
