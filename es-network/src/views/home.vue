<template>
  <div class="index-root-view-css">
    <span class="index-root-text-view-css">网络连接状态：{{ isNetworkConnected }}</span>
    <span class="index-root-text-view-css" v-if="activeNetworkInfo">{{ JSON.stringify(activeNetworkInfo) }}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {ESNetworkInfo, useESNetwork, useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: 'index',
  setup() {

    const network = useESNetwork()
    const toast = useESToast()

    const activeNetworkInfo = ref<ESNetworkInfo>()
    const isNetworkConnected = ref<boolean>(false)

    //网络状态监听
    const connectivityChangeListener = {
      onConnectivityChange(networkInfo: ESNetworkInfo | null) {
        toast.showToast(JSON.stringify(networkInfo))
        initNetwork()
      }
    }

    const onESCreate = (params) => {
      network.addListener(connectivityChangeListener)
      initNetwork()
    }

    function initNetwork() {
      isNetworkConnected.value = network.isNetworkConnected()
      const networkInfo = network.getActiveNetworkInfo();
      if (networkInfo != null) {
        activeNetworkInfo.value = networkInfo
      }
    }

    function onESDestroy() {
      network.removeListener(connectivityChangeListener)
    }

    return {
      onESCreate,
      onESDestroy,
      activeNetworkInfo,
      isNetworkConnected,
    }
  },
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
