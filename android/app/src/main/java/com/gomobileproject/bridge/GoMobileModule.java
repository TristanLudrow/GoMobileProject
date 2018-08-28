package com.gomobileproject.bridge;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by xiongchengguo on 2018/8/7.
 * desc:
 */

public class GoMobileModule extends ReactContextBaseJavaModule {
    public GoMobileModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return this.getClass().getSimpleName();
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    @ReactMethod
    public void getNativeGo(String rnStr, Callback callback) {
        String greetings = hello.Hello.greetings(rnStr);
        callback.invoke(greetings);
    }
}
