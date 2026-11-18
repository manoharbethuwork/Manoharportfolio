import { SocialLink } from '../models/social-link.model';
import { AboutCard } from '../models/about-card.model';
import { WorkExperience } from '../models/experience.model';
import { Skill } from '../models/skill.model';
import { Project } from '../models/project.model';
import { EducationRecord } from '../models/education.model';

export const PROFILE = {
  name: 'Bethu Manohar',
  role: 'Full Stack Software Developer | AI Enthusiast',
};

export const RESUME_URL = 'files/Manohar_Bethu.pdf';
export const CONTACT_EMAIL = 'manoharbethu.work@gmail.com';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manoharbethu',
    icon: 'ri-linkedin-box-line',
    external: true,
  },
  {
    label: 'Email',
    url: `mailto:${CONTACT_EMAIL}`,
    icon: 'ri-mail-line',
    external: false,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/Manoharbethu',
    icon: 'ri-github-line',
    external: true,
  },
];

export const ABOUT_TEXT =
  'Software developer with 9 months of experience building reliable, well-crafted products. ' +
  'I enjoy turning ideas into working software, from planning how a feature should behave to shipping it and improving it based on feedback. ' +
  'I bring a data science and machine learning foundation from college, and that background shapes how I think about problems: start with the data, test assumptions and let results guide decisions. ' +
  'I am keen to apply this by building practical AI-powered applications that solve real problems. ' +
  'I value clean, maintainable code, and I am always looking for ways to learn faster and build better. ' +
  'I am open to new opportunities in full-stack development and AI-driven products.';

export const ABOUT_CARDS: AboutCard[] = [
  {
    icon: 'ri-code-s-slash-line',
    title: 'Full-Stack Web',
    description:
      'Building fast, responsive web applications end to end, from the user interface to the APIs and database behind it.',
  },
  {
    icon: 'ri-cpu-line',
    title: 'AI & Machine Learning',
    description:
      'Building a foundation in data science and machine learning, with hands-on project experience and a growing focus on practical AI.',
  },
  {
    icon: 'ri-terminal-box-line',
    title: 'Clean Architecture',
    description:
      'I split code into small, clear layers so it stays easy to read, test and change as a project grows.',
  },
  {
    icon: 'ri-compass-3-line',
    title: 'Product Mindset',
    description: 'Turning complex problems into simple, usable software with clear user value.',
  },
];

export const EXPERIENCES: WorkExperience[] = [
  {
    role: 'Junior Software Engineer',
    company: 'Selectsys India Pvt. Ltd.',
    companyUrl: 'https://www.selectsys.com/',
    period: 'Dec 2025 – Aug 2026',
    points: [
      'Built and maintained backend modules for insurance web applications using C#, ASP.NET Core MVC and SQL Server.',
      'Wrote and optimized stored procedures in SQL Server.',
      'Developed client-side workflows with JavaScript, jQuery and AJAX connected to backend endpoints.',
      'Tested and validated REST APIs with Postman and ran end-to-end checks before every release.',
      'Investigated and resolved production issues, and took part in code reviews and sprint discussions.',
    ],
    technologies: [
      'C#',
      '.NET Core',
      'ASP.NET MVC',
      'SQL Server',
      'jQuery',
      'JavaScript',
      'REST API',
      'AJAX',
    ],
  },
];

export const SKILLS: Skill[] = [
  { name: 'C#', image: 'icons/skills/csharp.svg' },
  { name: 'ASP.NET MVC', image: 'icons/skills/dotnet.svg' },
  { name: '.NET Core', image: 'icons/skills/dotnetcore.svg' },
  { name: 'REST APIs', icon: 'ri-braces-line' },
  { name: 'ADO.NET', icon: 'ri-database-2-line' },
  { name: 'SQL Server', image: 'icons/skills/sqlserver.svg' },
  { name: 'JavaScript', image: 'icons/skills/javascript.svg' },
  { name: 'jQuery', image: 'icons/skills/jquery.svg' },
  { name: 'HTML5', image: 'icons/skills/html5.svg' },
  { name: 'CSS3', image: 'icons/skills/css3.svg' },
  { name: 'Angular', image: 'icons/skills/angular.svg' },
  { name: 'Python', image: 'icons/skills/python.svg' },
  { name: 'n8n', icon: 'ri-node-tree' },
  { name: 'Machine Learning', icon: 'ri-cpu-line' },
  { name: 'Data Analysis', icon: 'ri-bar-chart-box-line' },
  { name: 'Power BI', icon: 'ri-pie-chart-2-line' },
  { name: 'Git & GitHub', image: 'icons/skills/github.svg' },
  { name: 'Azure', image: 'icons/skills/azure.svg' },
  { name: 'AWS', image: 'icons/skills/aws.svg' },
];

export const INDEPENDENT_PROJECTS: Project[] = [
  {
    title: 'More builds coming soon',
    description: 'Real-time and AI-based projects that I build and host myself will appear here.',
    image: 'images/independent-built.png',
    technologies: [],
  },
];

export const FOUNDATIONAL_PROJECTS: Project[] = [
  {
    title: 'CoverPay: Insurance Payments',
    description:
      'An insurance payment platform for collecting premiums, with payment tracking, automatic retries for failed payments and refund handling.',
    image: 'images/project-coverpay.png',
    technologies: [
      'C#',
      'ASP.NET MVC / Core',
      'REST APIs',
      'Role-Based Access',
      'SQL Server',
      'JavaScript',
      'jQuery',
    ],
    url: 'https://www.selectsys.com/platform/coverpay',
    external: true,
  },
  {
    title: 'First Insurance: RQB',
    description:
      'A multi-carrier insurance platform that rates a submission, compares quotes across carriers and prepares it for bind, with rules for eligibility and referrals.',
    image: 'images/project-fi.png',
    technologies: [
      'C#',
      'ASP.NET MVC / Core',
      'REST APIs',
      'Role-Based Access',
      'SQL Server',
      'JavaScript',
      'jQuery',
    ],
    url: 'https://www.selectsys.com/platform/rqb',
    external: true,
  },
  {
    title: 'Car Price Prediction',
    description:
      'Compares four deep learning and hybrid models (CNN+RNN, LSTM+RF, CNN+RF and RNN+RF) for predicting used car prices. A web app gives instant price estimates from car details.',
    image: 'images/project-car.png',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'Flask',
      'Pandas'
    ],
    url: 'https://github.com/Manoharbethu/CarPrice-Prediction',
    external: true,
  },
  {
    title: 'McDonalds Nutrition EDA',
    description:
      "Exploratory data analysis of McDonald's menu nutrition data, covering calories, fat, sugar and sodium. Uses few analysis techniques to find patterns and point toward healthier menu choices.",
    image: 'images/project-eda.png',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'SciPy'
    ],
    url: 'https://github.com/Manoharbethu/Exploratory-Data-Analysis',
    external: true,
  },
];

export const EDUCATION: EducationRecord[] = [
  {
    degree: 'B.Tech – CSE (Data Science: ML & AI)',
    institution: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    period: '2021 – 2025',
    score: '7.04 CGPA',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Aditya Junior College',
    location: 'Bhimavaram, Andhra Pradesh',
    period: '2019 – 2021',
    score: '82.6%',
  },
  {
    degree: 'Matriculation (10th)',
    institution: 'Viswakavi EM High School',
    location: 'Bhimavaram, Andhra Pradesh',
    period: '2018 – 2019',
    score: '92%',
  },
];
