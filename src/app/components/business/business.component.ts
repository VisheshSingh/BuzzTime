import { Component, OnInit, ViewChild } from "@angular/core";
import { Business } from "../../models/Business";

@Component({
  selector: "app-business",
  templateUrl: "./business.component.html",
  styleUrls: ["./business.component.css"]
})
export class BusinessComponent implements OnInit {
  work: Business = {
    name: "",
    url: "",
    phone: "",
    hours: ""
  };
  business: Business[];
  enableAdd: boolean = true;
  showForm: boolean = false;
  @ViewChild("Bform")
  form: any;

  constructor() {}

  ngOnInit() {
    this.business = [
      {
        name: "Ninja Wongo",
        url: "www.ninjawango.com",
        phone: "732-456-1234",
        hours: "Monday (9AM - 9PM), Tuesday (11AM - 1AM), Wednesday (Closed)"
      },
      {
        name: "Mario Bros",
        url: "www.mariobros.co.uk",
        phone: "972-123-4567",
        hours: "Monday (9AM - 9PM), Tuesday (10AM - 8PM), Wednesday (Closed)"
      },
      {
        name: "Padawan United",
        url: "www.padawanunited.net",
        phone: "484-256-7890",
        hours: "Monday (9AM - 9PM), Tuesday (Closed), Wednesday (9AM - 7PM)"
      }
    ];
  }

  // Testing if the form adds business
  // addBusiness() {
  //   this.business.unshift(this.work);
  //   this.work = {
  //     name: "",
  //     url: "",
  //     phone: "",
  //     hours: ""
  //   };
  // }

  onSubmit({ value, valid }: { value: Business; valid: Boolean }) {
    if (!valid) {
      alert("Form is not valid");
    } else {
      this.business.unshift(value);
      this.form.reset();
    }
  }
}
