import { Component, OnInit } from "@angular/core";
import { Business } from "../../models/Business";

@Component({
  selector: "app-business",
  templateUrl: "./business.component.html",
  styleUrls: ["./business.component.css"]
})
export class BusinessComponent implements OnInit {
  business: Business[];

  constructor() {}

  ngOnInit() {
    this.business = [
      {
        name: "Ninja Wongo",
        url: "www.ninjawango.com",
        phone: "732-456-1234",
        hours: [
          "Monday (9AM - 9PM)",
          "Tuseday (11AM - 1AM)",
          "Wednesday (Closed)"
        ]
      },
      {
        name: "Mario Bros",
        url: "www.mariobros.co.uk",
        phone: "972-123-4567",
        hours: [
          "Monday (9AM - 9PM)",
          "Tuseday (Closed)",
          "Wednesday (11AM - 1AM)"
        ]
      },
      {
        name: "Padawan United",
        url: "www.padawanunited.net",
        phone: "484-256-7890",
        hours: [
          "Monday (9AM - 9PM)",
          "Tuseday (11AM - 1AM)",
          "Wednesday (11AM - 1AM)"
        ]
      }
    ];
  }
}
