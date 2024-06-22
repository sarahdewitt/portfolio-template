import React from "react";
import Card from "../atoms/Card";

const cards = [
  {
    href: '/',
    src: "/images/project-mockup1.jpg",
    alt: "Personal Portfolio Website (2024)",
    title: "Personal Portfolio Website (2024)",
    desc: "A responsive, visually appealing personal website showcasing skills, projects, and a blog section.",
  },
  {
    href: '/',
    src: "/images/project-mockup2.jpg",
    alt: "E-commerce Storefront (2023)",
    title: "E-commerce Storefront (2023)",
    desc: "An interactive online store with product listings, shopping cart functionality, and secure checkout.",
  },
  {
    href: '/',
    src: "/images/project-mockup3.jpg",
    alt: "Weather Dashboard (2023)",
    title: "Weather Dashboard (2023)",
    desc: "A real-time weather application that fetches and displays weather data for multiple locations using a weather API.",
  },
  {
    href: '/',
    src: "/images/project-mockup4.jpg",
    alt: "Social Media Feed (2023)",
    title: "Social Media Feed (2023)",
    desc: "A dynamic social media feed that displays posts, likes, comments, and user interactions in real-time.",
  },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            href={card.href}
            src={card.src}
            alt={card.alt}
            title={card.title}
            desc={card.desc}
          />
        );
      })}
    </div>
  );
}
