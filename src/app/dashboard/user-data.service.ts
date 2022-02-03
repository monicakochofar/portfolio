import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  constructor() {}

  LINKEDIN_URL = 'https://www.linkedin.com/in/monicakochofar/';
  GITHUB_URL = 'https://github.com/monicakochofar';

  getContactMail() {
    return 'mokdev123@gmail.com';
  }

  getAboutTechnologies() {
    return ['Angular Js / 2+', 'HTML and CSS', 'Java', 'Javascript ES6+'];
  }

  getAboutDesc() {
    return `
    <p>
      I am currently working at <b>Rogers Communications</b> as a 
      full time Front-End Developer, with a focus on 
      <b>Angular</b> in particular. 
      My work projects surround a high-impact web application, 
      which is used regularly by over 7000 call centre representatives.
    </p>
    <p>
      I'm into any software project that <b>requires 
      creativity and design</b>. After trying out many different 
      Full-Stack experiences--and recalling fond memories
      of editing Neopets themes--I have found my happy resting place 
      in Front-End. 
    </p>
    <p>
      In my spare time I love <b>concerts, travel, and video games</b>.
    </p>`;
  }

  getWorkExperience() {
    return [
      { 
        title: 'Senior Front-End Developer', 
        location: 'Rogers Communications', 
        years: 'Oct 2021 - Present'
      },
      { 
        title: 'Front-End Developer', 
        location: 'Rogers Communications', 
        years: 'Sep 2019 - Oct 2021'
      },
      { 
        title: 'Full-Stack Developer', 
        location: 'Rogers Communications', 
        years: 'Jan 2018 - Sep 2019'
      },
      { 
        title: 'Java J2EE Developer <br> (E-Commerce)', 
        location: 'Rogers Communications', 
        years: 'May 2016 - Jan 2018'
      },
      { 
        title: 'INTRO Associate (New Grad Program)', 
        location: 'Rogers Communications', 
        years: 'May 2015 - May 2016'
      },
      { 
        title: 'Ruby on Rails / Unix Developer (Co-op)', 
        location: 'Bell Canada', 
        years: 'Aug 2013 - Aug 2014'
      },
      { 
        title: 'Technical Writer <br> (Co-op)', 
        location: 'GNOME foundation - Google Summer of Code', 
        years: 'May 2012 - Aug 2012'
      }
    ];
  }

  getPortfolioList() {
    return [
      { 
        isActive: false,
        icon: 'uil-web-grid',
        title1: 'Ui/Ux',
        title2: 'Designer',
        description: 'an application created for xyz',
        languages: 'Javascript'
      },
      { 
        isActive: false,
        icon: 'uil-arrow',
        title1: 'Front-End',
        title2: 'Developer',
        description: 'an application created for xyz',
        languages: 'Javascript'
      },
      { 
        isActive: false,
        icon: 'uil-pen',
        title1: 'Branding',
        title2: 'Designer',
        description: 'an application created for xyz',
        languages: 'Javascript'
      }
    ];
  }

}