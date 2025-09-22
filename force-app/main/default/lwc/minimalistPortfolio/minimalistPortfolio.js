import { LightningElement, track } from 'lwc';
import PORTFOLIO_ASSETS from '@salesforce/resourceUrl/portfolio_assets';


export default class MinimalistPortfolio extends LightningElement {
  @track isMenuOpen = false;
  // basic responsive flag: you can replace with better approach (ResizeObserver)
  get isDesktop() {
    return window.innerWidth > 1200;
  }


  // Static resource image paths (assumes you uploaded the assets as a static resource named 'portfolio_assets')
  profilePic = `${PORTFOLIO_ASSETS}/profile-pic.png`;
  aboutPic = `${PORTFOLIO_ASSETS}/about-pic.png`;
  experienceIcon = `${PORTFOLIO_ASSETS}/experience.png`;
  educationIcon = `${PORTFOLIO_ASSETS}/education.png`;
  arrowIcon = `${PORTFOLIO_ASSETS}/arrow.png`;
  checkIcon = `${PORTFOLIO_ASSETS}/checkmark.png`;
  linkedinIcon = `${PORTFOLIO_ASSETS}/linkedin.png`;
  githubIcon = `${PORTFOLIO_ASSETS}/github.png`;
  emailIcon = `${PORTFOLIO_ASSETS}/email.png`;
  project1 = `${PORTFOLIO_ASSETS}/project-1.png`;
  project2 = `${PORTFOLIO_ASSETS}/project-2.png`;
  project3 = `${PORTFOLIO_ASSETS}/project-3.png`;
  resumePdf = `${PORTFOLIO_ASSETS}/resume-example.pdf`;


  get hamburgerIconClass() {
    return this.isMenuOpen ? 'hamburger-icon open' : 'hamburger-icon';
  }


  get menuLinksClass() {
    return this.isMenuOpen ? 'menu-links open' : 'menu-links';
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  handleKeydown(event) {
    // allow Enter/Space to toggle for accessibility
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleMenu();
    }
  }


  onNavClick() {
    // close hamburger when link clicked
    this.isMenuOpen = false;
  }


  openExternal(event) {
    const url = event.currentTarget.dataset.href;
    if (url) {
      window.open(url, '_blank');
    }
  }


  downloadResume() {
    // open the static resource pdf in a new tab
    window.open(this.resumePdf, '_blank');
  }


  goToContact() {
    // scroll to contact section
    this.scrollToId('contact');
  }


  scrollToSection(event) {
    event.preventDefault();
    const target = event.currentTarget.dataset.target;
    if (target) {
      this.scrollToId(target);
    }
  }
  
    // Smooth scroll helper — prefers component-local elements, falls back to global document
    scrollToId(id) {
      if (!id) return;
    
      // Use attribute selector inside component
      let el = this.template.querySelector('.contact');
    
      // If not found in template, fallback to global document
      if (!el) {
        el = document.querySelector('.contact');
      }
    
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // eslint-disable-next-line no-console
        console.warn('scrollToId: element not found for id:', id);
      }
    }
}