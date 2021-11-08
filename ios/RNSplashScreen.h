/**
 * SplashScreen
 * from：https:/qgx.digital
 * Author:qgxpagamentos
 * GitHub:https://github.com/qgxpagamentos
 * Email:admin@qgxpagamentos.com.br
 */
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface RNSplashScreen : NSObject<RCTBridgeModule>
+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView;
+ (void)showLottieSplash:(UIView*)splashScreen inRootView:(UIView*)rootView;
+ (void)show;
+ (void)setAnimationFinished:(Boolean)flag;
+ (void)hide;
@end
