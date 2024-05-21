import type { App } from 'vue';
import ellipsis from './ellipsis';

export default function registerDirectives(app: App) {
  app.directive('ellipsis', ellipsis);
}
