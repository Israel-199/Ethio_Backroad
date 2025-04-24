import React from 'react'
import AboutImg from '../images/about.jpeg'
import Title from './Title';
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="About" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={AboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Welcome to Ethio-Backroads, your trusted partner in
            exploring the rich cultures, stunning landscapes, and timeless
            history of Ethiopia. Based in the heart of the Horn of Africa, we
            specialize in crafting unforgettable travel experiences to iconic
            destinations like Dire Dawa, Jigjiga, Dessie, Harar, Hawassa, Bahir
            Dar, and beyond.
          </p>
          <p>
            Our team is made up of passionate local experts who know Ethiopia
            inside and out. Whether you’re looking to wander through ancient
            walled cities, relax by serene lakes, discover vibrant marketplaces,
            or dive into diverse traditions, we are here to make your journey
            smooth, safe, and truly memorable. With a commitment to
            authenticity, personalized service, and responsible tourism, we’re
            not just offering tours—we’re sharing our home with you. Let us take
            you on a journey through Ethiopia like no one else can.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About