import '../App.css';
import React from 'react';
import android from '../resources/android.svg';
import web from '../resources/web_dev.svg';
import software_devlopment from '../resources/software_devlopment.svg';
import kotlin from '../resources/kotlin.png';
import jetpack_compose from '../resources/jetpack-compose.png';
import web_design from '../resources/web_design.svg';
import css from '../resources/css.png';
import html from '../resources/html.png';
import java from '../resources/java.png';
import javaScript from '../resources/java_script.png';
import kmp from '../resources/kmp.svg';
import iOS from '../resources/ios.svg';
import hybrid from '../resources/hybridapp.png';

function Work() {
const works = [
    {
        icon: android,
        position: "Android App\n Development",
        alt: "Android"
    },
    {
        icon: iOS,
        position: "iOS App\n Development",
        alt: "Android"
    },
    {
        icon: hybrid,
        position: "Hybrid App\n Development",
        alt: "Android"
    },
    {
        icon: web,
        position: "Web\n Development",
        alt: "web_development.svg"
    },
    {
        icon: software_devlopment,
        position: "Software\n Development",
        alt: "software_development.svg"
    },
    {
        icon: web_design,
        position: "Web\nDesign",
        alt: "web_design.svg"
    },
];

  return (
    <div className="services">
      {works.map((work, index) => (
        <div key={index} className="work">
          <img src={work.icon} alt={work.alt} />
          <p>{work.position}</p>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  const skills = [
    {
      icon: android,
      position: "ANDROID",
      alt: "Android"
    },
    {
      icon: kotlin,
      position: "KOTLIN",
      alt: "kotlin.png"
    },
    {
      icon: kmp,
      position: "KMP",
      alt: "kotlin.png"
    },
    {
      icon: jetpack_compose,
      position: "JETPACK COMPOSE",
      alt: "jetpack-compose.png"
    },
    {
      icon: java,
      position: "JAVA",
      alt: "java.png"
    },
    {
      icon: javaScript,
      position: "JAVASCRIPT",
      alt: "java_script.png"
    },
    {
      icon: css,
      position: "CSS",
      alt: "css.png"
    },
    {
      icon: html,
      position: "HTML",
      alt: "html.png"
    },
  ];

  return (
    <div className="Skills_Container">
      {skills.map((skill, index) => (
        <div key={index}>
          <img src={skill.icon} alt={skill.alt} />
          <p>{skill.position}</p>
        </div>
      ))}
    </div>
  );
}


function WorkAndSkills() {
    return(
        <div>
            <div className="i_Do">
                <h1>What I Do</h1>
                <Work/>
            </div>
    
            <div>
                <h1 id="skill_text">My Skills</h1>
                <Skills/>
            </div>
        </div>
    );
}

export default WorkAndSkills;
