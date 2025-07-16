<template>
  <div class="index-root-view-css">
    <span class="index-root-text-view-css">{{ eventText }}</span>
    <!-- 第三步：使用 component -->
    <!-- 接收事件监听：@es-event="onEsEvent" -->
    <es-event-view
        ref="eventRef"
        class="index-root-event-view-css"
        @es-event="onEsEvent">
    </es-event-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'
import {ref} from "vue";
import {IEsEvent} from "../components/IEsEvent";

export default defineComponent({
  name: 'index',
  emits: [],
  setup() {
    const eventRef = ref<IEsEvent>()
    const eventText = ref<string>('')
    const onESCreate = (params) => {
      //TODO 调用方法，发送给安卓层组件的一条消息
      eventRef.value?.sendEsMessage('这是一条消息~')
    }

    //TODO 接收安卓层发送的事件，进行显示
    function onEsEvent(evt) {
      eventText.value = evt.message + '  ' + evt.code;
      console.log('-----------ESEvent-------->>>>>', evt.message, evt.code);
    }

    return {
      eventRef,
      eventText,
      onESCreate,
      onEsEvent
    }
  }
})
</script>

<style>
.index-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.index-root-text-view-css {
  font-size: 30px;
  color: green;
}

.index-root-event-view-css {
  width: 300px;
  height: 300px;
}

</style>
