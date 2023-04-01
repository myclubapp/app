import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { Training } from "src/app/models/training";
import { TrainingService } from "src/app/services/firebase/training.service";

@Component({
  selector: "app-training-create",
  templateUrl: "./training-create.page.html",
  styleUrls: ["./training-create.page.scss"],
})
export class TrainingCreatePage implements OnInit {
  training: Training;
  constructor(
    private readonly modalCtrl: ModalController,
    private trainingService: TrainingService,
    public navParams: NavParams
  ) {
    this.training = {
      id: "",
      name: "",
      description: "",
      streetAndNumber: "",
      postalCode: "",
      city: "",
      timeFrom: new Date().toISOString(),
      timeTo: new Date().toISOString(),

      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      date: new Date(),
      teamId: "",
      teamName: "",
      liga: "",
      status: true,
      attendees: [],
    };
  }

  ngOnInit() {}

  async close() {
    return this.modalCtrl.dismiss(null, "close");
  }

  async createTraining() {
    this.trainingService.setCreateTraining(this.training);
    return this.modalCtrl.dismiss({}, "confirm");
  }
}
