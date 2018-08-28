//
//  GoMobileModule.m
//  GoMobileProject
//
//  Created by xiongcheng guo on 2018/8/8.
//  Copyright © 2018年 Facebook. All rights reserved.
//
#import "GoMobileModule.h"
#import <React/RCTLog.h>
#import "Hello/Hello.h"
@implementation GoMobileModule
RCT_EXPORT_MODULE();
//从go层获取数据
RCT_EXPORT_METHOD(getNativeGo:(NSString *) rnStr :(RCTResponseSenderBlock)callback{
  NSString *goStr=HelloGreetings(rnStr);
  callback(@[goStr]);
});
@end
