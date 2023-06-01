import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Header",
    template: `
        <div id="Navbar">
            <div id="NavbarContainer">
                <div id="NavBarImageContainer">
                        <img src="/" alt="LogoPicture"/>
                </div>
                <div id="NavbarTextContainer">
                    <ul id="NavbarListContainer">
                        <li id="Home">
                            <a (click)="navigateTo('/')">Home</a>
                        </li>
                        <li id="VisitUs">
                            <a (click)="navigateTo('/VisitUs')">Visit Us</a>
                        </li>
                        <li id="Live">
                            <a (click)="navigateTo('/Live')">Live</a>
                        </li>
                        <li id="Appointment">
                            <a (click)="navigateTo('/Appointment')">Appointment</a>
                        </li>
                        <li id="Gallery">
                            <a (click)="navigateTo('/Gallery')">Gallery</a>
                        </li>
                        <li id="Contact">
                            <a (click)="navigateTo('/Contact')">Contact</a>
                        </li>
                    </ul>
                </div>
                <div id="NavbarIconContainer">
                    <div id="Youtube">
                        <a href="/" target="blank"><span class="fab fa-youtube">Youtube</span></a>
                    </div>
                    <div id="Instagram">
                        <a href="/" target="blank"></a>
                    </div>
                    <div id="Facebook">
                        <a href="/" target="blank"></a>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`

       *{
        font-family: 'Kumbh Sans', sans-serif;
       }

       #Navbar{
        height:80px;
        display: flex;
        justify-content: center;
        align-items:center;
        font-size: 1rem;
        position: sticky;
        top:0;
        z-index:999;
       }

       #NavbarContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        z-index: 1;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 0 25px;
       }

       #NavbarImageContainer{
        display:flex;
        width: 0%;
        height: 0px;
        padding-right: 10px;
       }

       #NavbarTextContainer{
        display: flex;
        padding-left: 50px;
       }

       #NavbarListContainer{
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
       }

       #NavbarListContainer li a{
        display:flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
       }

       #NavbarListContainer li{
        padding: 0 5px;
        height: 80px;
       }

       #Home{
        
       }
       
       #Home:hover{
         opacity: 0.5;
       }

       #VisitUs{
        
       }

       #VisitUs:hover{
         opacity: 0.5;
       }

       #Live{
        
       }

       #Live:hover{
         opacity: 0.5;
       }

       #Appointment{
        
       }

       #Appointment:hover{
         opacity: 0.5;
       }

       #Gallery{
        
       }

       #Gallery:hover{
         opacity: 0.5;
       }

       #Contact{
        
       }

       #Contact:hover{
         opacity: 0.5;
       }

       #NavbarIconContainer{
        
       }
    `]
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }


    
}
