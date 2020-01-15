/*
 * Copyright (C) 2019 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#ifndef KRAKEN_JS_BRIDGE_H_
#define KRAKEN_JS_BRIDGE_H_

#include "bindings/console.h"
#include "bindings/kraken.h"
#include "bindings/websocket.h"
#include "bindings/window.h"
#ifdef ENABLE_DEBUGGER
#include <devtools/frontdoor.h>
#endif // ENABLE_DEBUGGER

namespace kraken {

class JSBridge final {
private:
  std::unique_ptr<alibaba::jsa::JSContext> context_;
  std::shared_ptr<kraken::binding::JSWebSocket> websocket_;
  std::shared_ptr<kraken::binding::JSWindow> window_;

public:
  JSBridge();
  ~JSBridge() = default;

#ifdef ENABLE_DEBUGGER
  void attachDevtools();
  void detatchDevtools();
#endif // ENABLE_DEBUGGER

  void evaluateScript(const std::string &script, const std::string &url,
                      int startLine);

  alibaba::jsa::JSContext *getContext() const { return context_.get(); }

  void handleFlutterCallback(const char *args);
  void invokeKrakenCallback(const char *args);
  void invokeSetTimeoutCallback(const int callbackId);
  void invokeSetIntervalCallback(const int callbackId);

  void invokeRequestAnimationFrameCallback(const int callbackId);
  //#ifdef ENABLE_DEBUGGER
  //  std::unique_ptr<kraken::Debugger::FrontDoor> devtools_front_door_;
  //#endif // ENABLE_DEBUGGER
};
} // namespace kraken

#endif // KRAKEN_JS_BRIDGE_H_
