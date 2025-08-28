# Module 02

<details>
  <summary>Заняття 3 - Компоненти та колекції</summary>

- [Бібліотека React](https://github.com/goitacademy/react-v3-course-track/blob/03-components/src/assets/component-tree.png)
  - Стандартизація розробки
  - Екосистема бібліотек
- Рендер додатка в DOM у файлі `main.tsx`
  - Пакети `react` та `react-dom`
  - Методи `createRoot` та `render`
  - Елемент `div#root` у `index.html`
- JSX - опис UI
  - Особливості JSX
  - JSX вирази у розмітці та атрибутах
  - Правило спільного батька
  - Фрагменти
  - Імпорт локальних зображень (`app-logo.png` у `src/assets`)
- Рендер за умови
  - Значення що не відображаються: `null`, `undefined`, `false`
  - Оператор `&&`
  - Тернарний оператор
- Колекції елементів
  - Метод `map`
  - Ключі елементів з `key`
- [Компоненти](https://github.com/goitacademy/react-v3-course-track/blob/03-components/src/assets/component.png)
  - Папка `src/components`
  - Кореневий компонент `App`
  - Дефолтний імпорт та експорт компонентів
- [Налаштування компонента](https://raw.githubusercontent.com/goitacademy/react-v3-course-track/refs/heads/03-components/src/assets/props.png)
  - Параметр `props`
  - Типізація пропсів (`interface ComponentNameProps`)
  - Деструктуризація пропсів
- Стилізація компонентів через CSS-модулі

</details>
<br/>
<details>
  <summary>Заняття 4 - Події та стан компонента</summary>

## Обробка подій

- Іменування атрибутів обробників `on*`
- Додавання обробника події
- Посилання на функцію та анонімний колбек
- Об'єкт події
- Типізація об'єкта події

## Стан компонента

- Реактивність
- [Стан компонента](https://raw.githubusercontent.com/goitacademy/react-v3-course-track/refs/heads/04-state/src/assets/state.png)
- [Поняття **оновлення** та **рендера** компонента](https://raw.githubusercontent.com/goitacademy/react-v3-course-track/refs/heads/04-state/src/assets/component-update.png)
- Хук `useState`
- Обмеження хуків
- Асинхронність оновлення стану
- Локальність стану з `ClickCounter`
- [Підняття стану](https://raw.githubusercontent.com/goitacademy/react-v3-course-track/refs/heads/04-state/src/assets/lifting-state.png)
- Компоненти `Counter` та `CountDisplay`
- Декілька станів (зробити ефект toggle з `setIsVisible(!isVisible)`)
- Оновлення об'єктів
- Accordion
- TagManeger

</details>
