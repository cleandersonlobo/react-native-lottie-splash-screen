package org.devio.rn.splashscreen;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * SplashScreen
 * from：https:/qgx.digital
 * Author:qgxpagamentos
 * GitHub:https://github.com/qgxpagamentos
 * Email:admin@qgxpagamentos.com.br
 */
public class SplashScreenModule extends ReactContextBaseJavaModule {
  public SplashScreenModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "SplashScreen";
  }

  /**
   * 关闭启动屏
   */
  @ReactMethod
  public void hide() {
    SplashScreen.hide(getCurrentActivity());
  }
}
