import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { DealerDetailsComponent } from './dealer-details/dealer-details.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { GameResultComponent } from './game-result/game-result.component';
import { CardSlotComponent } from './card-slot/card-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent,
    DealerDetailsComponent,
    ButtonPanelComponent,
    GameResultComponent,
    CardSlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
