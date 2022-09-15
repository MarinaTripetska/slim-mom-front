## [Link to Backedn Open Code](https://github.com/MarinaTripetska/slim-mom-back)

## [Link to Deploy Application](https://team-work-goit-slim-mom.netlify.app/)

## [Swagger API](https://slim-mom-back.herokuapp.com/api-docs/)

---

### Fonts used in the layout:

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

## Loader

To show/hide the Loader:

```javascript
import { useDispatch } from 'react-redux';
import { loaderAction } from './redux/loader/loaderSlice';
const dispatch = useDispatch();
```

```javascript
dispatch(loaderAction(true) // show
dispatch(loaderAction(false) // hide
```

For example:

```javascript
<button onClick={() => dispatch(loaderAction(true))}> Show loader </button>
```

---

## Calendar

[Documentation for the calendar](https://github.com/arqex/react-datetime)
(react-datetime - a date and time picker in the same React.js component)
