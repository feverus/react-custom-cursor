# Кастомные курсоры для React приложений

## Установка
```
npm i @feverus/react-custom-cursor
```

## Использование:

```
import { CustomCursor } from '@feverus/react-custom-cursor'
import '@feverus/react-custom-cursor/dist/style.css'

const muCursor = 'любой JSX элемент или строка'

<CustomCursor cursor={muCursor}>
   <>ваш компонент</>
</CustomCursor>
```

## Параметры:

| Название | Тип | По умолчанию | Описание |
| :---: | :---: | :---: | :---: |
| rotating | boolean \| 'auto' \| 'onMove' | false | Без вращения
|||| *true* - Поворачивает курсор вокруг центра области.  Обратите внимание, что угол в **0 радиан** это направление от правого края к центру. Это важно для создания нового курсора. 
|||| *onMove* - поворачивает курсор при движении мыши. 
|||| *auto* - поворачивает курсор случайным образом раз в секунду.
|
| scale | number | 1 | Изменяет масштаб курсора

## Предустановленные курсоры

### Стрелка
import { RotatingArrow } from '@feverus/react-custom-cursor'

### Лазерная указка
import { LaserDot } from '@feverus/react-custom-cursor'

### Текст по окружности
```
import { CircleWithText } from '@feverus/react-custom-cursor'

<CustomCursor cursor={<CircleWithText text={'any text'} color={'any color'} />}>
   ...
</CustomCursor>
```

| Название | Тип | По умолчанию | Описание |
| :---: | :---: | :---: | :---: |
| text | string | '...' | Текст надписи (до 30 символоов)
| color | string | 'black' | Цвет надписи
| donutColor | string | '#eeeeee90' | Цвет подложки под текстом

## Для замены курсора на всей странице
Оберните самый верхний компонент
```
<CustomCursor cursor={'🦝'}>
   <App />
</CustomCursor>
```
И добавьте стиль для него
```
#root>div {
   width: 100vw;
   height: 100vh;
}
```