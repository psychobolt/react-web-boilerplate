import { messages as headerMessages } from './Header';
import { messages as todoListMessages } from './TodoList';

export default {
  en: {
    ...headerMessages.en,
    ...todoListMessages.en,
  },
  'zh-TW': {
    ...headerMessages['zh-TW'],
    ...todoListMessages['zh-TW'],
  },
};
