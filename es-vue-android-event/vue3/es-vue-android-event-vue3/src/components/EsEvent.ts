import {defineComponent, h, ref} from 'vue';
import {ESApp, Native} from "@extscreen/es3-vue";
import {useESDisplay} from "@extscreen/es3-core";

function registerEsEvent(app: ESApp) {

  const EsEventViewImpl = defineComponent({
    emits: [
      'es-event',
    ],
    setup(props, context) {
      const viewRef = ref()

      function sendEsMessage(msg: string) {
        Native.callUIFunction(viewRef.value, 'sendEsMessage', [msg], (res) => {
        });
      }

      context.expose({
        viewRef,
        sendEsMessage,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'EsEventComponent',
          {
            ref: viewRef,
            onEsEvent: (evt) => {
              context.emit('es-event', evt);
            },
          },
          children
        )
      }
    },
  })
  app.component('es-event-view', EsEventViewImpl)
}

export default registerEsEvent;
