import Phone from "../assets/add-1.svg";
import Email from "../assets/add-2.svg";
import Address from "../assets/add-3.svg";

const addressData = [
  {
    id: 1,
    title: "Phone",
    paragraph: "+91-797-484-2788",
    img: Phone.src,
    link: "tel:+917974842788",
  },
  {
    id: 2,
    title: "Email",
    paragraph: "rishabhtiwarics@gmail.com",
    img: Email.src,
    link: "mailto:rishabhtiwarics@gmail.com",
  },
  {
    id: 3,
    title: "Address",
    paragraph: "Village mahudar Tehsil Amarpatan District Satna Madhya Pradesh",
    img: Address.src,
    link: "https://www.google.com/maps?q=Village+Mahudar,+Tehsil+Amarpatan,+District+Satna,+Madhya+Pradesh",
  },
];

export default addressData;
