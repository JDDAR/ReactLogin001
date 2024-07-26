//iconos
import { IoLogoGoogleplus, IoLogoOctocat, IoLogoTwitter } from "react-icons/io";
const NavPrimary = () => {
  return (
    <section className="navPrimary">
      <article className="navPrimary__container">
        <a
          className="navPrimary__volver"
          href="https://jddar.github.io/MyProjects/"
        >
          {" "}
          Volver a Proyectos{" "}
        </a>
        <a href="https://github.com/JDDAR/ReactLogin001">
          <IoLogoOctocat />
        </a>
        <a href="">
          <IoLogoTwitter />
        </a>
      </article>
    </section>
  );
};

export default NavPrimary;
