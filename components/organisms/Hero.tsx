import React from "react";
import Container from "../atoms/Container";

export default function Hero() {
  return (
    <Container>
      <div className="items-end justify-between pb-10 md:pb-28 md:flex ">
        {/* This is the headline. Change accordingly. */}
        <h1 className="w-full pb-10 md:w-3/4 md:pb-0">
          Hey, I’m Emily Harper. <br />
          Frontend Developer <br /> and Designer.
        </h1>
        <p className="w-full place-self-end text-lg leading-tight md:w-1/4">
          I specialize in crafting engaging digital experiences that elevate
          brands and drive results.
        </p>
      </div>
      <div className="animated-bg bg-300% animate-gradient h-36 w-full rounded-md bg-gradient-to-r from-orange via-pink to-orange"></div>
    </Container>
  );
}
