<template>
  <div class="index-root-view-css">
    <span class="index-root-text-view-css">{{ text }}</span>
    <es-event-view
      ref="eventRef"
      class="index-root-event-view-css"
      @es-event="onEsEvent">
    </es-event-view>
  </div>
</template>

<script>

import { ESPage } from '@extscreen/es-core';

export default {
  name: 'index',
  mixins: [ESPage],
  data() {
    return {
      text: '',

    };
  },
  methods: {
    onESCreate(params) {
      console.log('-----------ESEvent-------->>>>>');
      this.$refs.eventRef.sendEsMessage('这是一条消息~');
    },
    onEsEvent(evt) {
      this.text = evt.message + '  ' + evt.code;
      console.log('-----------ESEvent-------->>>>>', evt.message, evt.code);
    }
  },
  components: {}
};
</script>

<style scoped>

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
