// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Shyam2626', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'My Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 20, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['Shyam2626/LeetCodeSolns', 'Shyam2626/GOG','Shyam2626/OOPS',
                    'Shyam2626/RecursionSeries','Shyam2626/Java'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Coding Solutions',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'LeetCode - Solutions',
          description:
            'The repo which contains my LeetCode solutions',
          imageUrl:'src/assets/leetcode.png',
          link: 'https://github.com/Shyam2626/LeetCodeSolns',
        },
        {
          title: 'GeeksForGeeks - Solutions',
          description:
            'The repo which contains my Geeks-For-Geeks solutions',
          imageUrl:
            'src/assets/geeksforgeeks.png',
          link: 'https://github.com/Shyam2626/GOG',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Shyam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shyam2626',
    twitter: 'shyamsam1818',
    facebook: '',
    instagram: 'shyamk.dev',
    youtube: '', 
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'SAM_JR26',
    website: 'https://portfolio-g5gs.onrender.com/',
    phone: '+91 7550015566',
    email: 'shyamsam1818@gmail.com',
  },
  resume: {
    fileUrl:
      'src/assets/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C','Python','Java','JavaScript',
    'HTML','CSS','Tailwind','Bootstrap',
    'Node.js','Express.js',
    'MySQL','PostgreSQL','MongoDB',
    'Git','Dart','Flutter',
    'Spring-Boot','Ubuntu','Postman','Canva'
  ],
  experiences: [
    {
      company: 'Cognizant',
      position: 'Project - Intern',
      from: 'Jan 2023',
      to: 'July 2023',
      companyLink: 'https://www.cognizant.com/in/en',
    },
    {
      company: 'Code Clause',
      position: 'Java Intern',
      from: 'April 2023',
      to: 'May 2023',
      companyLink: 'https://internship.codeclause.com/',
    },
  ],
  certifications: [
    {
      name: 'Web Development',
      year: 'March 2023',
      link: 'https://www.udemy.com/certificate/UC-1ab09ef6-5dc5-4fc6-8a0e-4bd0455b81f6/',
    },
    {
      name: 'NPTEL - Elite',
      year: 'October 2023',
      link: 'https://drive.google.com/file/d/1MUuxi9ervoakIof6TpdBIQq499ENbNF3/view?usp=sharing',
    },
    {
      name: 'British English Certificate',
      year: 'August 2022',
    },
    
  ],
  educations: [
    {
      institution: "St. Joseph's Institute of Technology",
      degree: 'B.TECH',
      from: '2021',
      to: '2025'
    },
    {
      institution: 'RVM. MAT. HR. SEC. SCHOOL',
      degree: 'HSC',
      from: '2019',
      to: '2021',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made By Shyam K ❤️ <a 
      class="text-primary" href="https://github.com/Shyam2626"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> `,

  enablePWA: true,
};

export default CONFIG;
