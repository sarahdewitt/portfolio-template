import Container from "../atoms/Container";

export default function Hero() {
  return (
    <Container id={"Home"}>
      <div className="items-center justify-between pt-10 lg:pt-0 lg:flex lg:flex-col">
        {/* This is the headline. Change accordingly. */}
        <h1 className="w-full place-self-start lg:w-3/4 pb-10 lg:pb-0">
          Hey, I’m Emily Harper. <br />
          Frontend Developer <br /> and Designer.
        </h1>
        {/* This is the sub headline. Change accordingly. */}
        <p className="w-5/6 place-self-end text-lg font-normal leading-tight lg:w-1/4">
          I create dynamic and interactive web interfaces that enhance brand
          identity and deliver measurable outcomes.
        </p>
      </div>
    </Container>
  );
}
