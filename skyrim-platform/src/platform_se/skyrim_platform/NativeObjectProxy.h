#pragma once
#include "JsEngine.h"

class NativeObjectProxy
{
public:
  static void Attach(JsValue& obj, const std::string& cacheClassName,
                     const JsValue& toString, const JsValue& toJson);
};
