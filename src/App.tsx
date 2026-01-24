import reactLogo from "./assets/person2.jfif";
import "./App.css";

// Portfolio projects array – configurable
const projects = [
  {
    title: "Musikvärdet",
    description:
      "musikvardet.se hjälper dig ta reda på värdet på dina CD-skivor med uppdaterade slutpriser från Tradera, anpassat för den svenska marknaden och med tips för korrekt värdering.",
    link: "https://musikvardet.se",
  },
  {
    title: "Dustyguns",
    description:
      "dustyguns.se är en köp‑ och säljsida för airsoft‑utrustning där användare kan handla begagnade airsoftvapen och tillbehör i en enkel, mobilanpassad marknadsplats utan inloggningsbarriärer. Plattformen startade för att samla airsoftannonser på ett ställe efter att försäljning förbjöds i Facebook‑grupper, och har som mål att vara en stor marknad för airsoftentusiaster, nu även med expansion mot Danmark och Norge.",
    link: "https://dustyguns.se",
  },
  {
    title: "Bromma Records",
    description:
      "Bromma Records är en välsorterad secondhand‑skivbutik i Bromma, Stockholm som köper och säljer begagnade vinylskivor och CD. Butiken har ett brett urval av musik i olika genrer och erbjuder även att sälja skivor åt dig, köpa hela samlingar eller hjälpa till med kommissionsförsäljning.",
    link: "https://brommarecords.com",
  },
  {
    title: "Råsunda Records",
    description:
      "Råsunda Records är en skivbutik i Solna som köper och säljer nya och begagnade vinyl och CD, värderar och tar emot hela skivsamlingar, och erbjuder ett välkurerat musiksortiment i olika genrer för samlare och musikälskare.",
    link: "https://rasundarecords.com",
  },
  {
    title: "Prylex",
    description:
      "Prylex är ett sökbart inventariesystem med fokus på digitala enheter som datorer, telefoner, surfplattor med mera. Applikationen utvecklades främst för användning på en skola där jag tidigare arbetade, som ville kunna hålla koll på vem som har vilken enhet, oavsett om det är en PC, iPad eller mobiltelefon.",
    link: "https://github.com/wiberg8/Prylex",
  },
];

const technologies = [
  "C#/.NET",
  "Python",

  "REST",
  "SOAP",

  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",

  "Tailwind",
  "HTML",
  "CSS",

  "SQL",
  "MySQL",
  "Postgres",
  "SQL Server",
  "Entity Framework",

  "Git",
  "Linux",
  "CI/CD",

  "AWS",
  "Azure",
  "JSON",
  "GraphQL",
  "OAuth / JWT",
  "Postman",
];

function App() {
  return (
    <>
      <ul className="max-w-4xl px-3 py-1 mx-auto text-vs-text-primary flex text-sm gap-3">
      <li>
          <a href="#mina_projekt" className="hover:underline">
            #mina_publika_projekt
          </a>
        </li>
        <li>
          <a href="#teknologier" className="hover:underline">
            #teknologier
          </a>
        </li>
      </ul>
      <div className="max-w-4xl p-4 mx-auto">
        <About/>
        <Projects id="mina_publika_projekt"/>
        <Tech id="teknologier"/>
      </div>
    </>
  );
}

function About() {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-4">Jesper Dahlberg Wiberg</h1>

      <img
        src={reactLogo}
        className={`w-32 mb-6 aspect-1/1 object-cover`}
        alt="Jesper"
      />

      <p>Fullstackutvecklare med extra passion för backend</p>
    </div>
  );
}

function Tech({ id }: { id: string }) {
  return (
    <div className="mb-6" id={id}>
      <h2 className="text-2xl font-semibold mb-2">
        Teknologier
      </h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, idx) => (
          <span key={idx} className="bg-vs-accent text-white px-3 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects({ id }: { id: string }) {
  return (
    <div className="mb-6" id={id}>
      <h2 className="text-2xl font-semibold mb-4">Mina publika projekt</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-vs-border p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="text-vs-accent hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
