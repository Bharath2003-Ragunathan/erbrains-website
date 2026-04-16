import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  slides = [
    {
      image: 'assets/banner-main1.webp',
      subtitle: 'START YOUR DIGITAL SUCCESS STORY WITH INNOVATIVE IT SOLUTIONS & SERVICES.',
      title: 'Microsoft Dynamics Partners in Bangalore – Trusted ERP Experts in India'
    },
    {
      image: 'assets/banner-main2.webp',
      title: 'Trusted Partner for Microsoft Dynamics and Cloud Technologies',
      subtitle: 'Business Central Partner & Microsoft Dynamics ERP',
      list: [
        { name: 'Pharmaceutical & Life Sciences', icon: 'pharma.png' },
        { name: 'Healthcare', icon: 'healthcare.png' },
        { name: 'Biotech', icon: 'biotech.png' },
        { name: 'Chemical', icon: 'chemical.png' },
        { name: 'Manufacturing & Distribution', icon: 'manufacturing.png' },
        { name: 'Banking', icon: 'banking.png' },
        { name: 'Construction & Engineering', icon: 'construction.png' },
        { name: 'Real Estate', icon: 'realestate.png' },
        { name: 'Telecommunication', icon: 'telecom.png' },
        { name: 'IT Industries', icon: 'it.png' }
      ]
    }
  ];

  currentIndex = 0;
  intervalId: any;

  logos = [
    'assets/c1.webp',
    'assets/c2.webp',
    'assets/c3.webp',
    'assets/c4.webp',
    'assets/c5.webp',
    'assets/c6.webp',
    'assets/c7.webp',
    'assets/c8.webp',
    'assets/c9.webp',
    'assets/c10.webp',
    'assets/c11.webp',
    'assets/c12.webp',
    'assets/c13.webp',
    'assets/c14.webp',
    'assets/c15.webp',
    'assets/c16.webp',
    'assets/c17.webp',
    'assets/c18.webp',
    'assets/c19.webp',
    'assets/c20.webp'
  ];

  isAtTop: boolean = true;


  ngOnInit() {
    window.addEventListener('scroll', this.checkScroll, true);
    setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.slides.length;

      this.cdr.detectChanges();

      console.log('Slide:', this.currentIndex);
    }, 4000);

    setInterval(() => {
      this.currentIndex++;

      if (this.currentIndex >= this.logos.length) {
        this.currentIndex = 0; // reset
      }

    }, 100000);
  }

  checkScroll = () => {
    this.isAtTop = window.scrollY < 100;
  };

  scrollPage() {
    if (this.isAtTop) {
      // Scroll to bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  /* AUTO SLIDE FUNCTION */
  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // 🔥 3000ms = 3 seconds (you can change)
  }

  animateCount(target: number, element: any) {
    let count = 0;
    const speed = target / 50;

    const interval = setInterval(() => {
      count += speed;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      element.innerText = Math.floor(count);
    }, 30);
  }

  openMenu: string | null = null;

  toggleDropdown(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  openWhatsApp() {
    const phone = '919999999999'; // your number
    const message = 'Hi ERBrains IT Solutions! I need help.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  chatForm = {
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  };

  startChat() {
    const { name, company, email, phone, message } = this.chatForm;

    if (!name || !company || !email || !phone || !message) {
      alert('Please fill all fields');
      return;
    }

    // OPTION 1: Open WhatsApp with details
    const text = `Hello ERBrains IT Solutions!

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const url = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    // OPTION 2 (optional): reset form
    this.chatForm = {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    };

    this.isChatOpen = false;
  }

}
