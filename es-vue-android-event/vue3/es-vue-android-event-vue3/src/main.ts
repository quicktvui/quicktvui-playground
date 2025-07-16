import {ESApp} from '@extscreen/es3-vue'
import application from './App.vue'
import {createESRouter, Router} from "@extscreen/es3-router";

import routes from './routes'

const routerOptions = {
    main: 'home',
    error: 'error',
    limit: 10,
    routes: routes
}
const router: Router = createESRouter(routerOptions)
import {createESApp} from '@extscreen/es3-core'

const app: ESApp = createESApp(application, router)

//-------------------------------------------------------------
import {ESComponent} from '@extscreen/es3-component'

app.use(ESComponent)

//-------------------------------------------------------------
import '@quicktvui/quicktvui3/dist/index.css'
import {QuickTVUI} from '@quicktvui/quicktvui3'

app.use(QuickTVUI)

//----------------------------------------------------------------------
import registerEsEventComponent from "./components/EsEventComponent";

app.use(registerEsEventComponent);

//----------------------------------------------------------------------
import registerEsEvent from "./components/EsEvent";

app.use(registerEsEvent);



