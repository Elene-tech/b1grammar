import type { Unit } from '@/types/exercise';

export const unit3: Unit = {
  id: 3,
  title: {
    en: 'Past Continuous',
    ru: 'Past Continuous',
    ua: 'Past Continuous',
  },
  color: '#1F9540',
  colorSoft: '#DFF2E3',
  theory: [
    {
      heading: {
        ru: 'Past Continuous: действие в процессе в прошлом',
        ua: 'Past Continuous: дія в процесі в минулому',
        en: 'Past Continuous: an action in progress in the past',
      },
      body: {
        ru: 'Это прошедшее продолженное время: действие длилось в определённый момент в прошлом. Форма: was / were + глагол с -ing.\nПримеры: I was sleeping at midnight. They were driving to Glasgow all evening.',
        ua: 'Це минулий тривалий час: дія тривала в певний момент у минулому. Форма: was / were + дієслово з -ing.\nПриклади: I was sleeping at midnight. They were driving to Glasgow all evening.',
        en: 'The past continuous shows an action that was in progress at a moment in the past. Form: was / were + verb-ing.\nExamples: I was sleeping at midnight. They were driving to Glasgow all evening.',
      },
      table: {
        head: ['', 'Утверждение', 'Отрицание', 'Вопрос'],
        rows: [
          ['I / He / She / It', 'was working', "wasn't working", 'Was she working?'],
          ['You / We / They', 'were working', "weren't working", 'Were they working?'],
        ],
      },
      note: {
        ru: 'Маркеры: at 8 o\'clock yesterday, at that moment, all evening, while, when. Правила написания -ing те же, что в Present Continuous: run → running, travel → travelling.',
        ua: 'Маркери: at 8 o\'clock yesterday, at that moment, all evening, while, when. Правила написання -ing ті самі, що в Present Continuous: run → running, travel → travelling.',
        en: 'Markers: at 8 o\'clock yesterday, at that moment, all evening, while, when. The -ing spelling rules are the same as in the present continuous: run → running, travel → travelling.',
      },
    },
    {
      heading: {
        ru: 'Два действия в прошлом: when и while',
        ua: 'Дві дії в минулому: when і while',
        en: 'Two past actions: when and while',
      },
      body: {
        ru: 'Когда длинное действие «фон» прерывается коротким, мы используем:\nPast Continuous (длинное) + when + Past Simple (короткое): I was cooking when the phone rang.\nwhile + Past Continuous (два действия параллельно): While I was reading, my brother was playing.\nКороткое действие (Past Simple) — это событие: rang, arrived, started. Длинное (Past Continuous) — процесс: was cooking, was reading.',
        ua: 'Коли довга дія «фон» переривається короткою, ми використовуємо:\nPast Continuous (довга) + when + Past Simple (коротка): I was cooking when the phone rang.\nwhile + Past Continuous (дії паралельно): While I was reading, my brother was playing.\nКоротка дія (Past Simple) — це подія: rang, arrived, started. Довга (Past Continuous) — процес: was cooking, was reading.',
        en: 'When a long “background” action is interrupted by a short one, we use:\nPast continuous (long) + when + past simple (short): I was cooking when the phone rang.\nwhile + past continuous (two parallel actions): While I was reading, my brother was playing.\nThe short action (past simple) is an event: rang, arrived, started. The long one (past continuous) is a process: was cooking, was reading.',
      },
      table: {
        head: ['Схема', 'Пример'],
        rows: [
          ['Past Continuous + when + Past Simple', 'She was driving when it started to snow.'],
          ['Past Simple + while + Past Continuous', 'I met Tom while I was walking the dog.'],
          ['while + Past Continuous, + Past Continuous', 'While he was cooking, she was setting the table.'],
        ],
      },
      note: {
        ru: '❌ When I was arriving, it rained. ✅ When I arrived, it started to rain. arrive — короткое событие, не процесс.',
        ua: '❌ When I was arriving, it rained. ✅ When I arrived, it started to rain. arrive — коротка подія, не процес.',
        en: '❌ When I was arriving, it rained. ✅ When I arrived, it started to rain. “Arrive” is a short event, not a process.',
      },
    },
  ],
  exercises: [
    {
      id: 'u3-warmup',
      title: { ru: 'Разминка: формы Past Continuous', ua: 'Розминка: форми Past Continuous', en: 'Warm-up: past continuous forms' },
      level: 'warmup',
      items: [
        {
          type: 'gap', id: 'u3w1',
          before: 'I', after: 'at midnight yesterday. (sleep)',
          answer: ['was sleeping'],
          explain: {
            ru: 'Действие в процессе в прошлый момент (at midnight yesterday) → was sleeping.',
            ua: 'Дія в процесі в минулий момент (at midnight yesterday) → was sleeping.',
            en: 'An action in progress at a past moment (at midnight yesterday) → was sleeping.',
          },
        },
        {
          type: 'gap', id: 'u3w2',
          before: 'They', after: 'to the teacher at that moment. (not listen)',
          answer: ["weren't listening", 'were not listening'],
          explain: {
            ru: 'they → were. Отрицание: weren\'t + listening.',
            ua: 'they → were. Заперечення: weren\'t + listening.',
            en: 'they → were. Negative: weren\'t + listening.',
          },
        },
        {
          type: 'gap', id: 'u3w3',
          before: '', after: 'when you left home this morning? (it rain)',
          answer: ['was it raining'],
          explain: {
            ru: 'Действие в процессе, когда случилось событие → Was it raining?',
            ua: 'Дія в процесі, коли сталася подія → Was it raining?',
            en: 'An action in progress when an event happened → Was it raining?',
          },
        },
        {
          type: 'gap', id: 'u3w4',
          before: 'She', after: 'too fast when the police stopped her. (drive)',
          answer: ['was driving'],
          explain: {
            ru: 'Длинный процесс (was driving), прерванный событием (stopped) → was driving.',
            ua: 'Довгий процес (was driving), перерваний подією (stopped) → was driving.',
            en: 'A long process (was driving) interrupted by an event (stopped) → was driving.',
          },
        },
        {
          type: 'gap', id: 'u3w5',
          before: 'We', after: 'dinner at eight o\'clock yesterday. (have)',
          answer: ['were having'],
          explain: {
            ru: 'at eight o\'clock yesterday — момент в прошлом → were having.',
            ua: 'at eight o\'clock yesterday — момент у минулому → were having.',
            en: '“At eight o\'clock yesterday” — a past moment → were having.',
          },
        },
        {
          type: 'gap', id: 'u3w6',
          before: 'The sun', after: 'and the birds were singing. (shine)',
          answer: ['was shining'],
          explain: {
            ru: 'Параллельные процессы: was shining ... were singing.',
            ua: 'Паралельні процеси: was shining ... were singing.',
            en: 'Parallel processes: was shining ... were singing.',
          },
        },
        {
          type: 'match', id: 'u3w7',
          left: ['run', 'write', 'swim', 'open'],
          right: ['running', 'writing', 'swimming', 'opening'],
          pairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
          explain: {
            ru: 'run и swim — удваиваем согласную (краткий ударный слог), write — убираем -e, open — просто добавляем -ing.',
            ua: 'run і swim — подвоюємо приголосну (короткий наголошений склад), write — прибираємо -e, open — просто додаємо -ing.',
            en: 'run and swim double the consonant (short stressed syllable), write drops the -e, open just adds -ing.',
          },
        },
      ],
    },
    {
      id: 'u3-core',
      title: { ru: 'Практика: when, while и фоновые действия', ua: 'Практика: when, while і фонові дії', en: 'Core practice: when, while and background actions' },
      level: 'core',
      intro: {
        ru: 'Длинное действие (Continuous) или короткое событие (Simple)?',
        ua: 'Довга дія (Continuous) чи коротка подія (Simple)?',
        en: 'Long action (continuous) or short event (simple)?',
      },
      items: [
        {
          type: 'choice', id: 'u3c1',
          question: 'When I arrived, they ______ dinner.',
          options: ['were having', 'had', 'have', 'are having'],
          correct: 'were having',
          explain: {
            ru: 'Действие в процессе в момент события → were having.',
            ua: 'Дія в процесі в момент події → were having.',
            en: 'An action in progress at the moment of the event → were having.',
          },
        },
        {
          type: 'gap', id: 'u3c2',
          before: 'While I', after: 'home, it suddenly started to rain. (walk)',
          answer: ['was walking'],
          explain: {
            ru: 'while + длинное действие → was walking. started — короткое событие.',
            ua: 'while + довга дія → was walking. started — коротка подія.',
            en: 'while + long action → was walking. “Started” is the short event.',
          },
        },
        {
          type: 'choice', id: 'u3c3',
          question: '"______ when the accident happened?" "I was waiting for a bus."',
          options: ['What were you doing', 'What did you do', 'What you were doing', 'What do you do'],
          correct: 'What were you doing',
          explain: {
            ru: 'Вопрос о процессе в прошлом: What were you doing? (инверсия обязательна).',
            ua: 'Питання про процес у минулому: What were you doing? (інверсія обов\'язкова).',
            en: 'Asking about a past process: What were you doing? (inversion is required).',
          },
        },
        {
          type: 'gap', id: 'u3c4',
          before: 'He broke his leg while he', after: '. (ski)',
          answer: ['was skiing'],
          explain: {
            ru: 'Процесс в момент события → was skiing. ski → skiing (удвоение i не нужно).',
            ua: 'Процес в момент події → was skiing. ski → skiing (подвоєння i не потрібне).',
            en: 'A process at the moment of the event → was skiing. ski → skiing (no doubling needed).',
          },
        },
        {
          type: 'gap', id: 'u3c5',
          before: 'I', after: 'an old friend while I was doing the shopping. (see)',
          answer: ['saw'],
          explain: {
            ru: 'Встретить — короткое событие, а не процесс → saw (Past Simple).',
            ua: 'Зустріти — коротка подія, а не процес → saw (Past Simple).',
            en: 'Seeing a friend is a short event, not a process → saw (past simple).',
          },
        },
        {
          type: 'choice', id: 'u3c6',
          question: 'At nine o\'clock last night I ______ a book.',
          options: ['was reading', 'read', 'am reading', 'reading'],
          correct: 'was reading',
          explain: {
            ru: 'Конкретный момент в прошлом (at nine last night) → was reading.',
            ua: 'Конкретний момент у минулому (at nine last night) → was reading.',
            en: 'A specific past moment (at nine last night) → was reading.',
          },
        },
        {
          type: 'gap', id: 'u3c7',
          before: 'They', after: 'attention, so they missed the announcement. (not pay)',
          answer: ["weren't paying", 'were not paying'],
          explain: {
            ru: 'Не обращали внимание — процесс, который привёл к результату → weren\'t paying.',
            ua: 'Не звертали уваги — процес, що призвів до результату → weren\'t paying.',
            en: 'Not paying attention — a process that led to a result → weren\'t paying.',
          },
        },
        {
          type: 'transform', id: 'u3c8',
          instruction: {
            ru: 'Соедини предложения в одно, используя while:',
            ua: "З'єднай речення в одне, використовуючи while:",
            en: 'Join the sentences into one using "while":',
          },
          source: 'She was cooking dinner. He was watching TV.',
          answer: ['While she was cooking dinner, he was watching TV', 'He was watching TV while she was cooking dinner'],
          explain: {
            ru: 'Два параллельных процесса соединяем через while: While she was cooking dinner, he was watching TV.',
            ua: 'Два паралельні процеси з\'єднуємо через while: While she was cooking dinner, he was watching TV.',
            en: 'Two parallel processes joined with while: While she was cooking dinner, he was watching TV.',
          },
        },
      ],
    },
    {
      id: 'u3-challenge',
      title: { ru: 'Вызов: истории из прошлого', ua: 'Виклик: історії з минулого', en: 'Challenge: stories from the past' },
      level: 'challenge',
      items: [
        {
          type: 'build', id: 'u3h1',
          words: ['was', 'at 7 am', 'having a shower', 'I', 'this morning'],
          answer: 'I was having a shower at 7 am this morning',
          explain: {
            ru: 'Порядок: подлежащее + was having + объект + время: I was having a shower at 7 am this morning.',
            ua: 'Порядок: підмет + was having + об\'єкт + час: I was having a shower at 7 am this morning.',
            en: 'Order: subject + was having + object + time: I was having a shower at 7 am this morning.',
          },
        },
        {
          type: 'gap', id: 'u3h2',
          before: 'The plane', after: 'when suddenly one of the engines failed. (take off)',
          answer: ['was taking off'],
          explain: {
            ru: 'Длинное действие прервано событием → was taking off.',
            ua: 'Довга дія перервана подією → was taking off.',
            en: 'A long action interrupted by an event → was taking off.',
          },
        },
        {
          type: 'choice', id: 'u3h3',
          question: 'I ______ my keys while I was running to the bus stop.',
          options: ['lost', 'was losing', 'lose', 'am losing'],
          correct: 'lost',
          explain: {
            ru: 'Потерять ключи — мгновенное событие внутри процесса → lost (Past Simple).',
            ua: 'Втратити ключі — миттєва подія всередині процесу → lost (Past Simple).',
            en: 'Losing the keys is an instant event inside a process → lost (past simple).',
          },
        },
        {
          type: 'transform', id: 'u3h4',
          instruction: {
            ru: 'Задай вопрос к выделенной ситуации:',
            ua: 'Постав питання до виділеної ситуації:',
            en: 'Ask a question about the situation:',
          },
          source: 'She was wearing a red coat yesterday.',
          answer: ['Was she wearing a red coat yesterday'],
          explain: {
            ru: 'Вопрос в Past Continuous: Was + she + wearing...?',
            ua: 'Питання в Past Continuous: Was + she + wearing...?',
            en: 'Past continuous question: Was + she + wearing...?',
          },
        },
        {
          type: 'gap', id: 'u3h5',
          before: 'What', after: 'at this time yesterday? I can\'t remember. (you do)',
          answer: ['were you doing'],
          explain: {
            ru: 'at this time yesterday — процесс в прошлом → were you doing.',
            ua: 'at this time yesterday — процес у минулому → were you doing.',
            en: '“At this time yesterday” — a past process → were you doing.',
          },
        },
      ],
    },
  ],
};
