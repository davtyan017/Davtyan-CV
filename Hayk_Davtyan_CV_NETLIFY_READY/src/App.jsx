import { useEffect, useState } from "react";
import "./App.css";

const experience = [
  {
    period: "Sep 2026 — Present",
    company: "Venge Engineering",
    role: "Sales Engineer / Showroom Specialist",
    location: "Yerevan, Armenia",
    points: [
      "Consult clients on Daikin HVAC solutions and help translate project requirements into practical system selections.",
      "Review floor plans, room data and operating conditions to support preliminary heat-load and equipment selection decisions.",
      "Prepare technical and commercial proposals for residential and light-commercial projects.",
      "Present solutions in the showroom and follow up with clients through the sales process."
    ]
  },
  {
    period: "Jun 2025 — Aug 2026",
    company: "VLV Centre",
    role: "Sales Specialist / Manager",
    location: "Yerevan, Armenia",
    points: [
      "Provided professional customer service and guided clients throughout the sales process.",
      "Built positive customer relationships and supported sales goals in a fast-paced retail environment."
    ]
  },
  {
    period: "Jul — Oct 2021",
    company: "“Electron” Yerevan Plant OJSC",
    role: "Technical Trainee",
    location: "Yerevan, Armenia",
    points: [
      "Worked with different types of machines and technologies.",
      "Participated in team workflows and prepared timely reports."
    ]
  },
  {
    period: "Jun — Jul 2021",
    company: "Consel LTD",
    role: "Technical Support Trainee",
    location: "Yerevan, Armenia",
    points: [
      "Assisted the customer service team with air-conditioner repair tasks and other device-related work."
    ]
  }
];

const education = [
  {
    year: "2024 — 2025",
    title: "Front-End Web Development Course",
    place: "SmartCode Development School"
  },
  {
    year: "2017 — 2021",
    title: "BA in Electrical Energetics",
    place: "National Polytechnic University of Armenia"
  },
  {
    year: "80-hour training",
    title: "OOP with C# & .NET — Certificate of Participation",
    place: "Microsoft Information Center Armenia"
  }
];

const technicalSkills = [
  "HVAC solution selection",
  "Daikin systems",
  "Multi-Split",
  "SkyAir",
  "VRV",
  "Chillers",
  "Heat-load basics",
  "Technical proposals",
  "Commercial offers",
  "Client consultation",
  "HTML / CSS",
  "JavaScript",
  "React / Redux"
];

const softSkills = [
  "Problem-solving",
  "Fast learner",
  "Strong communicator",
  "Detail-oriented",
  "Responsible",
  "Time-efficient",
  "Team player",
  "Customer-focused"
];

const projects = [
  {
    name: "Hayk Manager",
    type: "Web App",
    description: "A personal productivity and task-management web application.",
    link: "https://haykmanager.netlify.app/"
  },
  {
    name: "Films Project",
    type: "Front-End",
    description: "A responsive front-end project focused on interface and content presentation.",
    link: "https://filmsdavtyan.netlify.app/"
  },
  {
    name: "Regulus Landing",
    type: "Landing Page",
    description: "A polished landing-page project built as part of front-end practice.",
    link: "https://regulus-landing.netlify.app/"
  }
];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function getAutomaticTheme() {
  const hour = new Date().getHours();
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return systemDark || hour >= 19 || hour < 7 ? "dark" : "light";
}

function App() {
  const [automaticTheme, setAutomaticTheme] = useState(getAutomaticTheme);
  const [theme, setTheme] = useState(() => localStorage.getItem("cv-theme") || "auto");
  const effectiveTheme = theme === "auto" ? automaticTheme : theme;

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const updateAutomaticTheme = () => setAutomaticTheme(getAutomaticTheme());
    const timer = window.setInterval(updateAutomaticTheme, 60_000);
    media?.addEventListener?.("change", updateAutomaticTheme);

    return () => {
      window.clearInterval(timer);
      media?.removeEventListener?.("change", updateAutomaticTheme);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = effectiveTheme;
    localStorage.setItem("cv-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      effectiveTheme === "dark" ? "#070b0e" : "#ffffff"
    );
  }, [theme, effectiveTheme]);

  const cycleTheme = () => {
    setTheme((current) => current === "auto" ? "dark" : current === "dark" ? "light" : "auto");
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Hayk Davtyan home">
          <img className="brand-logo" src="/hd-logo.png" alt="" />
          <span className="brand-name">Hayk Davtyan</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="theme-button" onClick={cycleTheme} title={`Theme: ${theme}`}>
            {effectiveTheme === "dark" ? "☾" : "☼"}
            <span>{theme === "auto" ? "Auto" : theme === "dark" ? "Dark" : "Light"}</span>
          </button>
          <a className="button button-silver compact" href="/Hayk_Davtyan_CV.pdf" download>
            ↓ Download CV
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> SALES • ENGINEERING • HVAC</div>
            <h1>Hayk<br /><strong>Davtyan</strong></h1>
            <h2>Sales Engineer <span>&</span> Technical Consultant</h2>
            <p className="hero-lead">
              I combine technical thinking, consultative sales and client communication to turn project requirements into clear, practical HVAC solutions.
            </p>
            <div className="hero-tags">
              <span>Daikin HVAC</span>
              <span>Technical Sales</span>
              <span>Commercial Proposals</span>
            </div>
            <div className="hero-buttons">
              <a className="button button-dark" href="#experience">Explore experience <span>↘</span></a>
              <a className="button button-silver" href="/Hayk_Davtyan_CV.pdf" download>↓ Download CV</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile portrait">
            <div className="portrait-frame">
              <img src="/images/hayk-davtyan.jpg" alt="Hayk Davtyan" />
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap two-column section-border">
          <div className="section-intro">
            <div className="eyebrow"><span></span> ABOUT</div>
            <h3>Technical mindset.<br/>Client-focused delivery.</h3>
          </div>
          <div className="about-content">
            <p className="large-copy">
              I am a detail-oriented sales and technical professional with experience in customer relations, front-end development and HVAC solution consulting.
            </p>
            <p>
              My current work at Venge Engineering focuses on understanding client requirements, supporting equipment selection, preparing technical and commercial proposals, and presenting solutions clearly. My background in Electrical Energetics and web technologies helps me approach problems analytically while communicating them in a simple, practical way.
            </p>
            <div className="fact-grid">
              <div><span>Current</span><strong>Venge Engineering</strong></div>
              <div><span>Field</span><strong>HVAC & Technical Sales</strong></div>
              <div><span>Education</span><strong>Electrical Energetics</strong></div>
              <div><span>Languages</span><strong>HY • RU • EN</strong></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap section-border">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span></span> EXPERIENCE</div>
              <h3>Professional journey</h3>
            </div>
            <p>From customer-facing sales to technical HVAC consulting and solution development.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-dot" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content">
                  <div className="job-head">
                    <div>
                      <h4>{item.company}</h4>
                      <p>{item.role}</p>
                    </div>
                    <span className="location">⌖ {item.location}</span>
                  </div>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="section-wrap section-border expertise-section">
          <div className="section-intro">
            <div className="eyebrow"><span></span> EXPERTISE</div>
            <h3>What I bring<br/>to a project</h3>
            <p>Technical understanding, structured communication and a commercial approach.</p>
          </div>
          <div className="expertise-grid">
            <article><Icon>01</Icon><h4>System Selection</h4><p>Matching HVAC solutions to project needs, room conditions and client priorities.</p></article>
            <article><Icon>02</Icon><h4>Technical Analysis</h4><p>Reading floor plans, collecting object data and supporting preliminary load-based selection.</p></article>
            <article><Icon>03</Icon><h4>Commercial Offers</h4><p>Preparing clear equipment selections and professional client-ready proposals.</p></article>
            <article><Icon>04</Icon><h4>Client Communication</h4><p>Explaining technical options clearly and following the client from inquiry to next steps.</p></article>
          </div>
        </section>

        <section className="section-wrap section-border skills-layout">
          <div className="section-intro">
            <div className="eyebrow"><span></span> SKILLS</div>
            <h3>Technical & commercial toolkit</h3>
          </div>
          <div className="skill-groups">
            <div>
              <h4>Technical / Professional</h4>
              <div className="skill-pills">{technicalSkills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>
            <div>
              <h4>Working style</h4>
              <div className="skill-pills muted">{softSkills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrap section-border">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span></span> SELECTED WEB PROJECTS</div>
              <h3>Built with curiosity.<br/>Shipped with code.</h3>
            </div>
            <p>Front-end work that complements my technical and commercial background.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <span>{project.type}</span>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="project-link">Open project ↗</div>
              </a>
            ))}
          </div>
        </section>

        <section className="section-wrap section-border education-layout">
          <div className="section-intro">
            <div className="eyebrow"><span></span> EDUCATION</div>
            <h3>Academic & technical foundation</h3>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.title}>
                <span>{item.year}</span>
                <div><h4>{item.title}</h4><p>{item.place}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner">
            <div>
              <div className="eyebrow light"><span></span> CONTACT</div>
              <h3>Let’s turn a requirement<br/>into a clear solution.</h3>
            </div>
            <div className="contact-cards">
              <a href="mailto:davtyann.hayk@gmail.com"><small>Email</small><strong>davtyann.hayk@gmail.com</strong></a>
              <a href="tel:+37433987366"><small>Phone</small><strong>+374 33 987 366</strong></a>
              <a href="https://github.com/davtyan017" target="_blank" rel="noreferrer"><small>GitHub</small><strong>github.com/davtyan017</strong></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <div className="brand"><img className="brand-logo" src="/hd-logo.png" alt="" /><span className="brand-name">Hayk Davtyan</span></div>
        <p>Sales Engineer • Technical Consultant • Front-End Background</p>
        <span>© 2026 Hayk Davtyan</span>
      </footer>
    </div>
  );
}

export default App;
