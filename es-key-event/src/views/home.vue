<template>
  <div class="index-root-view-css">
    <span class="index-root-text-view-css">Hello World!</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'
import {ESKeyEvent, useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: 'home',
  setup() {
    const toast = useESToast()

    function onKeyDown(keyEvent: ESKeyEvent) {
      toast.showToast("onKeyDown" + JSON.stringify(keyEvent))
    }

    function onKeyUp(keyEvent: ESKeyEvent) {
      toast.showToast("onKeyUp" + JSON.stringify(keyEvent))
    }

    return {
      onKeyDown,
      onKeyUp
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
  font-size: 50px;
  color: black;
}
</style>
