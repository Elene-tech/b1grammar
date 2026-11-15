import type { Lang, LocalString } from '@/types/exercise';

export const UI = {
  appName: { ru: 'Тренажёр грамматики', ua: 'Тренажер граматики', en: 'Grammar Trainer' },
  appSub: {
    ru: 'По учебнику Grammarway 2 · British English',
    ua: 'За підручником Grammarway 2 · British English',
    en: 'Based on Grammarway 2 · British English',
  },
  continue: { ru: 'Продолжить', ua: 'Продовжити', en: 'Continue' },
  startLearning: { ru: 'Начать обучение', ua: 'Почати навчання', en: 'Start learning' },
  unitMap: { ru: 'Карта юнитов', ua: 'Карта юнітів', en: 'Unit map' },
  theory: { ru: 'Правило', ua: 'Правило', en: 'Learn' },
  practice: { ru: 'Практика', ua: 'Практика', en: 'Practice' },
  roundup: { ru: 'Повторение', ua: 'Повторення', en: 'Round-up' },
  exam: { ru: 'Экзамен', ua: 'Екзамен', en: 'Exam' },
  profile: { ru: 'Профиль', ua: 'Профіль', en: 'Profile' },
  settings: { ru: 'Настройки', ua: 'Налаштування', en: 'Settings' },
  level: { ru: 'Уровень', ua: 'Рівень', en: 'Level' },
  xp: { ru: 'очков', ua: 'очок', en: 'XP' },
  streak: { ru: 'Дней подряд', ua: 'Днів поспіль', en: 'Day streak' },
  dailyGoal: { ru: 'Цель дня', ua: 'Ціль дня', en: 'Daily goal' },
  dailyGoalDone: {
    ru: 'Цель на сегодня выполнена!',
    ua: 'Ціль на сьогодні виконана!',
    en: 'Daily goal complete!',
  },
  dailyGoalText: {
    ru: 'правильных ответов в день',
    ua: 'правильних відповідей на день',
    en: 'correct answers a day',
  },
  badges: { ru: 'Бейджи', ua: 'Бейджі', en: 'Badges' },
  locked: { ru: 'Заблокировано', ua: 'Заблоковано', en: 'Locked' },
  completed: { ru: 'Пройдено', ua: 'Пройдено', en: 'Completed' },
  inProgress: { ru: 'В процессе', ua: 'У процесі', en: 'In progress' },
  warmup: { ru: 'Разминка', ua: 'Розминка', en: 'Warm-up' },
  core: { ru: 'Основная практика', ua: 'Основна практика', en: 'Core practice' },
  challenge: { ru: 'Вызов', ua: 'Виклик', en: 'Challenge' },
  check: { ru: 'Проверить', ua: 'Перевірити', en: 'Check' },
  next: { ru: 'Дальше', ua: 'Далі', en: 'Next' },
  finish: { ru: 'Завершить', ua: 'Завершити', en: 'Finish' },
  tryAgain: { ru: 'Пройти ещё раз', ua: 'Пройти ще раз', en: 'Try again' },
  backToUnit: { ru: 'К юниту', ua: 'До юніта', en: 'Back to unit' },
  typeAnswer: { ru: 'Впишите ответ…', ua: 'Впишіть відповідь…', en: 'Type your answer…' },
  correct: { ru: 'Правильно!', ua: 'Правильно!', en: 'Correct!' },
  wrong: { ru: 'Пока неверно', ua: 'Поки невірно', en: 'Not quite' },
  why: { ru: 'Почему', ua: 'Чому', en: 'Why' },
  acceptedAnswers: { ru: 'Правильные варианты', ua: 'Правильні варіанти', en: 'Accepted answers' },
  yourResult: { ru: 'Твой результат', ua: 'Твій результат', en: 'Your result' },
  correctCount: { ru: 'правильных', ua: 'правильних', en: 'correct' },
  xpEarned: { ru: 'Заработано очков', ua: 'Зароблено очок', en: 'XP earned' },
  perfectRound: {
    ru: 'Идеальный раунд — без единой ошибки!',
    ua: 'Ідеальний раунд — без жодної помилки!',
    en: 'Perfect round — no mistakes at all!',
  },
  mistakesReview: { ru: 'Разбор ошибок', ua: 'Розбір помилок', en: 'Mistake review' },
  readTheory: { ru: 'Сначала изучи правило', ua: 'Спочатку вивчи правило', en: 'Learn the rule first' },
  unlockHint: {
    ru: 'Заверши предыдущий юнит, чтобы открыть',
    ua: 'Заверши попередній юніт, щоб відкрити',
    en: 'Finish the previous unit to unlock',
  },
  medalBronze: { ru: 'Бронза', ua: 'Бронза', en: 'Bronze' },
  medalSilver: { ru: 'Серебро', ua: 'Срібло', en: 'Silver' },
  medalGold: { ru: 'Золото', ua: 'Золото', en: 'Gold' },
  chooseLang: {
    ru: 'Выбери язык объяснений',
    ua: 'Обери мову пояснень',
    en: 'Choose your explanation language',
  },
  onboarding1: {
    ru: 'Учим грамматику простыми словами — с правилами на твоём языке и сотнями заданий, где нужно вписывать ответ.',
    ua: 'Вчимо граматику простими словами — з правилами твоєю мовою та сотнями завдань, де треба вписувати відповідь.',
    en: 'Learn grammar in simple words — rules in your language and hundreds of exercises where you type real answers.',
  },
  onboarding2: {
    ru: 'Каждую тему закрепляем тремя уровнями: разминка, практика и вызов. Каждые 5 юнитов — большое повторение всего пройденного.',
    ua: 'Кожну тему закріплюємо трьома рівнями: розминка, практика і виклик. Кожні 5 юнітів — велике повторення всього пройденого.',
    en: 'Every topic has three levels: warm-up, core practice and a challenge. Every five units, a big round-up revises everything.',
  },
  onboarding3: {
    ru: 'Зарабатывай очки, открывай медали и бейджи, держи серию дней. Упражнения можно проходить сколько угодно раз!',
    ua: 'Заробляй очки, відкривай медалі та бейджі, тримай серію днів. Вправи можна проходити скільки завгодно разів!',
    en: 'Earn XP, unlock medals and badges, keep your streak. You can redo every exercise as many times as you like!',
  },
  letsGo: { ru: 'Погнали!', ua: 'Погнали!', en: "Let's go!" },
  howItWorks: { ru: 'Как это работает', ua: 'Як це працює', en: 'How it works' },
  progress: { ru: 'Прогресс', ua: 'Прогрес', en: 'Progress' },
  unitsDone: { ru: 'юнитов пройдено', ua: 'юнітів пройдено', en: 'units completed' },
  totalXp: { ru: 'Всего очков', ua: 'Всього очок', en: 'Total XP' },
  answers: { ru: 'ответов', ua: 'відповідей', en: 'answers' },
  accuracy: { ru: 'Точность', ua: 'Точність', en: 'Accuracy' },
  bestStreak: { ru: 'Лучшая серия', ua: 'Найкраща серія', en: 'Best streak' },
  answersToday: { ru: 'Ответов сегодня', ua: 'Відповідей сьогодні', en: 'Answers today' },
  language: { ru: 'Язык объяснений', ua: 'Мова пояснень', en: 'Explanation language' },
  sound: { ru: 'Звук', ua: 'Звук', en: 'Sound' },
  exportProgress: { ru: 'Экспорт прогресса', ua: 'Експорт прогресу', en: 'Export progress' },
  importProgress: { ru: 'Импорт прогресса', ua: 'Імпорт прогресу', en: 'Import progress' },
  exportHint: {
    ru: 'Сохрани код и введи его на другом устройстве, чтобы перенести прогресс.',
    ua: 'Збережи код і введи його на іншому пристрої, щоб перенести прогрес.',
    en: 'Save the code and enter it on another device to move your progress.',
  },
  copy: { ru: 'Скопировать', ua: 'Скопіювати', en: 'Copy' },
  copied: { ru: 'Скопировано!', ua: 'Скопійовано!', en: 'Copied!' },
  pasteCode: { ru: 'Вставь код прогресса', ua: 'Встав код прогресу', en: 'Paste progress code' },
  importBtn: { ru: 'Импортировать', ua: 'Імпортувати', en: 'Import' },
  importDone: { ru: 'Прогресс загружен!', ua: 'Прогрес завантажено!', en: 'Progress imported!' },
  importBad: {
    ru: 'Код не распознан. Проверь, что вставил его целиком.',
    ua: 'Код не розпізнано. Перевір, що вставив його повністю.',
    en: 'Code not recognised. Make sure you pasted it in full.',
  },
  resetAll: { ru: 'Сбросить весь прогресс', ua: 'Скинути весь прогрес', en: 'Reset all progress' },
  resetConfirm: {
    ru: 'Точно сбросить? Все очки, медали и серия будут удалены.',
    ua: 'Точно скинути? Усі очки, медалі та серія будуть видалені.',
    en: 'Really reset? All XP, medals and your streak will be deleted.',
  },
  exercise: { ru: 'Упражнение', ua: 'Вправа', en: 'Exercise' },
  of: { ru: 'из', ua: 'з', en: 'of' },
  question: { ru: 'Задание', ua: 'Завдання', en: 'Question' },
  skip: { ru: 'Пропустить', ua: 'Пропустити', en: 'Skip' },
  showAnswer: { ru: 'Показать ответ', ua: 'Показати відповідь', en: 'Show answer' },
  tapWords: { ru: 'Нажимай на слова, чтобы собрать предложение', ua: 'Натискай на слова, щоб скласти речення', en: 'Tap the words to build the sentence' },
  tapToRemove: { ru: 'Нажми на слово, чтобы убрать его', ua: 'Натисни на слово, щоб прибрати його', en: 'Tap a word to remove it' },
  matchPrompt: { ru: 'Соедини пары', ua: "З'єднай пари", en: 'Match the pairs' },
  selectRight: { ru: 'Выбери продолжение', ua: 'Обери продовження', en: 'Choose the match' },
  finishMatch: { ru: 'Проверить пары', ua: 'Перевірити пари', en: 'Check pairs' },
  transformPrompt: { ru: 'Перепиши предложение', ua: 'Перепиши речення', en: 'Rewrite the sentence' },
  buildPrompt: { ru: 'Собери предложение', ua: 'Склади речення', en: 'Build the sentence' },
  gapPrompt: { ru: 'Впиши пропущенное слово', ua: 'Впиши пропущене слово', en: 'Fill in the missing word' },
  choicePrompt: { ru: 'Выбери правильный вариант', ua: 'Обери правильний варіант', en: 'Choose the correct option' },
  close: { ru: 'Закрыть', ua: 'Закрити', en: 'Close' },
  newContent: {
    ru: 'Скоро: юниты 6–20',
    ua: 'Незабаром: юніти 6–20',
    en: 'Coming soon: units 6–20',
  },
  soonBadge: { ru: 'Скоро', ua: 'Скоро', en: 'Soon' },
  firstTimeBonus: {
    ru: 'Отвечай внимательно с первой попытки — от этого зависят медали юнита!',
    ua: 'Відповідай уважно з першої спроби — від цього залежать медалі юніта!',
    en: 'Answer carefully on the first try — your unit medals depend on it!',
  },
} satisfies Record<string, LocalString>;

export type UIKey = keyof typeof UI;

export function t(key: UIKey, lang: Lang): string {
  return UI[key][lang];
}

export const LANG_NAMES: Record<Lang, string> = {
  ru: 'Русский',
  ua: 'Українська',
  en: 'English',
};

export const LANG_FLAGS: Record<Lang, string> = {
  ru: '🇷🇺',
  ua: '🇺🇦',
  en: '🇬🇧',
};

export function pick<T extends Record<Lang, unknown>>(obj: T, lang: Lang): T[Lang] {
  return obj[lang];
}
