# DeepSeek AI Ассистент

Веб-приложение для общения с искусственным интеллектом DeepSeek, построенное на React.

## Описание

Это простое и удобное веб-приложение позволяет вести диалог с ИИ DeepSeek. Приложение имеет современный интерфейс с использованием Material-UI и поддерживает историю сообщений.

## Основные функции

- Чат-интерфейс с историей сообщений
- Интеграция с DeepSeek AI API
- Отображение статуса загрузки
- Адаптивный дизайн
- Поддержка отправки сообщений по Enter

## Установка

1. Клонируйте репозиторий:

git clone https://github.com/Borislav77777/AIAssistent2.git
cd AIAssistent2

2. Установите зависимости:

npm install

3. Создайте файл `.env` в корневой директории проекта и добавьте ваш API ключ:

REACT_APP_DEEPSEEK_API_KEY=sk-153aa50c33aa41488276bbf055e68728

4. Запустите приложение:

npm start

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Технологии

- React
- Material-UI
- Axios
- DeepSeek AI API

## Структура проекта

deepseek-chat/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   └── styles.css
  ├── .env
  └── package.json

## Разработка

Для разработки вам понадобится:
- Node.js версии 14 или выше
- npm (устанавливается вместе с Node.js)
- Ключ API DeepSeek

## Лицензия

MIT

## Автор

Borislav77777

## Поддержка

По всем вопросам обращайтесь в раздел Issues данного репозитория.
