# Кастомные курсоры для React приложений
## Использование:

```
import { CustomCursor } from './lib/'

const muCursor = <div
style={{borderRadius:'50%', width:'10px', height:'10px', color: 'red',}}></div>

<CustomCursor cursor={muCursor}>
   <>ваш компонент</>
</CustomCursor>
```