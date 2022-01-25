import React from 'react';
import QuizLord from './LordofTheQuiz.png';
import DateNight from './DateNightGenerator.png';
import PasswordGen from './PasswordGenerator.png';

export default function Project() {
  return (
    <div>
      <h1>Projects</h1>
      <div>
      <h2>Lord of the Quiz</h2>
          <a href="https://sherlockthehomie.github.io/HerfQuiz/">
          <img src={QuizLord} className="project-logo" alt="logo"/></a>
          <p>Long ago, there was a city named Jaquery. It's people, known as the Quiz, were searching for peace in a war-torn land ravaged by a troll-like monster named Herf Man. Herf Man was the smartest enemy the Quiz had ever faced. In order to beat him they called upon you to answer their summons and defeat Herf Man, once and for all.</p>
          <p>Lord of the Quiz is an intense RPG written in Javascript that contains none of the elements that would make it logical to consider it an RPG. With 4k graphics, 120FPS and more stuff I'm saying it has but doesn't.</p>
          <p>Answer these well thought out, horrible multiple choice questions before time runs out and rack up a generous score with each correct answer. When your wrong, Herf Man makes sure you know it by yelling at you. Once your game is complete, enter your intials and watch in awe as they save to your local storage and populate the page, because you know you are going to try to beat your high score. High scores are written in stone and will need to be manually deleted if you plan on starting from scratch. However, if you do delete them, Herf Man will return and continue killing the innocent Quiz.</p>
          
        </div>
        
        <div class="Project-card">
          <h2>Date Night Creator</h2>
          <a href="https://sherlockthehomie.github.io/Urban-Disco-Burrito/">
          <img src={DateNight} className="project-logo" alt="logo"/></a>
          <p>Date Night Creator to the Rescue! Do you find yourself stuck and riddled with anxiety when trying to plan the perfect date? Well we do, so we made an application that generates the perfect combination of food, drink and music to make sure your evening is memorable.</p>
        </div>

        <div class="Project-card">
          <h2>Password Generator</h2>
          <a href="https://sherlockthehomie.github.io/Password-Gen/">
          <img src={PasswordGen} className="project-logo" alt="logo"/></a>
          <p>Password Generator is a fully functioning encrypting machine. Giving the user total control of the length and characters used in generating a safe secure password.</p>
        </div>
  </div>
  );
}
