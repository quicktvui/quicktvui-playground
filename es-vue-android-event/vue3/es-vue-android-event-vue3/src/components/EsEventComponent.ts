import {ESApp, registerElement} from "@extscreen/es3-vue";

/**
 * 第一步：注册 element
 * 注册 element: EsEventComponent ----> 给包装组件使用
 * @param app
 */
function registerEsEventComponent(app: ESApp) {

    const EsEventComponent = {
        component: {
            name: 'EsEventComponent',//TODO 对应安卓层组件的名称：EsEventComponent，必须保持一致
            //TODO 处理安卓层组件发送的事件
            processEventData(evtData, nativeEventParams: {
                message: string;
                code: number
            }) {
                const {handler: event, __evt: nativeEventName} = evtData;
                switch (nativeEventName) {
                    //TODO 处理安卓层组件发送的事件：onEsEvent，必须进行转换进行赋值
                    case 'onEsEvent':
                        event.code = nativeEventParams.code;//TODO 安卓层组件发送的事件里面有code字段
                        event.message = nativeEventParams.message;//TODO 安卓层组件发送的事件里面有message字段
                        break;
                    default:
                        break;
                }
                return event;
            },
        },
    }
    //TODO 注册 element 名称为：EsEventComponent
    registerElement('EsEventComponent', EsEventComponent);
}

export default registerEsEventComponent;
