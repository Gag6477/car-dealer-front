import i18next from "i18next"
import {initReactI18next} from "../node_modules/react-i18next"
import en from "./locales/en/translation.json"
import am from "./locales/am/translation.json"
import ru from "./locales/ru/translation.json"


i18next.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        am: {translation: am},
        ru: {translation: ru},
    },
    lng: "en",
    fallbacklng: "en",
    interpolation: {escapeValue: false}
})

export default i18next