import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WidgetsModule } from './widgets/widgets.module';

import { WindowRef } from './browser/window-ref.service';
import { AppComponent } from './app.component';
import { LaGalleryComponent } from './la-gallery/la-gallery.component';
import { LaFoldingPanelComponent } from './la-folding-panel/la-folding-panel.component';
import { LaFoldingPanelHostDirective } from './la-folding-panel/la-folding-panel-host.directive';
import { LaAdvocacyComponent } from './la-advocacy/la-advocacy.component';
import { LaOutreachComponent } from './la-outreach/la-outreach.component';
import { LaWritingEditingComponent } from './la-writing-editing/la-writing-editing.component';
import { LaResearchComponent } from './la-research/la-research.component';
import { LaGalleryService } from './la-gallery/la-gallery.service';
import { LaHeroComponent } from './la-hero/la-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LaGalleryComponent,
    LaFoldingPanelComponent,
    LaFoldingPanelHostDirective,
    LaAdvocacyComponent,
    LaOutreachComponent,
    LaWritingEditingComponent,
    LaResearchComponent,
    LaHeroComponent,
  ],
  entryComponents: [
    LaAdvocacyComponent,
    LaOutreachComponent,
    LaWritingEditingComponent,
    LaResearchComponent,
   ],
  imports: [
    BrowserModule,
    HttpModule,
    WidgetsModule,
  ],
  providers: [
    WindowRef,
    LaGalleryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
