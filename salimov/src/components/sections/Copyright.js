const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Gonçalo Ramalho</span>
        <span>
          All rights reserved.
        </span>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/goncalor21">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/gon%C3%A7alo-ramalho-aa6990209/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
