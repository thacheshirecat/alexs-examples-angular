import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { GhostsComponent } from './ghosts/ghosts.component';
import { GhostTestModal } from './ghost-test-modal/ghost-test-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AlgorithmsComponent,
    GhostsComponent,
    GhostTestModal
  ],
  imports: [
    BrowserModule,
    routing
  ],
  entryComponents: [GhostTestModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
