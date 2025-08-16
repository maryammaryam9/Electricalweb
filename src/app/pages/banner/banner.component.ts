import { Component } from '@angular/core';
// import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// 👇 Register modules globally
// SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  banners = [
    { image: 'assets/img/banner1.jpg' },
    { image: 'assets/img/banner2.jpg' },
    { image: 'assets/img/banner3.jpg' }
  ];
}
