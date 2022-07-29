import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Sudarshan Gawande",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "sudarshangawande98.com",
  },
  {
    label: "Contact No",
    value: "+91 7083411086",
  },
];

const jobSummary =
  "FrontEnd + backend development, Java developer. Highly motivated one, with a genuine interest in personal and professional development. To acquire a position in an organization where I can maximize my technical skills and academic knowledge and learn new skills.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Pursuing Post Graduate Diploma in Advanced Computing from </h3>
            <h3>C-DAC Mumbai(Kharghar)</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper" >
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
           
            <div style={{
    background: "url('https://github.com/sudarshangawande98/AAAA/blob/main/WhatsApp%20Image%202022-07-29%20at%204.58.00%20PM1.jpeg?raw=true')",
    height: '50vh'
}}
            className="about__content__servicesWrapper__innerContent" >
                {/* <div>
                  <FaDev size={60} color="var( --yellow-theme-main-color)" />
                </div>
                <div>
                  <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
                </div>
                <div>
                  <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
                </div>
                <div>
                  <DiApple size={60} color="var( --yellow-theme-main-color)" />
                </div> */}
            </div> 
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
