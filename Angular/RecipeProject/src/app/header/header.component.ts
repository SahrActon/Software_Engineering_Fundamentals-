import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl: './header.component.html'
})
export class  HeaderComponent {
  /**
   *  enabling this event to be listenable from outside this component
   * .e.g the parent component can listen to it **/
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
