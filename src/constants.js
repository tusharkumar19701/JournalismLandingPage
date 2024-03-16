import { FaJournalWhills } from "react-icons/fa";
import { SiLivejournal } from "react-icons/si";
import { DiTrello } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const courses = [
    {
        name:"Intro to Journalism",
        price:"Rs. 3999",
        icon: <FaJournalWhills />,
        dis: "52% off",
    },
    {
        name:"Narration in Journalism",
        price:"Rs. 2599",
        icon: <SiLivejournal />,
        dis: "60% off",
    },
    {
        name:"Advanced Journalism",
        price:"4999",
        icon: <DiTrello />,
        dis: "45% off",
    }
];

export const info = {
    name:"Mr. Arun",
    desc:"Founder - CourseTime, Retired-Journalist, Teacher",
    detail1:"Mr. Arun, who is primarily known for his storytelling skills is a retired Journalist and a Teacher,whose ink flows with the wisdom of ages.Join us as we unravel the tapestry of his remarkable journey, where every headline crafted a narrative, every byline marked a chapter, and every story resonated with the heartbeat of humanity.",
    detail2:"He is well known among students for his amazing simplified explanation with real-world examples, enabling students to understand complex topics very easily.",
    heading: "Unleash the power of your voice.",
    para: "Join us on a journey through the heart of journalism, where every wordholds the power to shape narratives, challenge perceptions, and inspire change.",
    para2:" Unlock the Power of Storytelling: Enroll Now in Our Journalism Course! Are you passionate about uncovering the truth, telling compelling stories, and making a difference in the world? Our journalism course is designed for aspiring reporters, writers, and storytellers like you!",
    para3: "Don't just read the news – be the one who writes it! Join our journalism course today and start your journey towards a career in reporting and storytelling. Enroll Now!"
}

export const icons = [
    {
        ic: <FaLinkedin />,
        hre: "https://www.linkedin.com/in/tushar-kumar-063331245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        ic: <FaGithub />,
        hre:"https://github.com/tusharkumar19701/"
    },
    {
        ic: <FaInstagram />,
        hre: "https://www.instagram.com/tusharkumar.024/"
    }
];

export default courses;