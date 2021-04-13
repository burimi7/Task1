import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  
Products=[
  {
  name:'Name1',
  price:100,
  pricenew:0,
  url:'https://cdn.moooi.com/tmp/image-thumbnails/Collection/Animals/Rabbit%20Lamp/image-thumb__1290__collection_landscape_2x_jpg/Rabbit-Lamp-On-Front-Perspective.jpg'
  },
  {
  name:'Name2',
  price:26,
  pricenew:10,
  url:'https://images-na.ssl-images-amazon.com/images/I/51plDYMeulL._SX425_.jpg'
  },
  
  {
  name:'Name3',
  price:11,
  pricenew:0,
  url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8maLeM4ItrT9ST5Fb67TL6m7uYaSaT2EgA&usqp=CAU'
  },
  
  {
  name:'Name4',
  price:44,
  pricenew:23,
  url:'https://ii1.pepperfry.com/media/catalog/product/r/e/800x880/regal-4-door-wardrobe-in-walnut-suede-finish-by-trevi-furniture-regal-4-door-wardrobe-in-walnut-sued-lbjk9u.jpg'
  },
  
  {
  name:'Name5',
  price:3.2,
  pricenew:0,
  url:'https://images-na.ssl-images-amazon.com/images/I/81se1IzJZrL._SL1024_.jpg'
  },
  
  {
  name:'Name6',
  price:12.4,
  pricenew:0,
  url:'https://i.ebayimg.com/images/g/aQIAAOSwo5lbIDDx/s-l300.jpg'
  },
  
  {
  name:'Name7',
  price:9,
  pricenew:0,
  url:'https://www.abitarearreda.it/image/cache/catalog/prodotti/appendiabiti-a-muro-design-quadro-flai-01-870x870.jpg'
  },
  
  {
  name:'Name8',
  price:10,
  pricenew:0,
  url:'https://cdnit.hudsonreed.com/media/catalog/product/cache/07469e52453ec3e9e92a88c7a63b12d8/w/i/wignc4ssb_ls_anthracite_1000.jpg'
  },
  
  ]

  Blog=[
    {
    name:'Blog title1',
    text:'Text1',
    price:100,
    pricenew:0,
    url:'https://cdn.moooi.com/tmp/image-thumbnails/Collection/Animals/Rabbit%20Lamp/image-thumb__1290__collection_landscape_2x_jpg/Rabbit-Lamp-On-Front-Perspective.jpg'
    },
    {
    name:'Blog title1',
    text:'Text1',
    price:26,
    pricenew:10,
    url:'https://images-na.ssl-images-amazon.com/images/I/51plDYMeulL._SX425_.jpg'
    },
    
    {
    name:'Blog title1',
    text:'Text1',
    price:11,
    pricenew:0,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8maLeM4ItrT9ST5Fb67TL6m7uYaSaT2EgA&usqp=CAU'
    },
    
    ]


}
