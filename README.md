## Используемые в макете шрифты (большинство), но нужно каждый случай перепроверить

Везде используется Verdana. Изменяются только размеры.

Mobile - first! ))

|                | MOBILE                  | TABLET                  | DESKTOP                 |
| -------------- | ----------------------- | ----------------------- | ----------------------- |
| **Headings**   | font-family: Verdana;   | font-family: Verdana;   | font-family: Verdana;   |
|                | font-size: 18px;        | font-size: 34px;        | font-size: 34px;        |
|                | font-weight: 700;       | font-weight: 700;       | font-weight: 700;       |
|                | line-height: 1.44;      | line-height: 1.21;      | line-height: 1.21;      |
|                | letter-spacing: 0em;    | letter-spacing: 0em;    | letter-spacing: 0em;    |
| ----------     | ----------------------- | ----------------------- | ----------------------- |
| **Text**       | font-family: Verdana;   | font-family: Verdana;   | font-family: Verdana;   |
|                | font-size: 14px;        | font-size: 14px;        | font-size: 14px;        |
|                | font-weight: 700;       | font-weight: 700;       | font-weight: 700;       |
|                | line-height: 1.21;      | line-height: 1.21;      | line-height: 1.21;      |
|                | letter-spacing: 0.04em; | letter-spacing: 0.04em; | letter-spacing: 0.04em; |
| ----------     | ----------------------- | ----------------------- | ----------------------- |
| **Aside text** | font-family: Verdana;   | font-family: Verdana;   | font-family: Verdana;   |
|                | font-size: 14px;        | font-size: 14px;        | font-size: 14px;        |
|                | font-weight: 400;       | font-weight: 400;       | font-weight: 400;       |
|                | line-height: 1.21;      | line-height: 1.21;      | line-height: 1.21;      |
|                | letter-spacing: 0.04em; | letter-spacing: 0.04em; | letter-spacing: 0.04em; |

---

## Лоадер

Для отображения/скрытия Лоадера:

```javascript
import { useDispatch } from 'react-redux';
import { loaderAction } from './redux/loader/loaderSlice';
const dispatch = useDispatch();
```

```javascript
dispatch(loaderAction(true) // отобразить
dispatch(loaderAction(false) // скрыть
```

Например:

```javascript
<button onClick={() => dispatch(loaderAction(true))}> Show loader </button>
```

---

документация по календарику (react-datetime - a date and time picker in the same
React.js component) [https://github.com/arqex/react-datetime]

---

React-Select - Пакет для селекта, мультиселекта, асинхронного селекта
[https://www.npmjs.com/package/react-select]

---
