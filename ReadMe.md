```bash
 ./gradlew clean
Starting a Gradle Daemon (subsequent builds will be faster)

> Configure project :expo

Using expo modules
  - expo-constants (15.4.5)
  - expo-file-system (16.0.8)
  - expo-font (11.10.3)
  - expo-keep-awake (12.8.2)
  - expo-modules-core (1.11.12)
  - expo-modules-core$android-annotation (1.11.12)
  - expo-modules-core$android-annotation-processor (1.11.12)


Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.7/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

BUILD SUCCESSFUL in 2m 35s
16 actionable tasks: 11 executed, 5 up-to-date
PS D:\PublishMe\RN\Antinna\android> cd ..          
PS D:\PublishMe\RN\Antinna> npm run android

> antinna@1.0.0 android
> expo run:android

› Building app...
Configuration on demand is an incubating feature.

> Configure project :expo

Using expo modules
  - expo-constants (15.4.5)
  - expo-file-system (16.0.8)
  - expo-font (11.10.3)
  - expo-keep-awake (12.8.2)
  - expo-modules-core (1.11.12)
  - expo-modules-core$android-annotation (1.11.12)
  - expo-modules-core$android-annotation-processor (1.11.12)

cache fileHashes.bin (C:\Users\DEEPAK SHARMA\.gradle\caches\8.7\fileHashes\fileHashes.bin) is corrupt. Discarding.                                                                                                          

> Task :expo-file-system:processDebugManifest
D:\PublishMe\RN\Antinna\node_modules\expo-file-system\android\src\main\AndroidManifest.xml:6:9-8:20 Warning:
        provider#expo.modules.filesystem.FileSystemFileProvider@android:authorities was tagged at AndroidManifest.xml:6 to replace other declarations but no other declaration present

> Task :expo-modules-core:processDebugManifest
D:\PublishMe\RN\Antinna\node_modules\expo-modules-core\android\src\main\AndroidManifest.xml:8:9-11:45 Warning:
        meta-data#com.facebook.soloader.enabled@android:value was tagged at AndroidManifest.xml:8 to replace other declarations but no other declaration present

> Task :app:processDebugMainManifest
D:\PublishMe\RN\Antinna\android\app\src\debug\AndroidManifest.xml:6:5-162 Warning:
        application@android:usesCleartextTraffic was tagged at AndroidManifest.xml:6 to replace other declarations but no other declaration present
D:\PublishMe\RN\Antinna\android\app\src\debug\AndroidManifest.xml Warning:
        provider#expo.modules.filesystem.FileSystemFileProvider@android:authorities was tagged at AndroidManifest.xml:0 to replace other declarations but no other declaration present

> Task :expo-modules-core:compileDebugKotlin
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/core/utilities/EmulatorUtilities.kt:30:13 'SERIAL: String!' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/AppContext.kt:151:13 Variable 'catalystInstance' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/ExpoModulesHelper.kt:11:21 'newInstance(): T!' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/Promise.kt:72:18 This declaration overrides deprecated member but not marked as deprecated itself. This deprecation won't be inherited in future releases. Please add @Deprecated annotation or suppress. See https://youtrack.jetbrains.com/issue/KT-47902 for details
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/Utils.kt:8:3 Expected performance impact from inlining is insignificant. Inlining works best for functions with parameters of functional types
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/activityresult/ActivityResultsManager.kt:51:24 Parameter 'activity' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/activityresult/AppContextActivityResultRegistry.kt:119:51 'getParcelableExtra(String!): T?' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/activityresult/AppContextActivityResultRegistry.kt:186:26 'getParcelable(String?): T?' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/activityresult/AppContextActivityResultRegistry.kt:277:83 'getParcelable(String?): T?' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/activityresult/DataPersistor.kt:67:20 'getSerializable(String?): Serializable?' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/activityresult/DataPersistor.kt:85:26 'getSerializable(String?): Serializable?' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/devtools/cdp/CdpNetworkTypes.kt:186:54 Parameter 'request' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/devtools/cdp/CdpNetworkTypes.kt:210:54 Parameter 'request' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/devtools/cdp/CdpNetworkTypes.kt:230:15 Parameter 'now' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/devtools/cdp/CdpNetworkTypes.kt:230:54 Parameter 'request' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/events/KModuleEventEmitterWrapper.kt:90:7 'constructor Event<T : Event<(raw) Event<*>>!>(Int)' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/jni/JavaScriptObject.kt:90:33 Parameter 'null' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/jni/JavaScriptObject.kt:91:34 Parameter 'null' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/jni/JavaScriptObject.kt:132:5 Parameter 'null' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/sharedobjects/SharedObjectRegistry.kt:54:35 Destructured parameter 'js' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/tracing/ExpoTrace.kt:33:1 Expected performance impact from inlining is insignificant. Inlining works best for functions with parameters of functional types
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/tracing/ExpoTrace.kt:40:1 Expected performance impact from inlining is insignificant. Inlining works best for functions with parameters of functional types
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/tracing/ExpoTrace.kt:50:1 Expected performance impact from inlining is insignificant. Inlining works best for functions with parameters of functional types
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/tracing/ExpoTrace.kt:56:1 Expected performance impact from inlining is insignificant. Inlining works best for functions with parameters of functional types
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:76:12 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:79:12 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:82:11 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:85:11 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:99:12 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:102:11 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:114:12 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/Either.kt:117:11 Parameter 'type' is never used
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/JSTypeConverterHelper.kt:44:17 'get(String!): Any?' is deprecated. Deprecated in Java
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-modules-core/android/src/main/java/expo/modules/kotlin/types/TypeConverterProvider.kt:175:46 'newInstance(): T!' is deprecated. Deprecated in Java

> Task :expo-modules-core:compileDebugJavaWithJavac
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: Some input files use unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.

> Task :expo-constants:compileDebugKotlin
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo-constants/android/src/main/java/expo/modules/constants/ConstantsService.kt:127:14 'versionCode: Int' is deprecated. Deprecated in Java

> Task :expo:compileDebugKotlin
w: file:///D:/PublishMe/RN/Antinna/node_modules/expo/android/src/main/java/expo/modules/ReactActivityDelegateWrapper.kt:139:50 No cast needed

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.7/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
```


# USed
``
npm install @react-navigation/native  @react-navigation/native-stack
``


```bash
yarn install @react-navigation/native  @react-navigation/native-stack
yarn install v1.22.19
error `install` has been replaced with `add` to add new dependencies. Run "yarn add @react-navigation/native @react-navigation/native-stack" instead.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
PS D:\PublishMe\RN\Antinna> yarn add  @react-navigation/native  @react-navigation/native-stack   
yarn add v1.22.19
[1/4] Resolving packages...
⠁ strict-uri-encode@^2.0.0(node:14856) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "expo > @expo/metro-config@0.17.6" has unmet peer dependency "@react-native/babel-preset@*".
warning "react-native > @react-native/codegen@0.73.3" has unmet peer dependency "@babel/preset-env@^7.1.6".
warning "@react-navigation/native-stack > @react-navigation/elements@1.3.30" has unmet peer dependency "react-native-safe-area-context@>= 3.0.0".
warning " > @react-navigation/native-stack@6.9.26" has unmet peer dependency "react-native-safe-area-context@>= 3.0.0".
warning " > @react-navigation/native-stack@6.9.26" has unmet peer dependency "react-native-screens@>= 3.0.0".
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 13 new dependencies.
info Direct dependencies
├─ @react-navigation/native-stack@6.9.26
└─ @react-navigation/native@6.1.17
info All dependencies
├─ @react-navigation/core@6.4.16
├─ @react-navigation/elements@1.3.30
├─ @react-navigation/native-stack@6.9.26
├─ @react-navigation/native@6.1.17
├─ @react-navigation/routers@6.1.9
├─ decode-uri-component@0.2.2
├─ fast-deep-equal@3.1.3
├─ filter-obj@1.1.0
├─ query-string@7.1.3
├─ split-on-first@1.1.0
├─ strict-uri-encode@2.0.0
├─ use-latest-callback@0.1.9
└─ warn-once@0.1.1
Done in 91.86s.
PS D:\PublishMe\RN\Antinna> yarn add  axios
yarn add v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
-native-safe-area-context@>= 3.0.0".
warning "expo > @expo/metro-config@0.17.6" has unmet peer dependency "@react-native/babel-preset@*".
warning "react-native > @react-native/codegen@0.73.3" has unmet peer dependency "@babel/preset-env@^7.1.6".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 4 new dependencies.
info Direct dependencies
└─ axios@1.6.8
info All dependencies
├─ axios@1.6.8
├─ follow-redirects@1.15.6
├─ form-data@4.0.0
└─ proxy-from-env@1.1.0
Done in 14.19s.
PS D:\PublishMe\RN\Antinna> yarn add expo-secure-store
yarn add v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > @react-navigation/native-stack@6.9.26" has unmet peer dependency "react-native-safe-area-context@>= 3.0.0".
warning " > @react-navigation/native-stack@6.9.26" has unmet peer dependency "react-native-screens@>= 3.0.0".
warning "@react-navigation/native-stack > @react-navigation/elements@1.3.30" has unmet peer dependency "react-native-safe-area-context@>= 3.0.0".
warning "expo > @expo/metro-config@0.17.6" has unmet peer dependency "@react-native/babel-preset@*".
warning "react-native > @react-native/codegen@0.73.3" has unmet peer dependency "@babel/preset-env@^7.1.6".
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ expo-secure-store@12.8.1
info All dependencies
└─ expo-secure-store@12.8.1
Done in 8.64s.
```