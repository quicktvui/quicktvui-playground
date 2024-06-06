<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'
import {
  ESPlayerConfiguration,
  ESPlayerDisplay,
  ESPlayerLogLevel,
  useESPlayer,
  useESPlayerLog
} from "@extscreen/es3-player";
import {useESDevice, useESRuntime} from "@extscreen/es3-core";

export default defineComponent({
  name: 'App',
  setup() {

    const runtime = useESRuntime()
    const device = useESDevice()

    const playerLog = useESPlayerLog()
    playerLog.setMinimumLoggingLevel(ESPlayerLogLevel.DEBUG)

    const playerManager = useESPlayer()

    function onESCreate(app, params) {
      return Promise.resolve()
          .then(() => {
            const playerDisplay: ESPlayerDisplay = {
              screenWidth: device.getScreenWidth(),
              screenHeight: device.getScreenHeight(),
            }
            const config: ESPlayerConfiguration = {
              debug: true,
              display: playerDisplay,
              device: {
                deviceType: runtime.getRuntimeDeviceType() ?? ''
              }
            }
            return playerManager.init(config)
          })
    }

    return {
      onESCreate
    }
  }
})
</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
