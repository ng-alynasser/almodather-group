import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ServiceWorkerModule.register(`/ngsw-worker.js`, {
      enabled: environment.production,
      registrationStrategy: 'registerWithDelay:5000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
