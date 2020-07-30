import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'main-lib',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/main-lib/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/main-lib/www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
