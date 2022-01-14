import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showMenu = false;
  navLinks = [
    {link: 'home', text: 'Home', icon: 'estate'},
    {link: 'about', text: 'About', icon: 'user'},
    {link: 'skills', text: 'Skills', icon: 'file-alt'},
    {link: 'services', text: 'Services', icon: 'briefcase-alt'},
    {link: 'portfolio', text: 'Portfolio', icon: 'scenery'},
    {link: 'contact', text: 'Contact', icon: 'message'}
  ];
  
  constructor() {}

  ngOnInit() {


  }
}
