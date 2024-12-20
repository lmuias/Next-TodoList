# Next.js ToDo List Application

Цей проєкт — простий список завдань (ToDo List), створений з використанням сучасних веб-технологій. Додаток дозволяє виконувати базові CRUD операції: створення, перегляд, редагування та видалення завдань.

## Технології

- **[Next.js](https://nextjs.org/)** — фреймворк React для побудови серверно-рендерованих додатків.
- **[TailwindCSS](https://tailwindcss.com/)** — утилітарний CSS-фреймворк для швидкого та адаптивного дизайну.
- **[TypeScript](https://www.typescriptlang.org/)** — типізована надбудова JavaScript для кращої розробки.
- **[Redux](https://redux.js.org/)** — менеджер стану для керування станом додатка.
- **[JSON Server](https://github.com/typicode/json-server)** — простий сервер для моделювання API на основі JSON-файлів.

---

## Встановлення

1. Клонуйте репозиторій:
   ```bash
   git clone https://github.com/lmuias/Next-TodoList.git

2. Перейдіть до папки проєкту
  cd next-todolist

3. Встановіть залежності:
    npm install
4. Створіть файл .env з наступними змінними:
  - NEXT_PUBLIC_SERVER_URL=http://localhost:8080/todos
  - NEXT_PUBLIC_LOCAL_URL=http://localhost:3000/api/todos

Як запустити:
  Для запуску Nextjs додатка:
  npm run dev

  Для запуску JSON server
  npm run json-start

## Можливості
-  Створення завдань: Додайте нові завдання до списку.
-  Перегляд завдань: Відображення списку усіх існуючих завдань.
-  Редагування завдань: Внесення змін до вже існуючих завдань.
-  Видалення завдань: Видалення завдань зі списку.
