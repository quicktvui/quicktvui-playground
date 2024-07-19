package com.extscreen.runtime;

import android.content.Context;
import android.graphics.Color;
import android.util.Log;
import android.widget.FrameLayout;

import eskit.sdk.support.args.EsMap;
import eskit.sdk.support.component.IEsComponentView;
import eskit.sdk.support.core.EsProxy;

public class EsEventView extends FrameLayout implements IEsComponentView {

    private static final String TAG = "EsEventView";

    protected static final String EVENT_PROP_CODE = "code";
    protected static final String EVENT_PROP_MESSAGE = "message";

    public enum Events {
        EVENT_ON_ES_VENT("onEsEvent");
        private final String mName;

        Events(final String name) {
            mName = name;
        }

        @Override
        public String toString() {
            return mName;
        }
    }


    public EsEventView(Context context) {
        super(context);
        setBackgroundColor(Color.RED);
    }

    //------------------------------------------------------

    /**
     * 接受vue传递过来的参数，并发送一个事件给vue
     *
     * @param message
     */
    public void sendEsMessage(String message) {
        Log.e(TAG, "#--------sendEsEvent----START--->>" + message);

        EsMap eventMap = new EsMap();
        eventMap.pushInt(EVENT_PROP_CODE, 100);
        eventMap.pushString(EVENT_PROP_MESSAGE, "android收到Vue的消息:" + message + "  android添加的消息：hello Vue~");
        EsProxy.get().sendUIEvent(getId(), Events.EVENT_ON_ES_VENT.toString(), eventMap);

        Log.e(TAG, "#--------sendEsEvent----END--->>");
    }
}
