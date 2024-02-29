import { Component } from '@angular/core';
import { Houseinfo } from '../houseinfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css',
})

export class HouseListComponent {
  houseList: Houseinfo[] = [
    {
      id: 0,
      name: 'Tranquil Meadows Manor',
      street: '1234 Mountain View Drive',
      city: 'Boulder',
      state: 'Colorado',
      photo: "blakem2/assets/Australia.jpg",
      subphoto1: "blakem2/assets/1Australia.jpg",
      subphoto2: "blakem2/assets/2Australia.jpg",
      subphoto3: "blakem2/assets/3Australia.jpg",
      subphoto4: "blakem2/assets/4Australia.jpg",
      price: 900000,
      rent: false,
      utilities: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra vitae mauris non volutpat. Nullam ac risus elementum, vestibulum velit ut, pharetra purus. Etiam eros enim, scelerisque vitae finibus vitae, vehicula non ante. Curabitur scelerisque sagittis nibh, a posuere magna egestas placerat. Proin porta pharetra magna, a porta diam convallis eu. Praesent vitae pharetra nunc, ut fringilla nibh. Suspendisse quis ante leo. Nunc dictum, tellus eget semper bibendum, augue arcu pellentesque nisi, vitae fermentum augue felis id mauris. Etiam laoreet, nunc eu ornare porta, quam justo mattis nisl, ut tincidunt tortor leo nec nunc. Donec mollis facilisis lacus, ut viverra neque sodales venenatis. Aliquam erat volutpat. Nunc viverra, urna nec consequat mollis, urna metus dictum arcu, ut aliquam magna risus sed lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tristique feugiat erat, sed pretium nisl sodales in.",
      shown: true,
    },
    {
      id: 1,
      name: 'Whispering Pines Retreat',
      street: '5678 Pine Street',
      city: 'Flagstaff',
      state: 'Arizona',
      photo: "blakem2/assets/Canada.jpg",
      subphoto1: "blakem2/assets/1Australia.jpg",
      subphoto2: "blakem2/assets/2Australia.jpg",
      subphoto3: "blakem2/assets/3Australia.jpg",
      subphoto4: "blakem2/assets/4Australia.jpg",
      price: 600000,
      rent: false,
      utilities: false,
      description: "Nulla interdum viverra nunc, vitae blandit arcu interdum ac. In nec nisi nec sem sodales suscipit. Pellentesque vitae tristique dui, nec luctus orci. Mauris et diam sed enim tristique imperdiet sit amet eget elit. Sed efficitur, lacus eu luctus auctor, est sem aliquam odio, sit amet pellentesque diam metus ut magna. Maecenas sit amet faucibus justo. Fusce at rhoncus leo. Duis imperdiet lacus a egestas pellentesque. Nam non nunc quam. Ut vestibulum, ipsum ac lobortis pharetra, odio nibh posuere erat, in egestas augue tortor et metus.",
      shown: true,
    },
    {
      id: 2,
      name: 'Country Comfort Farmhouse',
      street: '9876 Bluegrass Lane',
      city: 'Lexington',
      state: 'Kentucky',
      photo: "blakem2/assets/Country.jpg",
      subphoto1: "blakem2/assets/1Australia.jpg",
      subphoto2: "blakem2/assets/2Australia.jpg",
      subphoto3: "blakem2/assets/3Australia.jpg",
      subphoto4: "blakem2/assets/4Australia.jpg",
      price: 550000,
      rent: false,
      utilities: false,
      description: "Curabitur imperdiet erat eget faucibus mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pulvinar, nunc id pellentesque tristique, lectus mi lobortis eros, eget condimentum nulla nibh at ex. Aenean rutrum, neque non eleifend dapibus, libero enim gravida leo, non fermentum orci lorem in arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vulputate risus ac lectus aliquet imperdiet. Nunc quis condimentum dolor, volutpat efficitur ante. Vestibulum fermentum gravida rhoncus. Ut tempus eget sapien nec euismod. Curabitur interdum mauris at lacinia dapibus. Morbi at nisi quam. Aliquam malesuada lobortis nibh id ultrices. Suspendisse sed pharetra justo.",
      shown: true,
    },
    {
      id: 3,
      name: 'Urban Chic Loft',
      street: '321 Maple Avenue',
      city: 'Brooklyn',
      state: 'New York',
      photo: "blakem2/assets/Portland.jpg",
      subphoto1: "blakem2/assets/1Australia.jpg",
      subphoto2: "blakem2/assets/2Australia.jpg",
      subphoto3: "blakem2/assets/3Australia.jpg",
      subphoto4: "blakem2/assets/4Australia.jpg",
      price: 2500,
      rent: true,
      utilities: false,
      description: "Morbi sagittis massa nibh, eget sodales orci egestas eget. Vivamus quis dui metus. Etiam at fringilla velit. Integer nec leo sollicitudin, venenatis nisi ac, vulputate nunc. Mauris consectetur maximus ex, a placerat ante bibendum volutpat. Duis malesuada vehicula justo. Pellentesque sed risus diam. Quisque mattis dictum sem, sed pulvinar ex convallis nec. Donec aliquam, arcu in accumsan fermentum, metus nulla mattis ex, vel hendrerit sapien nisi ac mi. Praesent semper semper tincidunt. Quisque a rutrum quam.",
      shown: true,
    },
    {
      id: 4,
      name: 'Seaside Haven House',
      street: '456 Harborview Terrace',
      city: 'Newport',
      state: 'Rhode Island',
      photo: "blakem2/assets/Tropical.jpg",
      subphoto1: "blakem2/assets/1Australia.jpg",
      subphoto2: "blakem2/assets/2Australia.jpg",
      subphoto3: "blakem2/assets/3Australia.jpg",
      subphoto4: "blakem2/assets/4Australia.jpg",
      price: 4000,
      rent: true,
      utilities: true,
      description: "Sed id mattis elit. In hac habitasse platea dictumst. Nunc in nibh sed nulla luctus pellentesque et quis lacus. Aenean rhoncus magna magna, molestie tempus nisi maximus eu. Sed feugiat volutpat tellus. Duis volutpat ornare massa a mattis. Maecenas sed pulvinar magna. Nunc volutpat, ligula in sollicitudin tempus, leo risus dignissim tellus, vel commodo purus turpis at erat. Morbi ac egestas dui, sit amet consequat libero. Praesent et libero eu nisl placerat sagittis. In finibus ante urna, ac ultrices justo fermentum id. Fusce dolor neque, ornare eget tristique sit amet, condimentum sit amet nisl. Praesent in nibh neque. In est nulla, finibus ac ex ut, iaculis feugiat tellus. Maecenas elementum consequat egestas.",
      shown: true,
    },
  ]

  buttonPressed = {
    houseButtonToggled : false,
    detailsButtonToggled : false,
    tourButtonToggled : false
  }

  toggleDetail(house: Houseinfo){
    this.buttonPressed.detailsButtonToggled = !this.buttonPressed.detailsButtonToggled;
    this.houseList[house.id].shown = !this.houseList[house.id].shown;

  }

  toggleTour(){
    this.buttonPressed.tourButtonToggled = !this.buttonPressed.tourButtonToggled;
  }

  //display smaller images on the left and the detailed description of house on right 
  //maybe do an animation to replace the current image and content, or just put it below
}