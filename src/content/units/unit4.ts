import type { Unit } from '@/types/exercise';

export const unit4: Unit = {
  id: 4,
  title: {
    en: 'Present Perfect',
    ru: 'Present Perfect',
    ua: 'Present Perfect',
  },
  color: '#4788ED',
  colorSoft: '#E1EBFD',
  theory: [
    {
      heading: {
        ru: 'Present Perfect: прошлое, связанное с настоящим',
        ua: 'Present Perfect: минуле, пов\'язане з теперішнім',
        en: 'Present Perfect: the past connected to now',
      },
      body: {
        ru: 'Это настоящее совершенное время: действие было в прошлом, но важен его результат сейчас. Форма: have / has + третья форма глагола (V3).\nПримеры: I have lost my keys. (потерял — и сейчас их нет) She has broken her leg. (сломала — и сейчас нога в гипсе)',
        ua: 'Це теперішній доконаний час: дія була в минулому, але важливий її результат зараз. Форма: have / has + третя форма дієслова (V3).\nПриклади: I have lost my keys. (загубив — і зараз їх немає) She has broken her leg. (зламала — і зараз нога в гіпсі)',
        en: 'The present perfect connects the past to now: the action happened in the past, but the result matters now. Form: have / has + the third form of the verb (V3).\nExamples: I have lost my keys. (lost — and I still can\'t find them) She has broken her leg. (broken — and the leg is still in plaster)',
      },
      table: {
        head: ['', 'Утверждение', 'Отрицание', 'Вопрос'],
        rows: [
          ['I / You / We / They', 'have worked', "haven't worked", 'Have you worked?'],
          ['He / She / It', 'has worked', "hasn't worked", 'Has she worked?'],
        ],
      },
      note: {
        ru: 'Третья форма правильных глаголов = -ed (worked); неправильных — из таблицы: see → seen, eat → eaten, go → gone/been, buy → bought.',
        ua: 'Третя форма правильних дієслів = -ed (worked); неправильних — з таблиці: see → seen, eat → eaten, go → gone/been, buy → bought.',
        en: 'V3 of regular verbs = -ed (worked); irregular verbs come from the table: see → seen, eat → eaten, go → gone/been, buy → bought.',
      },
    },
    {
      heading: {
        ru: 'Ключевые слова: just, already, yet, ever, never',
        ua: 'Ключові слова: just, already, yet, ever, never',
        en: 'Key words: just, already, yet, ever, never',
      },
      body: {
        ru: 'just — «только что»: I have just eaten. (едва успел, результат свежий)\nalready — «уже» (в утверждении и вопросе): She has already left.\nyet — «ещё» (в отрицании и вопросе, в конце): I haven\'t finished yet. Have you finished yet?\never — «когда-либо» (вопрос): Have you ever been to Scotland?\nnever — «никогда» (между have и V3): I have never eaten oysters.',
        ua: 'just — «щойно»: I have just eaten. (ледве встиг, результат свіжий)\nalready — «вже» (в ствердженні і питанні): She has already left.\nyet — «ще» (в запереченні і питанні, наприкінці): I haven\'t finished yet. Have you finished yet?\never — «коли-небудь» (питання): Have you ever been to Scotland?\nnever — «ніколи» (між have і V3): I have never eaten oysters.',
        en: 'just — “a moment ago”: I have just eaten.\nalready — “by now” (in statements and questions): She has already left.\nyet — “so far” (in negatives and questions, at the end): I haven\'t finished yet. Have you finished yet?\never — “at any time” (questions): Have you ever been to Scotland?\nnever — “not at any time” (between have and V3): I have never eaten oysters.',
      },
      note: {
        ru: 'ever и never НЕ работают с Past Simple: ❌ Did you ever seen...? ✅ Have you ever seen...?',
        ua: 'ever і never НЕ працюють з Past Simple: ❌ Did you ever seen...? ✅ Have you ever seen...?',
        en: 'ever and never do NOT work with the past simple: ❌ Did you ever seen...? ✅ Have you ever seen...?',
      },
    },
    {
      heading: {
        ru: 'Present Perfect vs Past Simple — главное различие',
        ua: 'Present Perfect vs Past Simple — головна відмінність',
        en: 'Present Perfect vs Past Simple — the key difference',
      },
      body: {
        ru: 'Past Simple отвечает на вопрос «КОГДА?» — время указано: I saw him yesterday. Present Perfect говорит о РЕЗУЛЬТАТЕ, время не уточняется: I have seen him. (неважно когда)\nПоэтому: ❌ I have seen him yesterday. ✅ I saw him yesterday.\nfor + период (for two years), since + точка (since 2020) — только с Present Perfect: We have lived here since 2018.',
        ua: 'Past Simple відповідає на питання «КОЛИ?» — час зазначено: I saw him yesterday. Present Perfect говорить про РЕЗУЛЬТАТ, час не уточнюється: I have seen him. (неважливо коли)\nТому: ❌ I have seen him yesterday. ✅ I saw him yesterday.\nfor + період (for two years), since + точка (since 2020) — тільки з Present Perfect: We have lived here since 2018.',
        en: 'The past simple answers “WHEN?” — the time is given: I saw him yesterday. The present perfect is about the RESULT, with no exact time: I have seen him. (when does not matter)\nSo: ❌ I have seen him yesterday. ✅ I saw him yesterday.\nfor + a period (for two years), since + a starting point (since 2020) — only with the present perfect: We have lived here since 2018.',
      },
      table: {
        head: ['Present Perfect (результат)', 'Past Simple (время указано)'],
        rows: [
          ['I have lost my keys. (их нет сейчас)', 'I lost my keys yesterday. (когда — вчера)'],
          ['She has been to Italy. (опыт)', 'She went to Italy in 2019. (конкретный год)'],
        ],
      },
      note: {
        ru: 'been vs gone: He has been to Paris. (был и вернулся) He has gone to Paris. (уехал и ещё там).',
        ua: 'been vs gone: He has been to Paris. (був і повернувся) He has gone to Paris. (поїхав і досі там).',
        en: 'been vs gone: He has been to Paris. (went and came back) He has gone to Paris. (went and is still there).',
      },
    },
  ],
  exercises: [
    {
      id: 'u4-warmup',
      title: { ru: 'Разминка: формы Present Perfect', ua: 'Розминка: форми Present Perfect', en: 'Warm-up: present perfect forms' },
      level: 'warmup',
      items: [
        {
          type: 'gap', id: 'u4w1',
          before: 'I', after: 'my homework. (just finish)',
          answer: ['have just finished'],
          explain: {
            ru: 'just → Present Perfect: have just + V3 → have just finished.',
            ua: 'just → Present Perfect: have just + V3 → have just finished.',
            en: '“Just” → present perfect: have just + V3 → have just finished.',
          },
        },
        {
          type: 'gap', id: 'u4w2',
          before: 'She', after: 'the sea. She really wants to go to the coast. (never see)',
          answer: ['has never seen'],
          explain: {
            ru: 'never встает между has и V3: has never seen.',
            ua: 'never стає між has і V3: has never seen.',
            en: '“Never” goes between has and V3: has never seen.',
          },
        },
        {
          type: 'gap', id: 'u4w3',
          before: '', after: 'sushi? Yes, many times! (you ever eat)',
          answer: ['have you ever eaten'],
          explain: {
            ru: 'Опыт — вопрос с ever: Have you ever + V3 (eat → eaten)?',
            ua: 'Досвід — питання з ever: Have you ever + V3 (eat → eaten)?',
            en: 'Experience — a question with ever: Have you ever + V3 (eat → eaten)?',
          },
        },
        {
          type: 'gap', id: 'u4w4',
          before: 'We', after: 'yet. It is a difficult choice. (not decide)',
          answer: ["haven't decided", 'have not decided'],
          explain: {
            ru: 'yet в отрицании → Present Perfect: haven\'t decided.',
            ua: 'yet у запереченні → Present Perfect: haven\'t decided.',
            en: '“Yet” in a negative → present perfect: haven\'t decided.',
          },
        },
        {
          type: 'gap', id: 'u4w5',
          before: 'He', after: 'the building. You cannot speak to him now. (already leave)',
          answer: ['has already left'],
          explain: {
            ru: 'already → has already + V3: has already left (результат — его нет).',
            ua: 'already → has already + V3: has already left (результат — його немає).',
            en: '“Already” → has already + V3: has already left (the result: he is not here).',
          },
        },
        {
          type: 'gap', id: 'u4w6',
          before: 'They', after: 'to London twice. They loved it. (be)',
          answer: ['have been'],
          explain: {
            ru: 'Опыт (twice) + вернулись → have been to.',
            ua: 'Досвід (twice) + повернулися → have been to.',
            en: 'Experience (twice) + they are back → have been to.',
          },
        },
        {
          type: 'match', id: 'u4w7',
          left: ['I have just eaten.', "I haven't finished yet.", 'She has already left.', 'Have you ever been to Japan?'],
          right: ['just', 'yet', 'already', 'ever'],
          pairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
          explain: {
            ru: 'just и already — в середине (между have и V3), yet — в конце отрицания/вопроса, ever — в вопросе.',
            ua: 'just і already — у середині (між have і V3), yet — наприкінці заперечення/питання, ever — у питанні.',
            en: '“Just” and “already” sit in the middle (between have and V3), “yet” ends negatives and questions, “ever” appears in questions.',
          },
        },
      ],
    },
    {
      id: 'u4-core',
      title: { ru: 'Практика: Perfect или Simple?', ua: 'Практика: Perfect чи Simple?', en: 'Core practice: perfect or simple?' },
      level: 'core',
      intro: {
        ru: 'Результат и опыт — Present Perfect. Указано время — Past Simple.',
        ua: 'Результат і досвід — Present Perfect. Зазначено час — Past Simple.',
        en: 'Result and experience → present perfect. Time given → past simple.',
      },
      items: [
        {
          type: 'choice', id: 'u4c1',
          question: 'I ______ this film three times. I love it!',
          options: ['have seen', 'saw', 'see', 'am seeing'],
          correct: 'have seen',
          explain: {
            ru: 'Опыт без указания времени → Present Perfect: have seen.',
            ua: 'Досвід без зазначення часу → Present Perfect: have seen.',
            en: 'Experience with no time given → present perfect: have seen.',
          },
        },
        {
          type: 'gap', id: 'u4c2',
          before: 'I', after: 'this film last Friday at the cinema. (see)',
          answer: ['saw'],
          explain: {
            ru: 'last Friday — время указано → Past Simple: saw.',
            ua: 'last Friday — час зазначено → Past Simple: saw.',
            en: '“Last Friday” — the time is given → past simple: saw.',
          },
        },
        {
          type: 'choice', id: 'u4c3',
          question: 'Where is John? He ______ to the shop. He will be back soon.',
          options: ['has gone', 'has been', 'went', 'goes'],
          correct: 'has gone',
          explain: {
            ru: 'Его нет сейчас (результат) → has gone to (уехал и ещё там).',
            ua: 'Його немає зараз (результат) → has gone to (поїхав і досі там).',
            en: 'He is not here now (result) → has gone to (he left and is still there).',
          },
        },
        {
          type: 'gap', id: 'u4c4',
          before: 'We', after: 'each other since 2015. We are good friends. (know)',
          answer: ['have known'],
          explain: {
            ru: 'since + год → Present Perfect: have known (know → known).',
            ua: 'since + рік → Present Perfect: have known (know → known).',
            en: '“Since” + a year → present perfect: have known (know → known).',
          },
        },
        {
          type: 'choice', id: 'u4c5',
          question: '"______?" "In 2010."',
          options: ['When did you move here', 'When have you moved here', 'When you moved here', 'When do you move here'],
          correct: 'When did you move here',
          explain: {
            ru: 'Ответ «In 2010» указывает время → Past Simple: When did you move here?',
            ua: 'Відповідь «In 2010» зазначає час → Past Simple: When did you move here?',
            en: 'The answer “In 2010” gives the time → past simple: When did you move here?',
          },
        },
        {
          type: 'gap', id: 'u4c6',
          before: 'She', after: 'here for ten years. She loves her job. (work)',
          answer: ['has worked', 'has been working'],
          explain: {
            ru: 'for + период до настоящего → Present Perfect: has worked.',
            ua: 'for + період до теперішнього → Present Perfect: has worked.',
            en: '“For” + a period up to now → present perfect: has worked.',
          },
        },
        {
          type: 'gap', id: 'u4c7',
          before: 'I', after: "my phone. I can't find it anywhere. (lose)",
          answer: ['have lost'],
          explain: {
            ru: 'Результат сейчас (не могу найти) → Present Perfect: have lost.',
            ua: 'Результат зараз (не можу знайти) → Present Perfect: have lost.',
            en: 'A present result (I can\'t find it) → present perfect: have lost.',
          },
        },
        {
          type: 'transform', id: 'u4c8',
          instruction: {
            ru: 'Сделай предложение отрицательным:',
            ua: 'Зроби речення заперечним:',
            en: 'Make the sentence negative:',
          },
          source: 'He has eaten all the cake.',
          answer: ["He hasn't eaten all the cake", 'He has not eaten all the cake'],
          explain: {
            ru: 'Отрицание: hasn\'t + V3 → He hasn\'t eaten all the cake.',
            ua: 'Заперечення: hasn\'t + V3 → He hasn\'t eaten all the cake.',
            en: 'Negative: hasn\'t + V3 → He hasn\'t eaten all the cake.',
          },
        },
      ],
    },
    {
      id: 'u4-challenge',
      title: { ru: 'Вызов: говорим о результатах', ua: 'Виклик: говоримо про результати', en: 'Challenge: talking about results' },
      level: 'challenge',
      items: [
        {
          type: 'build', id: 'u4h1',
          words: ['yet', 'finished', 'her project', "hasn't", 'She'],
          answer: "She hasn't finished her project yet",
          explain: {
            ru: "Отрицание с yet: She hasn't finished her project yet (yet — в конце).",
            ua: "Заперечення з yet: She hasn't finished her project yet (yet — наприкінці).",
            en: "Negative with yet: She hasn't finished her project yet (yet goes at the end).",
          },
        },
        {
          type: 'gap', id: 'u4h2',
          before: 'This is the first time I', after: 'a car. I am a bit nervous. (drive)',
          answer: ['have driven'],
          explain: {
            ru: 'This is the first time + Present Perfect: have driven (drive → driven).',
            ua: 'This is the first time + Present Perfect: have driven (drive → driven).',
            en: '“This is the first time” + present perfect: have driven (drive → driven).',
          },
        },
        {
          type: 'choice', id: 'u4h3',
          question: '"______?" "Yes, I have been there twice. It is wonderful."',
          options: ['Have you ever been to Paris', 'Did you ever go to Paris', 'Do you ever go to Paris', 'Are you ever in Paris'],
          correct: 'Have you ever been to Paris',
          explain: {
            ru: 'Вопрос об опыте с ever → Present Perfect: Have you ever been to...?',
            ua: 'Питання про досвід з ever → Present Perfect: Have you ever been to...?',
            en: 'A question about experience with ever → present perfect: Have you ever been to...?',
          },
        },
        {
          type: 'transform', id: 'u4h4',
          instruction: {
            ru: 'Перепиши предложение, добавив already:',
            ua: 'Перепиши речення, додавши already:',
            en: 'Rewrite the sentence adding "already":',
          },
          source: 'I have finished the report.',
          answer: ['I have already finished the report'],
          explain: {
            ru: 'already встает между have и V3: I have already finished the report.',
            ua: 'already стає між have і V3: I have already finished the report.',
            en: '“Already” goes between have and V3: I have already finished the report.',
          },
        },
        {
          type: 'gap', id: 'u4h5',
          before: 'My parents', after: 'married for 25 years. (be)',
          answer: ['have been'],
          explain: {
            ru: 'for + период + состояние до сих пор → have been.',
            ua: 'for + період + стан досі → have been.',
            en: '“For” + a period + a state that continues → have been.',
          },
        },
      ],
    },
  ],
};
