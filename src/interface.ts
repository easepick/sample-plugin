import { IBaseConfig } from '@easepick/base-plugin';

export interface ISamplePlugin extends IBaseConfig {
  fgColor?: string;
  bgColor?: string;
}

declare module '@easepick/core/dist/types' {
  interface ISamplePlugin {
    SamplePlugin?: ISamplePlugin;
  }
}
