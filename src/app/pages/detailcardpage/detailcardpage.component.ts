import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import * as AOS from "aos";
import { Location } from "@angular/common";

@Component({
  selector: "app-detailcardpage",
  templateUrl: "./detailcardpage.component.html",
  styleUrls: ["./detailcardpage.component.scss"],
})
export class DetailcardpageComponent implements OnInit, AfterViewInit {
  serviceData: any;

  constructor(
    private router: Router,
    private location: Location,
  ) {
    // 1. Initial attempt to get data from navigation state
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.serviceData = nav.extras.state["data"] || nav.extras.state;
    }
  }

  ngOnInit() {
    this.loadServiceData();
  }

  ngAfterViewInit() {
    // View render hone ke baad AOS ko initialize karein
    this.initAnimations();
  }

  loadServiceData() {
    // 2. Agar constructor mein data nahi mila (Refresh Case), toh history state check karein
    if (!this.serviceData || Object.keys(this.serviceData).length <= 1) {
      this.serviceData = history.state["data"] || history.state;
    }

    // 3. Agar history state bhi khali hai, toh LocalStorage (Backup) use karein
    if (!this.serviceData || !this.serviceData.title) {
      const backup = localStorage.getItem("lastServiceData");
      if (backup) {
        this.serviceData = JSON.parse(backup);
      }
    } else {
      // 4. Agar data mil gaya hai, toh isse save kar lein next refresh ke liye
      localStorage.setItem("lastServiceData", JSON.stringify(this.serviceData));
    }

    // FAQs Logic: Toggle state initialize karein
    if (this.serviceData && this.serviceData.faqs) {
      this.serviceData.faqs = this.serviceData.faqs.map((f: any) => ({
        ...f,
        isOpen: false,
      }));
    }
  }

  initAnimations() {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
        easing: "ease-in-out",
      });
      AOS.refreshHard();
    }, 400);
  }

  // Ye function class ke andar hona chahiye tha
  goBack() {
    this.location.back();
  }
}
