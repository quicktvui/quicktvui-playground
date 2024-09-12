<template>
  <div class="index-root-view-css">
    <qt-text class="index-root-long-text-view-css" gravity="center" text="es3-router 1.1.13 版本以上支持"/>
    <qt-text class="index-root-text-view-css" gravity="center" text="我是Home页面"/>
    <qt-image class="index-root-logo-css" :src="logo"></qt-image>
    <qt-text class="index-root-long-text-view-css" gravity="center" :text="data"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'
import logo from '../assets/logo.png'
import {RouteResult, RouteResultData, useESRouter} from "@extscreen/es3-router";
import {ref} from "vue";

export default defineComponent({
  name: 'home',
  setup() {
    const router = useESRouter()
    const data = ref<string>('')
    setTimeout(() => {
      router.push({
        name: 'list',
        resultCallback: {
          onResult(result: RouteResult): Promise<RouteResultData> | void {
            console.log('----home页收到list页面发来的数据--onResult-------', result)
            data.value = 'List页发送的消息：' + JSON.stringify(result.data)
            return Promise.resolve("我是home页，收到数据啦~~")
          }
        }
      })
    }, 1500)

    return {
      logo,
      data
    }
  }
})
</script>

<style>
.index-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: palevioletred;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.index-root-text-view-css {
  width: 400px;
  height: 60px;
  font-size: 50px;
  color: black;
  text-align: center;
}

.index-root-long-text-view-css {
  width: 1920px;
  height: 60px;
  font-size: 50px;
  color: black;
  text-align: center;
  margin-bottom: 30px;
}

.index-root-logo-css {
  width: 128px;
  height: 128px;
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
