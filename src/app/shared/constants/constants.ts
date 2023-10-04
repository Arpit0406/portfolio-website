import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  //   public readonly tagline =
  //     'Innovative Web Developer, Crafting Seamless User Experiences & Driving Technological Advancements';

  public readonly taglineAbout = 'Bringing Imagination to Life in Every Pixel';

  public readonly aboutMe =
    "I'm Arpit Agarwal, a seasoned web developer hailing from Delhi, India, with a rich background in Angular development spanning 6 years. As a dedicated leader, I steer a dynamic team of professionals, shaping innovative web solutions. My expertise as a front-end developer and data analyst in the management consulting industry highlights my proficiency in data warehousing, analytics, and diverse front-end tools, with a specialised focus on Angular. Armed with a bachelor's degree in information technology from the Krishna Institute of Engineering and Technology, I approach every project with a strong foundation and a creative mindset. With a proven track record, I am dedicated to crafting seamless user experiences and propelling technological advancements within teams.";

  public readonly taglineExperience =
    'Academic Wisdom, Industrial Insight: My Journey';

  public readonly academic = [
    {
      timeframe: 'Aug 2013- Jun 2017',
      title: 'Bachelor of Technology (Information Technology)',
      location: 'Krishna Institute of Engineering and Technology (U.P.T.U)',
    },
    {
      timeframe: 'Apr 2012- Mar 2013',
      title: 'Higher Secondary Education',
      location: 'All Saints School (C.B.S.E)',
    },
    {
      timeframe: 'Apr 2010- Mar 2011',
      title: 'Secondary Education',
      location: 'St. Andrews School (C.B.S.E)',
    },
  ];

  public readonly job = [
    {
      timeframe: 'Mar 2018- Present',
      title: 'ZS Associates',
      location: 'Lead Frontend Developer',
    },
    {
      timeframe: 'Jun 2017- Feb 2018',
      title: 'Astrea IT Services',
      location: 'Business Intelligence Developer',
    },
    {
      timeframe: 'Jan 2017 - Feb 2017',
      title: 'CareerIn',
      location: 'Data Analyst, Intern',
    },
    {
      timeframe: 'Jun 2016 - Oct 2016',
      title: 'Lifekart eSolutions Pvt. Ltd.',
      location: 'Design and Operation Management, Intern',
    },
    {
      timeframe: 'Jan 2016 - Mar 2016',
      title: 'GeeksforGeeks',
      location: 'Technical Writer, Intern',
    },
  ];
}
