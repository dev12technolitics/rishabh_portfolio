import education from "../assets/Education/education.png";
import higherschool from "../assets/Education/school.png";
import high from "../assets/Education/school-bag.png";

const educationData = [
    {
        id: 1,
        institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
        degree: "Bachelor of Technology: Computer Science and Engineering",
        graduationDate: "May 2021",
        location: "Bhopal",
        img: education.src,
    },
    {
        id: 2,
        institution: "Umadutta Smriti Vidyalaya",
        degree: "Higher Secondary",
        graduationDate: "May 2017",
        location: "Rewa",
        img: higherschool.src,
    },
    {
        id: 3,
        institution: "Saraswati Shishu Mandir",
        degree: "High School",
        graduationDate: "May 2015",
        location: "Rewa",
        img: high.src,
    },
];

export default educationData;
