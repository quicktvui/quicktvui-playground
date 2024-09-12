<template>
  <div class="list-root-view-css">
    <qt-text class="list-root-long-text-view-css" gravity="center" text="es3-router 1.1.13 版本以上支持"/>
    <qt-text class="list-root-text-view-css" gravity="center" text="我是List页面"/>
    <qt-image class="list-root-logo-css" :src="logo"></qt-image>
    <qt-text class="list-root-long-text-view-css" gravity="center" :text="data"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'
import logo from '../assets/logo.png'
import {useESRouter, RouteResultCode} from "@extscreen/es3-router";
import {ref} from "vue";

export default defineComponent({
  name: 'list',
  setup() {
    const router = useESRouter()
    const data = ref<string>('')

    const onESCreate = (params) => {
      router.setResult({
        resultCode: RouteResultCode.ROUTE_RESULT_OK,
        data: {
          msg: 'list页面发送给home页的数据：我打开了！'
        }
      }).then((ret) => {
        data.value = 'Home页返回的消息：' + JSON.stringify(ret)
        console.log('----home页onESCreate接受到数据后，返回的数据-->>>>>>>', ret);
      })
    }

    function onESDestroy() {
      router.setResult({
        resultCode: RouteResultCode.ROUTE_RESULT_OK,
        data: {
          msg: 'list页面发送给home页的数据：我要关闭了！'
        }
      }).then((ret) => {
        data.value = 'Home页返回的消息：' + JSON.stringify(ret)
        console.log('----home页onESDestroy接受到数据后，返回的数据-->>>>>>>', ret);
      })
    }

    return {
      logo,
      onESCreate,
      onESDestroy,
      data
    }
  }
})
</script>

<style>
.list-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: deepskyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list-root-text-view-css {
  width: 400px;
  height: 60px;
  font-size: 50px;
  color: black;
  text-align: center;
}

.list-root-long-text-view-css {
  width: 1920px;
  height: 60px;
  font-size: 50px;
  color: black;
  text-align: center;
  margin-bottom: 30px;
}

.list-root-logo-css {
  width: 128px;
  height: 128px;
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
