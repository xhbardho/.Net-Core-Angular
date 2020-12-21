import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { log } from 'util';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  nowDate;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.nowDate = new Date(this.user.lastActive);
    });
  
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }






  getImages() {
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description

      });
    }
    return imageUrls;
  }
}
