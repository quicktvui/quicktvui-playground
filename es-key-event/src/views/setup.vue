<template>
  <div class="index-root-view-css">
    <span class="index-root-text-view-css">Setup语法糖</span>
  </div>
</template>

<script lang="ts" setup>
import {ESKeyEvent, useESToast} from "@extscreen/es3-core";

const toast = useESToast()

function onKeyDown(keyEvent: ESKeyEvent) {
  toast.showToast("onKeyDown" + JSON.stringify(keyEvent))
}

function onKeyUp(keyEvent: ESKeyEvent) {
  toast.showToast("onKeyUp" + JSON.stringify(keyEvent))
}

defineExpose({
  onKeyUp,
  onKeyDown
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
