import Container from "../atoms/Container";

export default function About() {
  return (
    <Container section={"About"}>
      <h2>About Me</h2>
      <div className="md:flex items-end justify-between gap-10">
        <img
          src={"/images/profile.jpg"}
          alt={"Photo by Stephanie Liverani on Unsplash"}
          className="w-full md:w-3/4 rounded-md"
        />
        <p className="w-full pt-10 md:pt-0 text-lg">
          Hello! I'm Emily Harper, a frontend developer and designer. I create
          beautiful, functional web experiences with HTML, CSS, JavaScript, and
          React/Vue.js. Passionate about intuitive design and creative
          solutions, I stay updated with the latest tech. Let's bring your
          digital vision to life!
        </p>
      </div>
    </Container>
  );
}
