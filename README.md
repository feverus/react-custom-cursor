# Кастомные курсоры для React приложений

## Установка
```
npm i react-custom-cursor
```

## Использование:

```
import { CustomCursor } from './lib/'

const muCursor = <div
style={{borderRadius:'50%', width:'10px', height:'10px', color: 'red',}}></div>

<CustomCursor cursor={muCursor}>
   <>ваш компонент</>
</CustomCursor>
```


## Параметры:

| Название | Тип | По умолчанию | Описание |
| :---: | :---: | :---: | :---: |
| rotating | boolean | false | Поворачивает курсор вокруг центра области.  Обратите внимание, что угол в **0 радиан** это направление от правого края к центру. Это важно для создания нового курсора.

## Предустановленные курсоры

### Стрелка
import { RotatingArrow } from './lib/'

### Лазерная указка
import { LaserDot } from './lib/'