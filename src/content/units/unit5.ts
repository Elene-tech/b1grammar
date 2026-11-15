import type { Unit } from '@/types/exercise';

export const unit5: Unit = {
  id: 5,
  title: {
    en: 'Future forms: will, going to, present continuous',
    ru: 'Способы выражения будущего: will, going to, настоящее время',
    ua: 'Способи вираження майбутнього: will, going to, теперішній час',
  },
  color: '#12A5A0',
  colorSoft: '#DDF2F1',
  theory: [
    {
      heading: {
        ru: 'Will: решения на месте и предсказания',
        ua: 'Will: рішення на місці та передбачення',
        en: 'Will: instant decisions and predictions',
      },
      body: {
        ru: 'Will + глагол используется для:\n1. Решений, принятых в момент речи: "The phone is ringing!" — "I will answer it."\n2. Предсказаний на основе мнения (I think, I believe, probably): I think it will rain tomorrow.\n3. Обещаний и предложений: I will always love you. I will help you with your bags.',
        ua: 'Will + дієслово використовується для:\n1. Рішень, прийнятих у момент мовлення: "The phone is ringing!" — "I will answer it."\n2. Передбачень на основі думки (I think, I believe, probably): I think it will rain tomorrow.\n3. Обіцянок і пропозицій: I will always love you. I will help you with your bags.',
        en: 'Will + verb is used for:\n1. Decisions made at the moment of speaking: "The phone is ringing!" — "I will answer it."\n2. Predictions based on opinion (I think, I believe, probably): I think it will rain tomorrow.\n3. Promises and offers: I will always love you. I will help you with your bags.',
      },
      table: {
        head: ['', 'Утверждение', 'Отрицание', 'Вопрос'],
        rows: [
          ['все лица', 'will go (\'ll go)', "won't go", 'Will you go?'],
        ],
      },
      note: {
        ru: 'Краткая форма \'ll — после всех местоимений. Отрицание won\'t = will not.',
        ua: 'Коротка форма \'ll — після всіх займенників. Заперечення won\'t = will not.',
        en: 'The short form \'ll follows all pronouns. Negative: won\'t = will not.',
      },
    },
    {
      heading: {
        ru: 'Be going to: планы и предсказания по фактам',
        ua: 'Be going to: плани та передбачення за фактами',
        en: 'Be going to: plans and evidence-based predictions',
      },
      body: {
        ru: 'Be going to + глагол используется для:\n1. Планов и намерений, принятых до момента речи: We are going to buy a new car. (мы уже решили)\n2. Предсказаний, когда видим доказательства: Look at those black clouds! It is going to rain. (облака — видимое доказательство)',
        ua: 'Be going to + дієслово використовується для:\n1. Планів і намірів, прийнятих до моменту мовлення: We are going to buy a new car. (ми вже вирішили)\n2. Передбачень, коли бачимо докази: Look at those black clouds! It is going to rain. (хмари — видимий доказ)',
        en: 'Be going to + verb is used for:\n1. Plans and intentions made before speaking: We are going to buy a new car. (we already decided)\n2. Predictions when we can see the evidence: Look at those black clouds! It is going to rain. (the clouds are visible evidence)',
      },
      table: {
        head: ['', 'Форма'],
        rows: [
          ['I', 'am going to do'],
          ['He / She / It', 'is going to do'],
          ['You / We / They', 'are going to do'],
        ],
      },
      note: {
        ru: '❌ I will to go. ✅ I am going to go. ❌ I am go to buy. ✅ I am going to buy.',
        ua: '❌ I will to go. ✅ I am going to go. ❌ I am go to buy. ✅ I am going to buy.',
        en: '❌ I will to go. ✅ I am going to go. ❌ I am go to buy. ✅ I am going to buy.',
      },
    },
    {
      heading: {
        ru: 'Настоящее время для будущего: договорённости и расписания',
        ua: 'Теперішній час для майбутнього: домовленості та розклади',
        en: 'Present tenses for the future: arrangements and timetables',
      },
      body: {
        ru: 'Present Continuous — для личных договорённостей (что-то запланировано с другими людьми): I am meeting the dentist at five tomorrow.\nPresent Simple — для расписаний транспорта и программ: The train leaves at 9.15. The concert starts at eight.',
        ua: 'Present Continuous — для особистих домовленостей (щось заплановано з іншими людьми): I am meeting the dentist at five tomorrow.\nPresent Simple — для розкладів транспорту та програм: The train leaves at 9.15. The concert starts at eight.',
        en: 'Present continuous — for personal arrangements (something planned with other people): I am meeting the dentist at five tomorrow.\nPresent simple — for transport timetables and programmes: The train leaves at 9.15. The concert starts at eight.',
      },
      table: {
        head: ['Ситуация', 'Форма', 'Пример'],
        rows: [
          ['Решение прямо сейчас', 'will', '"I will answer the door."'],
          ['Намерение / план', 'be going to', '"We are going to repaint the kitchen."'],
          ['Договорённость (с людьми, время назначено)', 'Present Continuous', '"I am seeing the doctor at 4."'],
          ['Расписание', 'Present Simple', '"The flight arrives at 7.30."'],
          ['Предсказание (мнение)', 'will', '"I think she will pass."'],
          ['Предсказание (по фактам)', 'be going to', '"It is going to snow."'],
        ],
      },
    },
  ],
  exercises: [
    {
      id: 'u5-warmup',
      title: { ru: 'Разминка: формы будущего времени', ua: 'Розминка: форми майбутнього часу', en: 'Warm-up: future forms' },
      level: 'warmup',
      items: [
        {
          type: 'gap', id: 'u5w1',
          before: 'I think it', after: 'tomorrow. The sky is already grey. (rain)',
          answer: ['will rain', "'ll rain"],
          explain: {
            ru: 'Предсказание с I think → will rain.',
            ua: 'Передбачення з I think → will rain.',
            en: 'A prediction with “I think” → will rain.',
          },
        },
        {
          type: 'gap', id: 'u5w2',
          before: 'We', after: 'a new sofa next month. We have already chosen it in the shop. (buy)',
          answer: ['are going to buy'],
          explain: {
            ru: 'Намерение, принятое заранее → are going to buy.',
            ua: 'Намір, прийнятий заздалегідь → are going to buy.',
            en: 'An intention decided earlier → are going to buy.',
          },
        },
        {
          type: 'gap', id: 'u5w3',
          before: 'I', after: 'the dentist at five tomorrow. The appointment is in my diary. (meet)',
          answer: ['am meeting'],
          explain: {
            ru: 'Договорённость на конкретное время → Present Continuous: am meeting.',
            ua: 'Домовленість на конкретний час → Present Continuous: am meeting.',
            en: 'An arrangement at a fixed time → present continuous: am meeting.',
          },
        },
        {
          type: 'gap', id: 'u5w4',
          before: 'The train', after: 'at 9.15 according to the timetable. (leave)',
          answer: ['leaves'],
          explain: {
            ru: 'Расписание → Present Simple: leaves.',
            ua: 'Розклад → Present Simple: leaves.',
            en: 'A timetable → present simple: leaves.',
          },
        },
        {
          type: 'gap', id: 'u5w5',
          before: '"The phone is ringing!" "Do not worry, I', after: 'it." (answer)',
          answer: ['will answer', "'ll answer"],
          explain: {
            ru: 'Решение принято в момент речи → will answer.',
            ua: 'Рішення прийнято у момент мовлення → will answer.',
            en: 'A decision made at the moment of speaking → will answer.',
          },
        },
        {
          type: 'gap', id: 'u5w6',
          before: 'They', after: "to the party. They told me yesterday that they have other plans. (not come)",
          answer: ["aren't going to come", 'are not going to come'],
          explain: {
            ru: 'План, который изменился → are not going to come.',
            ua: 'План, який змінився → are not going to come.',
            en: 'A plan that has changed → are not going to come.',
          },
        },
        {
          type: 'match', id: 'u5w7',
          left: ['a decision made now', 'a plan made earlier', 'a train timetable', 'a dinner with friends on Friday (booked)'],
          right: ['will', 'be going to', 'present simple', 'present continuous'],
          pairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
          explain: {
            ru: 'Решение на месте — will, план — be going to, расписание — present simple, договорённость — present continuous.',
            ua: 'Рішення на місці — will, план — be going to, розклад — present simple, домовленість — present continuous.',
            en: 'A decision on the spot → will, a plan → be going to, a timetable → present simple, an arrangement → present continuous.',
          },
        },
      ],
    },
    {
      id: 'u5-core',
      title: { ru: 'Практика: какое будущее выбрать?', ua: 'Практика: яке майбутнє обрати?', en: 'Core practice: which future is right?' },
      level: 'core',
      intro: {
        ru: 'Решение прямо сейчас — will. План — going to. Договорённость — Continuous. Расписание — Simple.',
        ua: 'Рішення просто зараз — will. План — going to. Домовленість — Continuous. Розклад — Simple.',
        en: 'Instant decision → will. Plan → going to. Arrangement → continuous. Timetable → simple.',
      },
      items: [
        {
          type: 'choice', id: 'u5c1',
          question: 'Look at those black clouds! It ______.',
          options: ['is going to rain', 'will rain', 'rains', 'raining'],
          correct: 'is going to rain',
          explain: {
            ru: 'Видимое доказательство (чёрные тучи) → is going to rain.',
            ua: 'Видимий доказ (чорні хмари) → is going to rain.',
            en: 'Visible evidence (black clouds) → is going to rain.',
          },
        },
        {
          type: 'gap', id: 'u5c2',
          before: 'I promise I', after: 'anyone your secret. (not tell)',
          answer: ["won't tell", 'will not tell'],
          explain: {
            ru: 'Обещание → will: won\'t tell.',
            ua: 'Обіцянка → will: won\'t tell.',
            en: 'A promise → will: won\'t tell.',
          },
        },
        {
          type: 'choice', id: 'u5c3',
          question: 'We ______ dinner with the Smiths on Friday. We booked the restaurant yesterday.',
          options: ['are having', 'have', 'will have', 'having'],
          correct: 'are having',
          explain: {
            ru: 'Договорённость (booked — всё организовано) → Present Continuous: are having.',
            ua: 'Домовленість (booked — усе організовано) → Present Continuous: are having.',
            en: 'An arrangement (booked — everything is organised) → present continuous: are having.',
          },
        },
        {
          type: 'gap', id: 'u5c4',
          before: 'I think robots', after: 'all the housework in the future. (do)',
          answer: ['will do', "'ll do"],
          explain: {
            ru: 'Предсказание с I think → will do.',
            ua: 'Передбачення з I think → will do.',
            en: 'A prediction with “I think” → will do.',
          },
        },
        {
          type: 'choice', id: 'u5c5',
          question: '"I feel terrible." "Do not worry, I ______ you a cup of tea."',
          options: ['will make', 'am going to make', 'make', 'made'],
          correct: 'will make',
          explain: {
            ru: 'Предложение помощи, решение на месте → will make.',
            ua: 'Пропозиція допомоги, рішення на місці → will make.',
            en: 'An offer of help, decided on the spot → will make.',
          },
        },
        {
          type: 'gap', id: 'u5c6',
          before: 'He', after: 'to Berlin next Tuesday. His ticket is already on the table. (fly)',
          answer: ['is flying'],
          explain: {
            ru: 'Билет куплен = договорённость → is flying.',
            ua: 'Квиток куплено = домовленість → is flying.',
            en: 'The ticket is bought = an arrangement → is flying.',
          },
        },
        {
          type: 'transform', id: 'u5c7',
          instruction: {
            ru: 'Перепиши как спонтанное решение с will:',
            ua: 'Перепиши як спонтанне рішення з will:',
            en: 'Rewrite as a spontaneous decision with "will":',
          },
          source: 'It is hot in here. I am going to open the window.',
          answer: ['It is hot in here. I will open the window', 'I will open the window'],
          explain: {
            ru: 'Решение принято прямо сейчас → I will open the window.',
            ua: 'Рішення прийнято просто зараз → I will open the window.',
            en: 'A decision made right now → I will open the window.',
          },
        },
        {
          type: 'gap', id: 'u5c8',
          before: 'My plane', after: 'at 6.30 in the morning. (arrive)',
          answer: ['arrives'],
          explain: {
            ru: 'Расписание транспорта → Present Simple: arrives.',
            ua: 'Розклад транспорту → Present Simple: arrives.',
            en: 'A transport timetable → present simple: arrives.',
          },
        },
      ],
    },
    {
      id: 'u5-challenge',
      title: { ru: 'Вызов: истории о будущем', ua: 'Виклик: історії про майбутнє', en: 'Challenge: stories about the future' },
      level: 'challenge',
      items: [
        {
          type: 'build', id: 'u5h1',
          words: ['at the clouds', 'going to rain', 'Look', 'it is'],
          answer: 'Look at the clouds, it is going to rain',
          explain: {
            ru: 'Видимое доказательство → Look at the clouds, it is going to rain.',
            ua: 'Видимий доказ → Look at the clouds, it is going to rain.',
            en: 'Visible evidence → Look at the clouds, it is going to rain.',
          },
        },
        {
          type: 'gap', id: 'u5h2',
          before: 'By 2050, people', after: 'on Mars. I am sure of it! (live)',
          answer: ['will live', "'ll live"],
          explain: {
            ru: 'Далёкое предсказание по мнению → will live.',
            ua: 'Далеке передбачення на думку → will live.',
            en: 'A distant opinion-based prediction → will live.',
          },
        },
        {
          type: 'choice', id: 'u5h3',
          question: 'Watch out! You ______ your glass!',
          options: ['are going to drop', 'will drop', 'drop', 'are dropping'],
          correct: 'are going to drop',
          explain: {
            ru: 'Стакан уже падает — доказательство перед глазами → are going to drop.',
            ua: 'Склянка вже падає — доказ перед очима → are going to drop.',
            en: 'The glass is already falling — the evidence is right there → are going to drop.',
          },
        },
        {
          type: 'transform', id: 'u5h4',
          instruction: {
            ru: 'Задай вопрос о предсказании:',
            ua: 'Постав питання про передбачення:',
            en: 'Ask a question about the prediction:',
          },
          source: 'She will pass the exam.',
          answer: ['Will she pass the exam'],
          explain: {
            ru: 'Вопрос с will: Will + she + pass...?',
            ua: 'Питання з will: Will + she + pass...?',
            en: 'A will-question: Will + she + pass...?',
          },
        },
        {
          type: 'gap', id: 'u5h5',
          before: 'We', after: "a musical tonight — we have had the tickets for weeks. (see)",
          answer: ['are seeing'],
          explain: {
            ru: 'Билеты куплены давно = договорённость → are seeing.',
            ua: 'Квитки куплено давно = домовленість → are seeing.',
            en: 'Tickets bought long ago = an arrangement → are seeing.',
          },
        },
      ],
    },
  ],
};
