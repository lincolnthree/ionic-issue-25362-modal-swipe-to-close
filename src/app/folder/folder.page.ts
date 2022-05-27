import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { MyModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalComponent,
      swipeToClose: true,
      showBackdrop: true,
      animated: true,
      mode: 'ios',
    });

    modal.present();
  }
}
