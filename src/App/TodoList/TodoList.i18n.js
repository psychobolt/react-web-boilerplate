import { messages as filterMessages } from './Filter';
import { messages as formMessages } from './Form';

export default {
  en: {
    ...filterMessages.en,
    ...formMessages.en,
  },
  'zh-TW': {
    ...filterMessages['zh-TW'],
    ...formMessages['zh-TW']
  }
};