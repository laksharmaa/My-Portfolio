// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "laksharmaa";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a Full Stack Developer with a passion of learning new technologies and building scalable Cloud Native applications. My goal is to work on challenging projects and deliver high quality software solutions.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,  // Ensure this id is unique in the array
    skill: <Icon icon="mdi:aws" className="display-4" />,
    name: "AWS",
  },
  
  {
    id: 2,  // Ensure this id is unique in the array
    skill: <Icon icon="skill-icons:expressjs-light" className="display-4" />,
    name: "Express",
  },
  {
    id: 3,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  }, 
  {
    id: 4,  // Ensure this id is unique in the array
    skill: <Icon icon="tabler:brand-cpp" className="display-4" />,
    name: "OOP",
  },
  
  {
    id: 5,  // Ensure this id is unique in the array
    skill: <Icon icon="lineicons:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 6,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 7,  // Ensure this id is unique in the array
    skill: <Icon icon="tabler:cloud-computing" className="display-4" />,
    name: "Microservices",
  },
  {
    id: 8,  // Ensure this id is unique in the array
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 9,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xqakkado";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
