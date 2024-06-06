import {ESApp} from '@extscreen/es3-vue'
import application from './App.vue'

import routes from './routes'

const routerOptions = {
  main: 'home',
  error: 'error',
  limit: 10,
  routes: routes
}

import {createESApp} from '@extscreen/es3-core'

const app: ESApp = createESApp(application, routerOptions)

import {ESComponent} from '@extscreen/es3-component'

app.use(ESComponent)

import '@quicktvui/quicktvui3/dist/index.css'
import {QuickTVUI} from '@quicktvui/quicktvui3'

app.use(QuickTVUI)


import {createESPlayer} from "@extscreen/es3-player";

const player = createESPlayer();
app.use(player);

import {createESVideoPlayer} from "@extscreen/es3-video-player";

const videoPlayer = createESVideoPlayer();
app.use(videoPlayer);

import {createESPlayerManager} from "@extscreen/es3-player-manager";

const playerManager = createESPlayerManager()
app.use(playerManager);
