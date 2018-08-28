package com.gomobileproject;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the home component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "GoMobileProject";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return super.createReactActivityDelegate();

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if(isTaskRoot()){

        }
    }
}
