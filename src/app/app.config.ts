import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      // withRouterConfig({
        // onSameUrlNavigation:"ignore",
        // canceledNavigationResolution: "computed",
        // paramsInheritanceStrategy: "emptyOnly",
        // urlUpdateStrategy: "deferred"
      // }),
      withInMemoryScrolling({
        anchorScrolling: `enabled`,
        scrollPositionRestoration:`enabled` // Necessary
      })
    )
  ]
};
