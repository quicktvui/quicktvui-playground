import Vue from 'vue';
import { getEventRedirector } from '../utils/utils';

function EsEventComponent() {
  Vue.registerElement('EsEventComponent', {
    component: {
      name: 'EsEventComponent',
      processEventData(event, nativeEventName, nativeEventParams) {
        switch (nativeEventName) {
          case 'onEsEvent':
            event.code = nativeEventParams.code;
            event.message = nativeEventParams.message;
            break;
          default:
        }
        return event;
      },
    },
  });

  Vue.component('es-event-view', {
    methods: {
      onEsEvent(evt) {
        this.$emit('es-event', evt);
      },
      sendEsMessage(msg) {
        Vue.Native.callUIFunction(this.$refs.view,
          'sendEsMessage', [msg], (res) => {
          });
      }
    },
    render(h) {
      const on = getEventRedirector.call(this, [
        ['es-event', 'esEvent'],
      ]);

      return h('EsEventComponent',
        {
          on,
          ref: 'view'
        }, this.$slots.default
      );
    }
  });
}

export default EsEventComponent;
