import type { Unit } from '@/types/exercise';

export const unit2: Unit = {
  id: 2,
  title: {
    en: 'Past Simple and "used to"',
    ru: 'Past Simple и конструкция "used to"',
    ua: 'Past Simple та конструкція "used to"',
  },
  color: '#E84393',
  colorSoft: '#FDE3EF',
  theory: [
    {
      heading: {
        ru: 'Past Simple: завершённое прошлое',
        ua: 'Past Simple: завершене минуле',
        en: 'Past Simple: finished past',
      },
      body: {
        ru: 'Это прошедшее простое время. Мы используем его для действий, которые начались и закончились в прошлом, в известный момент. Правильные глаголы добавляют -ed (work → worked), неправильные меняются по таблице (go → went, see → saw).\nПримеры: I visited my grandma last weekend. She bought a new phone yesterday.',
        ua: 'Це минулий простий час. Ми використовуємо його для дій, які почалися і закінчилися в минулому, у відомий момент. Правильні дієслова додають -ed (work → worked), неправильні змінюються за таблицею (go → went, see → saw).\nПриклади: I visited my grandma last weekend. She bought a new phone yesterday.',
        en: 'We use the past simple for actions that started and finished in the past, at a known time. Regular verbs add -ed (work → worked); irregular verbs change (go → went, see → saw).\nExamples: I visited my grandma last weekend. She bought a new phone yesterday.',
      },
      table: {
        head: ['', 'Утверждение', 'Отрицание', 'Вопрос'],
        rows: [
          ['все лица', 'worked / went', "didn't work / didn't go", 'Did you work / go?'],
        ],
      },
      note: {
        ru: 'После did / didn\'t глагол всегда в начальной форме: ❌ Did you went? ✅ Did you go?',
        ua: 'Після did / didn\'t дієслово завжди в початковій формі: ❌ Did you went? ✅ Did you go?',
        en: 'After did / didn\'t the verb is always in its base form: ❌ Did you went? ✅ Did you go?',
      },
    },
    {
      heading: {
        ru: '"Used to": привычки из прошлого',
        ua: '"Used to": звички з минулого',
        en: '"Used to": past habits',
      },
      body: {
        ru: 'Конструкция used to + глагол означает: «раньше делал так, но больше не делаю». Она описывает привычки и состояния, которые были в прошлом и изменились.\nПримеры: I used to play football every day. (раньше играл, теперь нет) She used to live in Lviv. (раньше жила, теперь переехала)\nОтрицание: didn\'t use to. Вопрос: Did you use to...?',
        ua: 'Конструкція used to + дієслово означає: «раніше робив так, але більше не роблю». Вона описує звички та стани, які були в минулому і змінилися.\nПриклади: I used to play football every day. (раніше грав, тепер ні) She used to live in Lviv. (раніше жила, тепер переїхала)\nЗаперечення: didn\'t use to. Питання: Did you use to...?',
        en: 'Used to + verb means: “I did it in the past, but I don\'t do it any more.” It describes past habits and states that have changed.\nExamples: I used to play football every day. (before, but not now) She used to live in Lviv. (before, she moved)\nNegative: didn\'t use to. Question: Did you use to...?',
      },
      note: {
        ru: 'В вопросах и отрицаниях форма не меняется: didn\'t use to (НЕ didn\'t used to). Не путайте: be used to + -ing = «привыкнуть к чему-то».',
        ua: 'В питаннях і запереченнях форма не змінюється: didn\'t use to (НЕ didn\'t used to). Не плутайте: be used to + -ing = «звикнути до чогось».',
        en: 'In questions and negatives the form stays: didn\'t use to (NOT didn\'t used to). Do not confuse with: be used to + -ing = “be accustomed to something”.',
      },
    },
    {
      heading: {
        ru: 'Маркеры и типичные ошибки',
        ua: 'Маркери та типові помилки',
        en: 'Time markers and typical mistakes',
      },
      body: {
        ru: 'Маркеры Past Simple: yesterday, last night/week/year, two days ago, in 2010, just now (в значении «только что, в прошлом контексте»).\nЧастые ошибки:\n1. ❌ I have seen him yesterday. ✅ I saw him yesterday. (с ago/yesterday не используем Present Perfect)\n2. ❌ Did you went home? ✅ Did you go home?\n3. ❌ She didn\'t came. ✅ She didn\'t come.',
        ua: 'Маркери Past Simple: yesterday, last night/week/year, two days ago, in 2010.\nЧасті помилки:\n1. ❌ I have seen him yesterday. ✅ I saw him yesterday. (з ago/yesterday не використовуємо Present Perfect)\n2. ❌ Did you went home? ✅ Did you go home?\n3. ❌ She didn\'t came. ✅ She didn\'t come.',
        en: 'Past simple markers: yesterday, last night/week/year, two days ago, in 2010.\nCommon mistakes:\n1. ❌ I have seen him yesterday. ✅ I saw him yesterday. (never present perfect with ago/yesterday)\n2. ❌ Did you went home? ✅ Did you go home?\n3. ❌ She didn\'t came. ✅ She didn\'t come.',
      },
    },
  ],
  exercises: [
    {
      id: 'u2-warmup',
      title: { ru: 'Разминка: формы Past Simple', ua: 'Розминка: форми Past Simple', en: 'Warm-up: past simple forms' },
      level: 'warmup',
      items: [
        {
          type: 'gap', id: 'u2w1',
          before: 'I', after: 'my grandma last weekend. (visit)',
          answer: ['visited'],
          explain: {
            ru: 'last weekend → Past Simple. Правильный глагол: visit + -ed = visited.',
            ua: 'last weekend → Past Simple. Правильне дієслово: visit + -ed = visited.',
            en: '“Last weekend” → past simple. Regular verb: visit + -ed = visited.',
          },
        },
        {
          type: 'gap', id: 'u2w2',
          before: 'She', after: 'to school yesterday. She was ill. (not go)',
          answer: ["didn't go", 'did not go'],
          explain: {
            ru: 'Отрицание в Past Simple: didn\'t + начальная форма → didn\'t go.',
            ua: 'Заперечення в Past Simple: didn\'t + початкова форма → didn\'t go.',
            en: 'Past simple negative: didn\'t + base form → didn\'t go.',
          },
        },
        {
          type: 'gap', id: 'u2w3',
          before: '', after: 'the film last night? It was brilliant! (you see)',
          answer: ['did you see'],
          explain: {
            ru: 'Вопрос в Past Simple: Did + подлежащее + глагол → Did you see.',
            ua: 'Питання в Past Simple: Did + підмет + дієслово → Did you see.',
            en: 'Past simple question: Did + subject + verb → Did you see.',
          },
        },
        {
          type: 'gap', id: 'u2w4',
          before: 'They', after: 'a new car two weeks ago. (buy)',
          answer: ['bought'],
          explain: {
            ru: 'two weeks ago → Past Simple. buy — неправильный: bought.',
            ua: 'two weeks ago → Past Simple. buy — неправильне: bought.',
            en: '“Two weeks ago” → past simple. Irregular verb: bought.',
          },
        },
        {
          type: 'gap', id: 'u2w5',
          before: 'We', after: 'a great time at the party on Saturday. (have)',
          answer: ['had'],
          explain: {
            ru: 'on Saturday (прошлая) → Past Simple. have → had.',
            ua: 'on Saturday (минула) → Past Simple. have → had.',
            en: '“On Saturday” (finished) → past simple. have → had.',
          },
        },
        {
          type: 'gap', id: 'u2w6',
          before: 'He', after: 'three letters this morning. (write)',
          answer: ['wrote'],
          explain: {
            ru: 'this morning (утро уже прошло) → Past Simple. write → wrote.',
            ua: 'this morning (ранок уже минув) → Past Simple. write → wrote.',
            en: '“This morning” (finished) → past simple. write → wrote.',
          },
        },
        {
          type: 'match', id: 'u2w7',
          left: ['go', 'see', 'buy', 'write'],
          right: ['went', 'saw', 'bought', 'wrote'],
          pairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
          explain: {
            ru: 'Неправильные глаголы в Past Simple: go → went, see → saw, buy → bought, write → wrote.',
            ua: 'Неправильні дієслова в Past Simple: go → went, see → saw, buy → bought, write → wrote.',
            en: 'Irregular past simple forms: go → went, see → saw, buy → bought, write → wrote.',
          },
        },
      ],
    },
    {
      id: 'u2-core',
      title: { ru: 'Практика: прошлое время и "used to"', ua: 'Практика: минулий час і "used to"', en: 'Core practice: past simple and "used to"' },
      level: 'core',
      items: [
        {
          type: 'choice', id: 'u2c1',
          question: 'I ______ him at the airport yesterday.',
          options: ['met', 'meet', 'meeted', 'meeting'],
          correct: 'met',
          explain: {
            ru: 'yesterday → Past Simple. meet → met (неправильный глагол, формы meeded нет).',
            ua: 'yesterday → Past Simple. meet → met (неправильне дієслово, форми meeded немає).',
            en: '“Yesterday” → past simple. meet → met (irregular; “meeted” does not exist).',
          },
        },
        {
          type: 'gap', id: 'u2c2',
          before: 'Where', after: 'born? In Kharkiv. (you be)',
          answer: ['were you born'],
          explain: {
            ru: 'Вопрос о рождении — устойчивый оборот: Where were you born?',
            ua: 'Питання про народження — стійкий вислів: Where were you born?',
            en: 'Asking about birth — a fixed phrase: Where were you born?',
          },
        },
        {
          type: 'gap', id: 'u2c3',
          before: 'My grandpa', after: 'in a small village. Now he lives in town. (use to live)',
          answer: ['used to live'],
          explain: {
            ru: 'Раньше жил в деревне, теперь нет → used to + live.',
            ua: 'Раніше жив у селі, тепер ні → used to + live.',
            en: 'He lived there before, but not now → used to + live.',
          },
        },
        {
          type: 'choice', id: 'u2c4',
          question: 'Did she ______ her homework yesterday evening?',
          options: ['do', 'did', 'done', 'does'],
          correct: 'do',
          explain: {
            ru: 'После Did глагол в начальной форме → do. ❌ Did she did/done.',
            ua: 'Після Did дієслово в початковій формі → do. ❌ Did she did/done.',
            en: 'After “Did” the verb is in the base form → do. ❌ Did she did/done.',
          },
        },
        {
          type: 'gap', id: 'u2c5',
          before: 'We', after: 'the match because the TV was broken. (not watch)',
          answer: ["didn't watch", 'did not watch'],
          explain: {
            ru: 'Причина в прошлом (was broken) → Past Simple: didn\'t watch.',
            ua: 'Причина в минулому (was broken) → Past Simple: didn\'t watch.',
            en: 'The reason is in the past (was broken) → past simple: didn\'t watch.',
          },
        },
        {
          type: 'choice', id: 'u2c6',
          question: 'She ______ to school by bus every day when she was little.',
          options: ['used to go', 'uses to go', 'is used to go', 'use to go'],
          correct: 'used to go',
          explain: {
            ru: 'Привычка из детства, которой больше нет → used to + go.',
            ua: 'Звичка з дитинства, якої більше немає → used to + go.',
            en: 'A childhood habit that has ended → used to + go.',
          },
        },
        {
          type: 'gap', id: 'u2c7',
          before: 'I', after: 'nothing this morning, so I am very hungry now. (eat)',
          answer: ['ate'],
          explain: {
            ru: 'this morning уже завершено → Past Simple. eat → ate.',
            ua: 'this morning уже завершено → Past Simple. eat → ate.',
            en: '“This morning” is finished → past simple. eat → ate.',
          },
        },
        {
          type: 'transform', id: 'u2c8',
          instruction: {
            ru: 'Сделай предложение отрицательным:',
            ua: 'Зроби речення заперечним:',
            en: 'Make the sentence negative:',
          },
          source: 'He broke the window.',
          answer: ["He didn't break the window", 'He did not break the window'],
          explain: {
            ru: 'didn\'t + начальная форма. broke возвращается в break → He didn\'t break the window.',
            ua: 'didn\'t + початкова форма. broke повертається в break → He didn\'t break the window.',
            en: 'didn\'t + base form. broke goes back to break → He didn\'t break the window.',
          },
        },
      ],
    },
    {
      id: 'u2-challenge',
      title: { ru: 'Вызов: мыслим прошедшим временем', ua: 'Виклик: мислимо минулим часом', en: 'Challenge: thinking in the past' },
      level: 'challenge',
      items: [
        {
          type: 'build', id: 'u2h1',
          words: ['last night', 'to bed', 'went', 'very late', 'I'],
          answer: 'I went to bed very late last night',
          explain: {
            ru: 'Порядок слов: I went to bed very late last night (маркер last night в конце).',
            ua: 'Порядок слів: I went to bed very late last night (маркер last night наприкінці).',
            en: 'Word order: I went to bed very late last night (time marker at the end).',
          },
        },
        {
          type: 'gap', id: 'u2h2',
          before: 'When I was a child, I', after: 'vegetables at all. Now I love them! (not like)',
          answer: ["didn't use to like", 'did not use to like'],
          explain: {
            ru: 'Отрицание с used to: didn\'t use to + like (форма use не меняется).',
            ua: 'Заперечення з used to: didn\'t use to + like (форма use не змінюється).',
            en: 'Negative with used to: didn\'t use to + like (the form “use” stays the same).',
          },
        },
        {
          type: 'transform', id: 'u2h3',
          instruction: {
            ru: 'Перепиши предложение с used to:',
            ua: 'Перепиши речення з used to:',
            en: 'Rewrite the sentence with "used to":',
          },
          source: 'I played tennis every weekend, but now I do not.',
          answer: ['I used to play tennis every weekend'],
          explain: {
            ru: 'Привычка в прошлом → I used to play tennis every weekend.',
            ua: 'Звичка в минулому → I used to play tennis every weekend.',
            en: 'A past habit → I used to play tennis every weekend.',
          },
        },
        {
          type: 'choice', id: 'u2h4',
          question: '______ a lot of snow last winter?',
          options: ['Was there', 'There was', 'There were', 'Is there'],
          correct: 'Was there',
          explain: {
            ru: 'Вопрос с there was/were: Was there + ...? snow — неисчисляемое, was.',
            ua: 'Питання з there was/were: Was there + ...? snow — незлічуване, was.',
            en: 'Question with there was/were: Was there + ...? Snow is uncountable → was.',
          },
        },
        {
          type: 'gap', id: 'u2h5',
          before: 'We', after: 'to the Highlands. The journey took six hours. (drive)',
          answer: ['drove'],
          explain: {
            ru: 'Рассказ о прошлом путешествии → Past Simple. drive → drove.',
            ua: 'Розповідь про минулу подорож → Past Simple. drive → drove.',
            en: 'A story about a past journey → past simple. drive → drove.',
          },
        },
      ],
    },
  ],
};
