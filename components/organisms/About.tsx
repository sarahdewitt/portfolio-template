import Container from "../atoms/Container";

export default function About() {
  return (
    <Container id={"About"}>
      <h2>About Me</h2>
      <div className="md:flex items-end justify-between gap-10">
        {/* Replace with your own image here. */}
        <img
          src={"/images/profile.jpg"}
          alt={"Photo by Stephanie Liverani on Unsplash"}
          className="w-full md:w-3/4 rounded-md"
        />
        {/* Replace the profile description here. */}
        <p className="w-full pt-10 md:pt-0 text-lg">
          Hello! I&apos;m Emily Harper, a frontend developer and designer. I create
          beautiful, functional web experiences with HTML, CSS, JavaScript, and
          React/Vue.js. Passionate about intuitive design and creative
          solutions, I stay updated with the latest tech. Let&apos;s bring your
          digital vision to life!
        </p>
      </div>
    </Container>
  );
}
