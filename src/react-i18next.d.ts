import 'react-i18next';
import en from './translations/ru.json'

declare module 'react-i18next' {
    interface CustomTypeOptions  {
        resources: typeof en;
    }
}