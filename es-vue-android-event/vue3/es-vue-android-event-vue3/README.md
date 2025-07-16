# Project

## 自定义组件

### 第一步、注册`Element`

1. 目录：src/components/EsEventComponent.ts
2. `name: 'EsEventComponent'` 这个名称对应 Native 组件声明的名称
3. `registerElement('EsEventComponent', EsEventComponent);`这个是注册的名称`'EsEventComponent'`是给vue层用的
4. `main.ts`注册

```ts
//----------------------------注册element------------------------------------------
import registerEsEventComponent from "./components/EsEventComponent";

app.use(registerEsEventComponent);
```

### 第二步、注册`Component`

1. 目录：src/components/EsEvent.ts
2. `h('EsEventComponent')` 这个名称对应第一步注册的`element`名称
3. `app.component('es-event-view', EsEventViewImpl)`这个是注册组件的名称`'es-event-view'`是给vue层用的
4. `main.ts`注册

```ts
//----------------------------注册component------------------------------------------
import registerEsEvent from "./components/EsEvent";

app.use(registerEsEvent);
```

### 第三步、使用

1. 目录：src/views/home.vue

```vue

<es-event-view
    ref="eventRef"
    class="index-root-event-view-css"
    @es-event="onEsEvent">
</es-event-view>
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
