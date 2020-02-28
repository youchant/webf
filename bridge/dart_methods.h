/*
 * Copyright (C) 2019 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#ifndef KRAKEN_DART_METHODS_H_
#define KRAKEN_DART_METHODS_H_

#include "thread_safe_map.h"
#include "bridge_export.h"
#include <memory>

namespace kraken {

struct DartMethodPointer {
  DartMethodPointer() = default;
  InvokeUIManager invokeUIManager{nullptr};
  InvokeModule invokeModule{nullptr};
  ReloadApp reloadApp{nullptr};
  SetTimeout setTimeout{nullptr};
  SetInterval setInterval{nullptr};
  ClearTimeout clearTimeout{nullptr};
  RequestAnimationFrame requestAnimationFrame{nullptr};
  CancelAnimationFrame cancelAnimationFrame{nullptr};
  GetScreen getScreen{nullptr};
  DevicePixelRatio devicePixelRatio{nullptr};
  PlatformBrightness platformBrightness{nullptr};
  OnPlatformBrightnessChanged onPlatformBrightnessChanged{nullptr};
  StartFlushCallbacksInUIThread startFlushCallbacksInUIThread{nullptr};
  StopFlushCallbacksInUIThread stopFlushCallbacksInUIThread{nullptr};
};

void registerInvokeUIManager(InvokeUIManager callback);
void registerInvokeModule(InvokeModule callback);
void registerReloadApp(ReloadApp callback);
void registerSetTimeout(SetTimeout callback);
void registerSetInterval(SetInterval callback);
void registerClearTimeout(ClearTimeout callback);
void registerRequestAnimationFrame(RequestAnimationFrame callback);
void registerCancelAnimationFrame(CancelAnimationFrame callback);
void registerGetScreen(GetScreen callback);
void registerDevicePixelRatio(DevicePixelRatio devicePixelRatio);
void registerPlatformBrightness(PlatformBrightness platformBrightness);
void registerOnPlatformBrightnessChanged(OnPlatformBrightnessChanged onPlatformBrightnessChanged);
void registerStartFlushUILoop(StartFlushCallbacksInUIThread startFlushUiLoop);
void registerStopFlushCallbacksInUIThread(StopFlushCallbacksInUIThread stopFlushUiLoop);

std::shared_ptr<DartMethodPointer> getDartMethod();

} // namespace kraken

#endif