import React from 'react'
import '../styles.css';

export default function () {
  return (
    <React.Fragment>
        <header class="header center">
            <h3>
                <a href="https://stanleyzhang7.github.io/personal-app" class="link"
                >SZ.</a
                >
            </h3>

            <nav class="nav center">
                <ul class="nav__list center">
                <li class="nav__list-item">
                    <a class="link link--nav" href="#projects">Projects</a>
                </li>
                <li class="nav__list-item">
                    <a class="link link--nav" href="#skills">Skills</a>
                </li>
                <li class="nav__list-item">
                    <a class="link link--nav" href="#contact">Contact</a>
                </li>
                </ul>

                <button type="button" aria-label="toggle theme" class="btn btn--icon">
                <i aria-hidden="true" id="btn-theme" class="fas fa-moon"></i>
                </button>

                <button
                type="button"
                aria-label="toggle navigation"
                class="btn btn--icon nav__hamburger"
                >
                <i aria-hidden="true" class="fas fa-bars"></i>
                </button>
            </nav>
        </header>

        <main>
            <div class="about center">
                <h1>Hi, my name is <span class="about__name">Stanley Zhang.</span></h1>
                <h2 class="about__role">I'm a software engineer.</h2>
                <h2 class="about__role">**WEBSITE IN DEVELOPMENT**</h2>
                <p class="about__desc">
                I'm currently working as a full stack developer after receiving my B.S. in Computer Engineering from Boston University. I am passionate in
                what I do and love constantly learning new tools and technologies.
                </p>

                <div class="about__contact center">
                <a href="https://example.com">
                    <span class="btn btn--outline">Resume</span>
                </a>

                <a
                    href="https://github.com/stanleyzhang7"
                    aria-label="github"
                    class="link link--icon"
                >
                    <i aria-hidden="true" class="fab fa-github"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/stanley-zhang2/"
                    aria-label="linkedin"
                    class="link link--icon"
                >
                    <i aria-hidden="true" class="fab fa-linkedin"></i>
                </a>
                </div>
            </div>

            <section id="projects" class="section projects">
                <h2 class="section__title">Projects</h2>

                <div class="projects__grid">
                    <div class="project">
                        <h3>Project 1</h3>
                        <p class="project__description">
                        Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                        sapiente debitis labore sed ipsam Mollitia repellat illum quod
                        unde beatae Quis
                        </p>
                        <ul class="project__stack">
                        <li class="project__stack-item">SASS</li>
                        <li class="project__stack-item">TypeScript</li>
                        <li class="project__stack-item">React</li>
                        </ul>

                        <a
                        href="https://github.com"
                        aria-label="source code"
                        class="link link--icon"
                        >
                        <i aria-hidden="true" class="fab fa-github"></i>
                        </a>
                        <a
                        href="https://example.com"
                        aria-label="live preview"
                        class="link link--icon"
                        >
                        <i aria-hidden="true" class="fas fa-external-link-alt"></i>
                        </a>
                    </div>

                    <div class="project">
                        <h3>Project 2</h3>
                        <p class="project__description">
                        Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                        sapiente debitis labore sed ipsam Mollitia repellat illum quod
                        unde beatae Quis
                        </p>
                        <ul class="project__stack">
                        <li class="project__stack-item">SASS</li>
                        <li class="project__stack-item">TypeScript</li>
                        <li class="project__stack-item">React</li>
                        </ul>

                        <a
                        href="https://github.com"
                        aria-label="source code"
                        class="link link--icon"
                        >
                        <i aria-hidden="true" class="fab fa-github"></i>
                        </a>
                        <a
                        href="https://example.com"
                        aria-label="live preview"
                        class="link link--icon"
                        >
                        <i aria-hidden="true" class="fas fa-external-link-alt"></i>
                        </a>
                    </div>

                    <div class="project">
                        <h3>Project 3</h3>
                        <p class="project__description">
                        Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                        sapiente debitis labore sed ipsam Mollitia repellat illum quod
                        unde beatae Quis
                        </p>
                        <ul class="project__stack">
                        <li class="project__stack-item">SASS</li>
                        <li class="project__stack-item">TypeScript</li>
                        <li class="project__stack-item">React</li>
                        </ul>

                        <a
                        href="https://github.com"
                        aria-label="source code"
                        class="link link--icon"
                        >
                        <i aria-hidden="true" class="fab fa-github"></i>
                        </a>
                        <a
                        href="https://example.com"
                        aria-label="live preview"
                        class="link link--icon"
                        >
                        <i aria-hidden="true" class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section class="section skills" id="skills">
                <h2 class="section__title">Skills</h2>
                <ul class="skills__list">
                <li class="skills__list-item btn btn--plain">C++</li>
                <li class="skills__list-item btn btn--plain">C#</li>
                <li class="skills__list-item btn btn--plain">C</li>
                <li class="skills__list-item btn btn--plain">Python</li>
                <li class="skills__list-item btn btn--plain">Java</li>
                <li class="skills__list-item btn btn--plain">JavaScript</li>
                <li class="skills__list-item btn btn--plain">HTML</li>
                <li class="skills__list-item btn btn--plain">CSS</li>
                <li class="skills__list-item btn btn--plain">MATLAB</li>
                <li class="skills__list-item btn btn--plain">Angular</li>
                <li class="skills__list-item btn btn--plain">React</li>
                <li class="skills__list-item btn btn--plain">Flask</li>
                <li class="skills__list-item btn btn--plain">.NET</li>
                <li class="skills__list-item btn btn--plain">TypeScript</li>
                </ul>
            </section>

            <section class="section contact center" id="contact">
                <h2 class="section__title">Contact</h2>
                <a href="mailto:stanleyz1227@gmail.com">
                <span class="btn btn--outline">Email me</span>
                </a>
            </section>
        </main>
        
        <footer class="footer">
            <a
                href="https://github.com/stanleyzhang7/personal-app"
                class="link footer__link"
            >
                Created By Stanley Zhang, &nbsp; 
            </a>
            <a
                href="https://github.com/rajshekhar26/cleanfolio-minimal/blob/main/index.html"
                class="link footer__link"
            >
                credits to Raj Shekhar
            </a>
        </footer>

        <div class="scroll-container">
        <div class="scroll-top">
            <a aria-label="Scroll up" href="#top">
                <i aria-hidden="true" class="fas fa-arrow-up"></i>
            </a>
        </div>
        </div>

        <script src="../script.js"></script>
    </React.Fragment>
  )
}   
