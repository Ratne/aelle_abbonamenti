import {useEffect, useState} from "react";
import {generateTempId} from "../generateTempId";
import {useTranslation} from "react-i18next";
import {addEventLanguageShared, removeEventLanguageShared} from "./setLanguageShared";
import configuration from "../../configuration";

export function useLanguageForShared(){
    const [lang, setLang] = useState(configuration.configuration.lang)
    const [id, setId] = useState<number>(generateTempId())
    const {t}: any = useTranslation();
    useEffect(() => {
        addEventLanguageShared({
            id,
            event: () => setLang(configuration.configuration.lang)
        })
        return () => {
            removeEventLanguageShared(id)
        }
    }, [])

    return {
        lang,
        t
    }
}
