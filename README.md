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

<br/>
<br/>

# Module 03

<details>
  <summary>Заняття 5 - Форми та HTTP-запити</summary>

## Форми

- Форма як компонент (`OrderForm`)
- Обробка форми з `onSubmit`
- Типізація події
- Отримання значень через `FormData`
- Обробка форми з `Form Actions`
- Хук `useId`

> Нагадати що в LMS є повний матеріал по роботі з всіма елементами форми

## HTTP-запити

```text
http://hn.algolia.com/api/v1/search
```

- Форма пошуку `SearchForm`
- HTTP-запит при сабміті
- Збереження результату запита в стан
- Відображення даних
- Індикатор завантаження
- Обробка помилок
- Структура файлів та поділ відповідальності

> Нагадати що в LMS є матеріал про змінні оточення та `.env`

</details>
<br/>

<details>
  <summary>Заняття 6 - Побічні ефекти</summary>

- Етапи життєвого циклу компонента: монтування, оновлення, розмонтування
- Побічні ефекти з `useEffect`
  - https://swapi.info/api/people/1
  - Запит при монтуванні компонента
  - Залежності ефекта
  - Синтаксис `async/await`
  - Суворий режим і подвійне монтування (`Timer`)
  - Очищення ефектів (`Timer`)
  - Створюємо сайдбар (`Sidebar`)
- Робота з LocalStorage
  - Зберігаємо стан сайдбара (`Sidebar`)
  - Запис через ефект
  - Читання через `useState(callback)`

</details>
<br/>

# Module 04

<details>
  <summary>Заняття 7 - TanStack Query</summary>

- Серверні дані та кешування
- Інсталяція
  [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/installation)
- Налаштування `QueryClient`
- Налаштування `ReactQueryDevtools`
- Хук `useQuery` та запити при монтуванні компонента
  - https://swapi.info/api/people/1
  - Ключі запиту
- Залежні запити з `enabled`
- Пагінація запитів
  - `placeholderData` та `keepPreviousData`
  - Бібліотека [React Paginate](https://www.npmjs.com/package/react-paginate)

</details>
<br/>

<details>
  <summary>Заняття 8 - Форми з Formik</summary>

- Бібліотека [Formik](https://formik.org/)
- Контейнер форми `Formik` та `Form`
  - Пропс `initialValues`
  - Пропс `onSubmit`
- Поля форми `Field`
  - Атрибут `name`
- Стилізація компонентів `Formik`
- Типізація `initialValues`
- Параметри `values` та `actions` у `onSubmit`
- Типи полів через пропс `as`
- Доступ до властивостей `Formik` у JSX через Render Prop
- Валідація з [`Yup`](https://github.com/jquense/yup)
  - Схема валідаціі
  - Можливі аргументи функції-валідатора
  - Пропс `validationSchema`
- Компонент `ErrorMessage`
  - Пропс `component`

</details>
<br/>

# Module 05

<details>
  <summary>Заняття 9 - Мутації з TanStack Query</summary>

## CRUD

- Postman
- https://64689aefe99f0ba0a8286f54.mockapi.io/tasks

## Мутації

- Видалення завдання
- Хук `useMutation`
  - mutationFn
  - onSuccess
  - onError
- Функція `mutate`

## Інвалідація кеша

- Хук `useQueryClient`
- Метод `invalidateQueries`

## Практика

- Створення завдання через форму в модальному вікні
- Редагування завдання. Зміна стану completed через чекбокс

</details>
