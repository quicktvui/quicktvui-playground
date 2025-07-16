import {defineComponent, h, ref} from 'vue';
import {ESApp, Native} from "@extscreen/es3-vue";

/**
 * 第一步：注册 component
 * 把 element 包装成Vue3组件：es-event-view
 * @param app
 */
function registerEsEvent(app: ESApp) {

    const EsEventViewImpl = defineComponent({
        //TODO 声明抛出事件的名称，vue3语法
        emits: [
            'es-event',
        ],
        setup(props, context) {
            const viewRef = ref()

            //TODO 声明组件的方法，方法里面调用安卓层组件的方法：sendEsMessage
            function sendEsMessage(msg: string) {
                //TODO 调用安卓层组件的方法：sendEsMessage
                Native.callUIFunction(viewRef.value, 'sendEsMessage', [msg], (res) => {
                });
            }

            context.expose({
                viewRef,
                //TODO expose method : Vue3语法
                sendEsMessage,
            })

            return () => {
                const children = context.slots.default && context.slots.default()
                return h(
                    'EsEventComponent',//TODO 使用的 element的名称：EsEventComponent
                    {
                        ref: viewRef,
                        //TODO 安卓层发送的事件名称：onEsEvent
                        onEsEvent: (evt) => {
                            //TODO 转发事件名称为：es-event
                            context.emit('es-event', evt);
                        },
                    },
                    children
                )
            }
        },
    })
    //TODO 声明组件的名称：es-event-view，给页面使用
    app.component('es-event-view', EsEventViewImpl)
}

export default registerEsEvent;
