import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }
}
