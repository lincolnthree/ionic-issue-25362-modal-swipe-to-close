import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MyModalComponent {


  constructor(public modalCtrl: ModalController) { }

}
