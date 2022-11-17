/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'tim-js-sdk' {
  import tim from 'tim-js-sdk';
  export default tim;
}

declare module 'tim-upload-plugin' {
  import TIMUploadPlugin from 'tim-upload-plugin';
  export default TIMUploadPlugin;
}

declare module 'tuicall-engine-webrtc' {
  import { TUICallEngine, TUICallEvent, TUICallType } from 'tuicall-engine-webrtc';
  export { TUICallEngine, TUICallEvent, TUICallType };
}

declare module '*.svg' {
  const content: any;
  export default content;
}
