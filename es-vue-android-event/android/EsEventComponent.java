package com.extscreen.runtime;

import android.content.Context;

import eskit.sdk.support.EsPromise;
import eskit.sdk.support.args.EsArray;
import eskit.sdk.support.args.EsMap;
import eskit.sdk.support.component.IEsComponent;

public class EsEventComponent implements IEsComponent<EsEventView> {

    protected static final String OP_SEND_ES_MESSAGE = "sendEsMessage";

    @Override
    public EsEventView createView(Context context, EsMap initParams) {
        EsEventView esEventView = new EsEventView(context);
        return esEventView;
    }

    @Override
    public void dispatchFunction(EsEventView esEventView, String functionName, EsArray esArray,
                                 EsPromise esPromise) {
        switch (functionName) {
            //vue调用android的方法，传递参数
            case OP_SEND_ES_MESSAGE:
                try {
                    String message = esArray.getString(0);
                    esEventView.sendEsMessage(message);
                } catch (Throwable e) {
                    e.printStackTrace();
                }
                esPromise.resolve(true);
                break;
            default:
                break;
        }
    }

    @Override
    public void destroy(EsEventView esEventView) {

    }
}
