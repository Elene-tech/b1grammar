import type { Unit } from '@/types/exercise';

export const unit1: Unit = {
  id: 1,
  title: {
    en: 'Present Continuous – Present Simple',
    ru: 'Present Continuous – Present Simple',
    ua: 'Present Continuous – Present Simple',
  },
  color: '#FF6502',
  colorSoft: '#FFE8D9',
  theory: [
    {
      heading: {
        ru: 'Present Continuous: что происходит сейчас',
        ua: 'Present Continuous: що відбувається зараз',
        en: 'Present Continuous: actions happening now',
      },
      body: {
        ru: 'Это настоящее продолженное время. Мы используем его, когда действие происходит прямо сейчас, в момент речи, или вокруг настоящего момента. Форма: am / is / are + глагол с окончанием -ing.\nПримеры: I am reading now. She is cooking dinner. They are playing outside.',
        ua: 'Це теперішній тривалий час. Ми використовуємо його, коли дія відбувається просто зараз, у момент мовлення, або навколо теперішнього моменту. Форма: am / is / are + дієслово з закінченням -ing.\nПриклади: I am reading now. She is cooking dinner. They are playing outside.',
        en: 'We use the present continuous for actions happening right now, at the moment of speaking, or around the present moment. Form: am / is / are + verb-ing.\nExamples: I am reading now. She is cooking dinner. They are playing outside.',
      },
      table: {
        head: ['', 'Утверждение', 'Отрицание', 'Вопрос'],
        rows: [
          ['I', 'am working', 'am not working', 'Am I working?'],
          ['He / She / It', 'is working', "isn't working", 'Is he working?'],
          ['You / We / They', 'are working', "aren't working", 'Are they working?'],
        ],
      },
      note: {
        ru: 'Маркеры: now, at the moment, right now, today, these days, Look!, Listen! Осторожно: он работает с глаголами действия, а не состояния.',
        ua: 'Маркери: now, at the moment, right now, today, these days, Look!, Listen! Обережно: він працює з дієсловами дії, а не стану.',
        en: 'Time markers: now, at the moment, right now, today, these days, Look!, Listen! Careful: it is used with action verbs, not state verbs.',
      },
    },
    {
      heading: {
        ru: 'Как писать -ing: правила написания',
        ua: 'Як писати -ing: правила написання',
        en: 'Spelling rules for -ing',
      },
      body: {
        ru: 'Большинство глаголов просто добавляют -ing. Но есть четыре важных случая.',
        ua: 'Більшість дієслів просто додають -ing. Але є чотири важливі випадки.',
        en: 'Most verbs just add -ing. But there are four important cases.',
      },
      table: {
        head: ['Правило', 'Пример'],
        rows: [
          ['-e на конце → убираем -e + -ing', 'make → making, write → writing'],
          ['краткий ударный слог: согласная + гласная + согласная → удваиваем согласную', 'run → running, swim → swimming'],
          ['-l на конце (British English) → удваиваем l', 'travel → travelling'],
          ['-ie на конце → меняем на -y + -ing', 'lie → lying, die → dying'],
        ],
      },
      note: {
        ru: 'Глаголы, которые НЕ удваивают согласную: open → opening, visit → visiting, listen → listening (не краткий слог).',
        ua: 'Дієслова, які НЕ подвоюють приголосну: open → opening, visit → visiting, listen → listening (не короткий склад).',
        en: 'Verbs that do NOT double the consonant: open → opening, visit → visiting, listen → listening (the syllable is not stressed).',
      },
    },
    {
      heading: {
        ru: 'Present Simple: привычки и факты',
        ua: 'Present Simple: звички та факти',
        en: 'Present Simple: habits and facts',
      },
      body: {
        ru: 'Это настоящее простое время. Мы используем его для привычек, регулярных действий, расписаний и общих фактов. Форма: глагол в начальной форме; с he / she /it добавляем -s или -es.\nПримеры: I drink coffee every morning. She works in a hospital. The sun rises in the east.',
        ua: 'Це теперішній простий час. Ми використовуємо його для звичок, регулярних дій, розкладів і загальних фактів. Форма: дієслово в початковій формі; з he / she / it додаємо -s або -es.\nПриклади: I drink coffee every morning. She works in a hospital. The sun rises in the east.',
        en: 'We use the present simple for habits, regular actions, timetables and general facts. Form: the base form of the verb; with he / she / it add -s or -es.\nExamples: I drink coffee every morning. She works in a hospital. The sun rises in the east.',
      },
      table: {
        head: ['', 'Утверждение', 'Отрицание', 'Вопрос'],
        rows: [
          ['I / You / We / They', 'work', "don't work", 'Do I work?'],
          ['He / She / It', 'works', "doesn't work", 'Does she work?'],
        ],
      },
      note: {
        ru: 'Маркеры: always, usually, often, sometimes, never, every day/week, on Mondays. После does / doesn\'t глагол стоит без -s: She doesn\'t like tea.',
        ua: 'Маркери: always, usually, often, sometimes, never, every day/week, on Mondays. Після does / doesn\'t дієслово стоїть без -s: She doesn\'t like tea.',
        en: 'Time markers: always, usually, often, sometimes, never, every day/week, on Mondays. After does / doesn\'t the verb has no -s: She doesn\'t like tea.',
      },
    },
    {
      heading: {
        ru: 'Главное различие и глаголы состояния',
        ua: 'Головна відмінність та дієслова стану',
        en: 'The key difference and state verbs',
      },
      body: {
        ru: 'Present Simple — происходит всегда или регулярно. Present Continuous — происходит сейчас, временно или запланировано.\nНекоторые глаголы описывают не действие, а состояние (любить, знать, хотеть, понимать, принадлежать). Обычно они не используются в Present Continuous.',
        ua: 'Present Simple — відбувається завжди або регулярно. Present Continuous — відбувається зараз, тимчасово або заплановано.\nДеякі дієслова описують не дію, а стан (любити, знати, хотіти, розуміти, належати). Зазвичай вони не використовуються в Present Continuous.',
        en: 'Present simple = always or regularly. Present continuous = now, temporary or arranged.\nSome verbs describe a state, not an action (like, know, want, understand, belong). They are usually not used in the present continuous.',
      },
      table: {
        head: ['Present Simple', 'Present Continuous'],
        rows: [
          ['She works in a bank. (постоянно)', 'She is working from home today. (временно)'],
          ['I live in Kyiv. (факт)', 'I am living with my parents this month. (временно)'],
        ],
      },
      note: {
        ru: 'Частая ошибка: ❌ I am knowing him. ✅ I know him. ❌ She is having a car. ✅ She has a car.',
        ua: 'Часта помилка: ❌ I am knowing him. ✅ I know him. ❌ She is having a car. ✅ She has a car.',
        en: 'Typical mistakes: ❌ I am knowing him. ✅ I know him. ❌ She is having a car. ✅ She has a car.',
      },
    },
  ],
  exercises: [
    {
      id: 'u1-warmup',
      title: { ru: 'Разминка: формы Present Continuous', ua: 'Розминка: форми Present Continuous', en: 'Warm-up: present continuous forms' },
      level: 'warmup',
      items: [
        {
          type: 'gap', id: 'u1w1',
          before: 'Look! The children', after: 'football in the yard. (play)',
          answer: ['are playing'],
          explain: {
            ru: 'Действие происходит прямо сейчас (Look!) → Present Continuous: are + playing.',
            ua: 'Дія відбувається просто зараз (Look!) → Present Continuous: are + playing.',
            en: 'The action is happening right now (Look!) → present continuous: are + playing.',
          },
        },
        {
          type: 'gap', id: 'u1w2',
          before: 'I', after: 'TV at the moment. (not watch)',
          answer: ["am not watching", "m not watching"],
          explain: {
            ru: 'at the moment → Present Continuous. Отрицание с I: am not + watching.',
            ua: 'at the moment → Present Continuous. Заперечення з I: am not + watching.',
            en: '“At the moment” → present continuous. Negative with I: am not + watching.',
          },
        },
        {
          type: 'gap', id: 'u1w3',
          before: 'Listen! Someone', after: 'in the bathroom. (sing)',
          answer: ['is singing'],
          explain: {
            ru: 'Listen! — сигнал действия прямо сейчас. Someone = he/she → is singing.',
            ua: 'Listen! — сигнал дії просто зараз. Someone = he/she → is singing.',
            en: '“Listen!” signals an action happening now. Someone = he/she → is singing.',
          },
        },
        {
          type: 'gap', id: 'u1w4',
          before: 'They', after: 'around Spain this week. (travel)',
          answer: ['are travelling', 'are traveling'],
          explain: {
            ru: 'this week — временное действие вокруг настоящего момента. В British English: travelling (удвоенное l).',
            ua: 'this week — тимчасова дія навколо теперішнього моменту. В British English: travelling (подвоєне l).',
            en: '“This week” = a temporary action around now. British spelling: travelling (double l).',
          },
        },
        {
          type: 'gap', id: 'u1w5',
          before: 'We', after: "our new teacher at four o'clock today. (meet)",
          answer: ['are meeting'],
          explain: {
            ru: 'Действие запланировано (встреча в 4) → Present Continuous.',
            ua: 'Дія запланована (зустріч о 4) → Present Continuous.',
            en: 'A fixed arrangement (a meeting at four) → present continuous.',
          },
        },
        {
          type: 'gap', id: 'u1w6',
          before: 'Why', after: 'so fast? You will be late! (you run)',
          answer: ['are you running', 'you running'],
          explain: {
            ru: 'Вопрос в Present Continuous: Why + are you + running. Удваиваем n: run → running.',
            ua: 'Питання в Present Continuous: Why + are you + running. Подвоюємо n: run → running.',
            en: 'Present continuous question: Why + are you + running. Double n: run → running.',
          },
        },
        {
          type: 'match', id: 'u1w7',
          left: ['Look!', 'every Monday', 'last summer', 'just'],
          right: ['Present Continuous', 'Present Simple', 'Past Simple', 'Present Perfect'],
          pairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
          explain: {
            ru: 'Look! — действие сейчас (Continuous), every Monday — привычка (Simple), last summer — завершённое прошлое (Past Simple), just — результат (Present Perfect).',
            ua: 'Look! — дія зараз (Continuous), every Monday — звичка (Simple), last summer — завершене минуле (Past Simple), just — результат (Present Perfect).',
            en: '“Look!” — now (continuous), “every Monday” — habit (simple), “last summer” — finished past (past simple), “just” — a fresh result (present perfect).',
          },
        },
      ],
    },
    {
      id: 'u1-core',
      title: { ru: 'Практика: Continuous или Simple?', ua: 'Практика: Continuous чи Simple?', en: 'Core practice: continuous or simple?' },
      level: 'core',
      intro: {
        ru: 'Реши, какое время нужно: привычка и факт (Simple) или действие сейчас (Continuous).',
        ua: 'Виріши, який час потрібен: звичка і факт (Simple) чи дія зараз (Continuous).',
        en: 'Decide: habit or fact (simple) versus action happening now (continuous).',
      },
      items: [
        {
          type: 'gap', id: 'u1c1',
          before: 'Water', after: 'at 100°C. (boil)',
          answer: ['boils'],
          explain: {
            ru: 'Это научный факт → Present Simple: water = it → boils.',
            ua: 'Це науковий факт → Present Simple: water = it → boils.',
            en: 'A scientific fact → present simple: water = it → boils.',
          },
        },
        {
          type: 'gap', id: 'u1c2',
          before: 'Shh! The baby', after: '. (sleep)',
          answer: ['is sleeping'],
          explain: {
            ru: 'Действие происходит прямо сейчас → is sleeping.',
            ua: 'Дія відбувається просто зараз → is sleeping.',
            en: 'Happening right now → is sleeping.',
          },
        },
        {
          type: 'choice', id: 'u1c3',
          question: 'She always ______ her keys somewhere.',
          options: ['loses', 'is losing', 'lose', 'lost'],
          correct: 'loses',
          explain: {
            ru: 'always + регулярная привычка → Present Simple. She → loses (с -s).',
            ua: 'always + регулярна звичка → Present Simple. She → loses (з -s).',
            en: '“Always” + a regular habit → present simple. She → loses (with -s).',
          },
        },
        {
          type: 'gap', id: 'u1c4',
          before: 'My dad usually', after: 'in a bank, but today he is at home. (work)',
          answer: ['works'],
          explain: {
            ru: 'usually + постоянная работа → Present Simple: works.',
            ua: 'usually + постійна робота → Present Simple: works.',
            en: '“Usually” + a permanent job → present simple: works.',
          },
        },
        {
          type: 'gap', id: 'u1c5',
          before: 'My dad is at home now. Look, he', after: 'in the garden. (work)',
          answer: ['is working'],
          explain: {
            ru: 'now + Look! → действие прямо сейчас: is working.',
            ua: 'now + Look! → дія просто зараз: is working.',
            en: '“Now” + “Look!” → action right now: is working.',
          },
        },
        {
          type: 'choice', id: 'u1c6',
          question: '"What ______?" "I am a student."',
          options: ['do you do', 'are you doing', 'does you do', 'are you do'],
          correct: 'do you do',
          explain: {
            ru: 'Вопрос о профессии — факт, не действие сейчас → What do you do?',
            ua: 'Питання про професію — факт, не дія зараз → What do you do?',
            en: 'Asking about a job = a fact, not a current action → What do you do?',
          },
        },
        {
          type: 'gap', id: 'u1c7',
          before: 'I', after: "this rule. Can you explain it again? (not understand)",
          answer: ["don't understand", 'do not understand'],
          explain: {
            ru: 'understand — глагол состояния, обычно без Continuous → don\'t understand.',
            ua: 'understand — дієслово стану, зазвичай без Continuous → don\'t understand.',
            en: '“Understand” is a state verb, usually not continuous → don\'t understand.',
          },
        },
        {
          type: 'choice', id: 'u1c8',
          question: 'Look at the sky! It ______ to rain.',
          options: ['is starting', 'starts', 'start', 'starting'],
          correct: 'is starting',
          explain: {
            ru: 'Look at the sky! — изменение происходит прямо сейчас → is starting.',
            ua: 'Look at the sky! — зміна відбувається просто зараз → is starting.',
            en: '“Look at the sky!” — a change happening right now → is starting.',
          },
        },
      ],
    },
    {
      id: 'u1-challenge',
      title: { ru: 'Вызов: собери и перепиши', ua: 'Виклик: склади і перепиши', en: 'Challenge: build and rewrite' },
      level: 'challenge',
      items: [
        {
          type: 'build', id: 'u1h1',
          words: ['always', 'late', 'is', 'He', 'for', 'work'],
          answer: 'He is always late for work',
          explain: {
            ru: 'always + Present Simple с глаголом to be: He is always late for work.',
            ua: 'always + Present Simple з дієсловом to be: He is always late for work.',
            en: '“Always” + present simple with the verb to be: He is always late for work.',
          },
        },
        {
          type: 'gap', id: 'u1h2',
          before: 'This soup', after: 'delicious! (taste)',
          answer: ['tastes'],
          explain: {
            ru: 'taste (иметь вкус) — глагол состояния → Present Simple: tastes.',
            ua: 'taste (мати смак) — дієслово стану → Present Simple: tastes.',
            en: '“Taste” (have a flavour) is a state verb → present simple: tastes.',
          },
        },
        {
          type: 'transform', id: 'u1h3',
          instruction: {
            ru: 'Сделай предложение отрицательным:',
            ua: 'Зроби речення заперечним:',
            en: 'Make the sentence negative:',
          },
          source: 'She plays the piano.',
          answer: ["She doesn't play the piano", 'She does not play the piano'],
          explain: {
            ru: 'Отрицание в Present Simple: doesn\'t + глагол без -s → doesn\'t play.',
            ua: 'Заперечення в Present Simple: doesn\'t + дієслово без -s → doesn\'t play.',
            en: 'Negative in present simple: doesn\'t + verb without -s → doesn\'t play.',
          },
        },
        {
          type: 'choice', id: 'u1h4',
          question: 'We ______ to the cinema tonight. We have got tickets.',
          options: ['are going', 'go', 'goes', 'going'],
          correct: 'are going',
          explain: {
            ru: 'tonight + куплены билеты = запланировано → Present Continuous: are going.',
            ua: 'tonight + куплені квитки = заплановано → Present Continuous: are going.',
            en: '“Tonight” + tickets bought = an arrangement → present continuous: are going.',
          },
        },
        {
          type: 'build', id: 'u1h5',
          words: ['at the moment', 'am', 'I', 'not', 'very hard', 'working'],
          answer: 'I am not working very hard at the moment',
          explain: {
            ru: 'at the moment → Present Continuous. Порядок: I am not working very hard at the moment.',
            ua: 'at the moment → Present Continuous. Порядок: I am not working very hard at the moment.',
            en: '“At the moment” → present continuous. Order: I am not working very hard at the moment.',
          },
        },
      ],
    },
  ],
};
