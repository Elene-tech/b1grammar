import type { Roundup } from '@/types/exercise';

export const roundup1: Roundup = {
  id: 1,
  title: { en: 'Round-up 1 (Units 1–5)', ru: 'Повторение 1 (Units 1–5)', ua: 'Повторення 1 (Units 1–5)' },
  covers: [1, 2, 3, 4, 5],
  intro: {
    ru: 'Смешанные задания по всем темам юнитов 1–5. Вопросы идут в случайном порядке и с разной сложностью — внимательно читай маркеры времени!',
    ua: 'Змішані завдання за всіма темами юнітів 1–5. Питання йдуть у випадковому порядку та з різною складністю — уважно читай маркери часу!',
    en: 'Mixed tasks from all the topics of Units 1–5. Questions come in random order and varying difficulty — read the time markers carefully!',
  },
  exercises: [
    {
      id: 'r1-check',
      title: { ru: 'Проверка: вспоминаем всё', ua: 'Перевірка: згадуємо все', en: 'Check-up: remembering it all' },
      level: 'warmup',
      items: [
        {
          type: 'choice', id: 'r1a1',
          question: 'My sister ______ yoga every morning before work.',
          options: ['practises', 'practise', 'is practising', 'practising'],
          correct: 'practises',
          explain: {
            ru: 'every morning — привычка → Present Simple, she → practises.',
            ua: 'every morning — звичка → Present Simple, she → practises.',
            en: '“Every morning” — a habit → present simple, she → practises.',
          },
        },
        {
          type: 'gap', id: 'r1a2',
          before: 'They', after: 'house last month. The new flat is bigger. (move)',
          answer: ['moved'],
          explain: {
            ru: 'last month → Past Simple: moved.',
            ua: 'last month → Past Simple: moved.',
            en: '“Last month” → past simple: moved.',
          },
        },
        {
          type: 'gap', id: 'r1a3',
          before: 'What', after: 'when I called you? You sounded busy. (you do)',
          answer: ['were you doing'],
          explain: {
            ru: 'Процесс в момент звонка → were you doing.',
            ua: 'Процес в момент дзвінка → were you doing.',
            en: 'A process at the moment of the call → were you doing.',
          },
        },
        {
          type: 'gap', id: 'r1a4',
          before: 'I', after: 'that exhibition. Let\'s go and see something else. (already see)',
          answer: ['have already seen'],
          explain: {
            ru: 'already → Present Perfect: have already seen (результат: смотреть повторно не хочется).',
            ua: 'already → Present Perfect: have already seen (результат: дивитися повторно не хочеться).',
            en: '“Already” → present perfect: have already seen.',
          },
        },
        {
          type: 'choice', id: 'r1a5',
          question: '"I have decided to tidy my room." "Wait, I ______ you!"',
          options: ['will help', 'am going to help', 'help', 'helping'],
          correct: 'will help',
          explain: {
            ru: 'Спонтанное предложение помощи → will help.',
            ua: 'Спонтанна пропозиція допомоги → will help.',
            en: 'A spontaneous offer of help → will help.',
          },
        },
        {
          type: 'gap', id: 'r1a6',
          before: 'Be quiet! The exam', after: '. (begin)',
          answer: ['is beginning'],
          explain: {
            ru: 'Be quiet! — действие прямо сейчас → is beginning.',
            ua: 'Be quiet! — дія просто зараз → is beginning.',
            en: '“Be quiet!” — an action right now → is beginning.',
          },
        },
        {
          type: 'gap', id: 'r1a7',
          before: 'We', after: 'chess every evening when we were students. (use to play)',
          answer: ['used to play'],
          explain: {
            ru: 'Привычка из прошлого (were students) → used to play.',
            ua: 'Звичка з минулого (were students) → used to play.',
            en: 'A past habit (were students) → used to play.',
          },
        },
        {
          type: 'gap', id: 'r1a8',
          before: 'She', after: 'in this company since 2019. (be)',
          answer: ['has been'],
          explain: {
            ru: 'since + год → Present Perfect: has been.',
            ua: 'since + рік → Present Perfect: has been.',
            en: '“Since” + a year → present perfect: has been.',
          },
        },
      ],
    },
    {
      id: 'r1-mix',
      title: { ru: 'Микс: времена в действии', ua: 'Мікс: часи в дії', en: 'Mix: tenses in action' },
      level: 'core',
      items: [
        {
          type: 'choice', id: 'r1b1',
          question: 'Did they ______ the museum yesterday afternoon?',
          options: ['visit', 'visited', 'visiting', 'visits'],
          correct: 'visit',
          explain: {
            ru: 'После Did — начальная форма: visit.',
            ua: 'Після Did — початкова форма: visit.',
            en: 'After “Did” — the base form: visit.',
          },
        },
        {
          type: 'gap', id: 'r1b2',
          before: 'I think I', after: 'home this evening. I am really tired. (stay)',
          answer: ['will stay', "'ll stay"],
          explain: {
            ru: 'Решение, принятое в момент речи → will stay.',
            ua: 'Рішення, прийняте у момент мовлення → will stay.',
            en: 'A decision made while speaking → will stay.',
          },
        },
        {
          type: 'transform', id: 'r1b3',
          instruction: {
            ru: 'Перепиши предложение, добавив already:',
            ua: 'Перепиши речення, додавши already:',
            en: 'Rewrite the sentence adding "already":',
          },
          source: 'I have finished my essay.',
          answer: ['I have already finished my essay'],
          explain: {
            ru: 'already между have и V3: I have already finished my essay.',
            ua: 'already між have і V3: I have already finished my essay.',
            en: '“Already” goes between have and V3: I have already finished my essay.',
          },
        },
        {
          type: 'gap', id: 'r1b4',
          before: 'While we', after: 'for the train, we drank some coffee. (wait)',
          answer: ['were waiting'],
          explain: {
            ru: 'while + длинный процесс → were waiting.',
            ua: 'while + довгий процес → were waiting.',
            en: 'while + a long process → were waiting.',
          },
        },
        {
          type: 'choice', id: 'r1b5',
          question: 'He ______ his bike to work every day, but today he ______ the bus.',
          options: ['rides / is taking', 'is riding / takes', 'ride / is taking', 'rides / takes'],
          correct: 'rides / is taking',
          explain: {
            ru: 'every day → rides (привычка); today + временная ситуация → is taking.',
            ua: 'every day → rides (звичка); today + тимчасова ситуація → is taking.',
            en: '“Every day” → rides (habit); “today” + a temporary situation → is taking.',
          },
        },
        {
          type: 'gap', id: 'r1b6',
          before: '', after: 'to Edinburgh? It is one of the most beautiful cities I know. (you ever be)',
          answer: ['have you ever been'],
          explain: {
            ru: 'Вопрос об опыте → Have you ever been to...?',
            ua: 'Питання про досвід → Have you ever been to...?',
            en: 'A question about experience → Have you ever been to...?',
          },
        },
        {
          type: 'build', id: 'r1b7',
          words: ['a letter', 'wrote', 'to his friend', 'He', 'yesterday'],
          answer: 'He wrote a letter to his friend yesterday',
          explain: {
            ru: 'Порядок: He wrote a letter to his friend yesterday (время в конце).',
            ua: 'Порядок: He wrote a letter to his friend yesterday (час наприкінці).',
            en: 'Order: He wrote a letter to his friend yesterday (time at the end).',
          },
        },
        {
          type: 'gap', id: 'r1b8',
          before: 'The concert', after: 'at 8 pm according to the programme. (start)',
          answer: ['starts'],
          explain: {
            ru: 'Программа/расписание → Present Simple: starts.',
            ua: 'Програма/розклад → Present Simple: starts.',
            en: 'A programme/timetable → present simple: starts.',
          },
        },
      ],
    },
    {
      id: 'r1-test',
      title: { ru: 'Мини-тест: проверь себя на прочность', ua: 'Міні-тест: перевір себе на міцність', en: 'Mini-test: test yourself properly' },
      level: 'challenge',
      items: [
        {
          type: 'gap', id: 'r1c1',
          before: 'I', after: 'Anna for ages — since we were five! (know)',
          answer: ['have known'],
          explain: {
            ru: 'since + прошлая точка → Present Perfect: have known.',
            ua: 'since + минула точка → Present Perfect: have known.',
            en: '“Since” + a past starting point → present perfect: have known.',
          },
        },
        {
          type: 'choice', id: 'r1c2',
          question: 'When the teacher came in, the students ______.',
          options: ['were talking', 'talked', 'talk', 'had talked'],
          correct: 'were talking',
          explain: {
            ru: 'Процесс, прерванный событием (came in) → were talking.',
            ua: 'Процес, перерваний подією (came in) → were talking.',
            en: 'A process interrupted by an event (came in) → were talking.',
          },
        },
        {
          type: 'gap', id: 'r1c3',
          before: 'Look! That man', after: 'your bike! Call the police! (steal)',
          answer: ['is stealing'],
          explain: {
            ru: 'Look! — действие прямо сейчас → is stealing.',
            ua: 'Look! — дія просто зараз → is stealing.',
            en: '“Look!” — an action happening now → is stealing.',
          },
        },
        {
          type: 'choice', id: 'r1c4',
          question: 'We decided yesterday that we ______ a picnic at the weekend.',
          options: ['are going to have', 'have', 'will have', 'having'],
          correct: 'are going to have',
          explain: {
            ru: 'Решение принято до момента речи (decided yesterday) → are going to have.',
            ua: 'Рішення прийнято до моменту мовлення (decided yesterday) → are going to have.',
            en: 'A decision made before speaking (decided yesterday) → are going to have.',
          },
        },
        {
          type: 'transform', id: 'r1c5',
          instruction: {
            ru: 'Сделай предложение отрицательным:',
            ua: 'Зроби речення заперечним:',
            en: 'Make the sentence negative:',
          },
          source: 'They have sold their car.',
          answer: ["They haven't sold their car", 'They have not sold their car'],
          explain: {
            ru: "haven't + V3 → They haven't sold their car.",
            ua: "haven't + V3 → They haven't sold their car.",
            en: "haven't + V3 → They haven't sold their car.",
          },
        },
        {
          type: 'gap', id: 'r1c6',
          before: 'She', after: 'like coffee, but now she drinks three cups a day. (not use to)',
          answer: ["didn't use to", 'did not use to'],
          explain: {
            ru: "Отрицание с used to: didn't use to like (форма use не меняется).",
            ua: "Заперечення з used to: didn't use to like (форма use не змінюється).",
            en: "Negative with used to: didn't use to like (the form “use” stays).",
          },
        },
        {
          type: 'gap', id: 'r1c7',
          before: 'I', after: 'that I left my wallet at home. What a day! (just realise)',
          answer: ['have just realised', 'have just realized'],
          explain: {
            ru: 'just → Present Perfect: have just realised (British spelling).',
            ua: 'just → Present Perfect: have just realised (British spelling).',
            en: '“Just” → present perfect: have just realised (British spelling).',
          },
        },
        {
          type: 'build', id: 'r1c8',
          words: ['going to', 'to the beach', 'We', 'if it is sunny', 'are'],
          answer: 'We are going to the beach if it is sunny',
          explain: {
            ru: 'План + условие: We are going to the beach if it is sunny.',
            ua: 'План + умова: We are going to the beach if it is sunny.',
            en: 'A plan plus condition: We are going to the beach if it is sunny.',
          },
        },
      ],
    },
  ],
};
