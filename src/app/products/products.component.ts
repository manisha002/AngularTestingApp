import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]= [

    {
        productTitle: "Wallpaper-1",
        description:"By David and Max",
        productImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fbatman_in_red_background_4k_hd_batman-HD.jpg&f=1&nofb=1"
    },

    {
      productTitle: "Wallpaper-2",
      description:"By Alex",
      productImage:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2Fqxl38Q6.jpg&f=1&nofb=1"
  },

  {
    productTitle: "Wallpaper-3",
    description:"By Aki and Dan",
    productImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fthe-batman-2021-artwork-4k-ft.jpg&f=1&nofb=1"
},

{
  productTitle: "Wallpaper-4",
  description:"By Raj",
  productImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fnew-batman-illustration-2020_bGZoZWeUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1"
},

{
  productTitle: "Wallpaper-5",
  description:"By Siera",
  productImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fwallpapers%2Fbatman-4k-portrait-w1.jpg&f=1&nofb=1"
},

{
  productTitle: "Wallpaper-6",
  description:"By Laura ",
  productImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fcool-robert-pattinson-as-batman_72701_3840x2160.jpg&f=1&nofb=1"
},

{
  productTitle: "Wallpaper-7",
  description:"By Mio",
  productImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixel-creation.com%2Fwp-content%2Fuploads%2Fbatman-wallpapercoramay-on-deviantart.jpg&f=1&nofb=1"
},

{
  productTitle: "Wallpaper-8",
  description:"By Dan",
  productImage:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fred-batman-dc-4k-art_70420_1920x1080.jpg&f=1&nofb=1"
}
  ];


  productsSentByChild:string[] = [];
  productCount:number=0;

  getProductDetailsFromChild(productTitle:string){

    this.productCount++;
    this.productsSentByChild.push(productTitle);

  }

}
