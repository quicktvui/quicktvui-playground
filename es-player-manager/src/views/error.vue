<template>
  <div class="error-root-view-css">
    <span class="error-text-css" ref="errorText">error页面</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'error',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.error-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-text-css {
  font-size: 40px;
}
</style>
