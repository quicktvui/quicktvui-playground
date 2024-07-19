import {ESApp, registerElement} from "@extscreen/es3-vue";

function registerEsEventComponent(app: ESApp) {

  const EsEventComponent = {
    component: {
      name: 'EsEventComponent',
      processEventData(evtData, nativeEventParams: {
        message: string;
        code: number
      }) {
        const {handler: event, __evt: nativeEventName} = evtData;
        switch (nativeEventName) {
          case 'onEsEvent':
            event.code = nativeEventParams.code;
            event.message = nativeEventParams.message;
            break;
          default:
            break;
        }
        return event;
      },
    },
  }
  registerElement('EsEventComponent', EsEventComponent);
}

export default registerEsEventComponent;
