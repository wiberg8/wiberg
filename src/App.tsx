import reactLogo from "./assets/person2.jfif";
import "./App.css";

// Portfolio projects array – configurable
const projects = [
  {
    title: "Musikvärdet",
    description:
      "musikvardet.se hjälper dig ta reda på värdet på dina CD-skivor med uppdaterade slutpriser från Tradera, anpassat för den svenska marknaden och med tips för korrekt värdering.",
    link: "https://musikvardet.se",
    image: "musikvardet.png",
    techs: ["C#", ".NET", "mysql", "linux"],
  },
  {
    title: "Dustyguns",
    description:
      "dustyguns.se är en köp‑ och säljsida för airsoft‑utrustning där användare kan handla begagnade airsoftvapen och tillbehör i en enkel, mobilanpassad marknadsplats utan inloggningsbarriärer. Plattformen startade för att samla airsoftannonser på ett ställe efter att försäljning förbjöds i Facebook‑grupper, och har som mål att vara en stor marknad för airsoftentusiaster, nu även med expansion mot Danmark och Norge.",
    link: "https://dustyguns.se",
    image: "dustyguns.png",
  },
  {
    title: "Bromma Records",
    description:
      "Bromma Records är en välsorterad secondhand‑skivbutik i Bromma, Stockholm som köper och säljer begagnade vinylskivor och CD. Butiken har ett brett urval av musik i olika genrer och erbjuder även att sälja skivor åt dig, köpa hela samlingar eller hjälpa till med kommissionsförsäljning.",
    link: "https://brommarecords.com",
    image: "brommarecords.png",
  },
  {
    title: "Råsunda Records",
    description:
      "Råsunda Records är en skivbutik i Solna som köper och säljer nya och begagnade vinyl och CD, värderar och tar emot hela skivsamlingar, och erbjuder ett välkurerat musiksortiment i olika genrer för samlare och musikälskare.",
    link: "https://rasundarecords.com",
    image: "rasundarecords.png",
  },
  {
    title: "Prylex",
    description:
      "Prylex är ett sökbart inventariesystem med fokus på digitala enheter som datorer, telefoner, surfplattor med mera. Applikationen utvecklades främst för användning på en skola där jag tidigare arbetade, som ville kunna hålla koll på vem som har vilken enhet, oavsett om det är en PC, iPad eller mobiltelefon.",
    link: "https://github.com/wiberg8/Prylex",
    image: "prylex.png",
  },
  {
    title: "WibergNyk",
    description:
      "System för att hålla koll på nycklar riktat mot skolan jag jobbade på då.",
    link: "https://github.com/wiberg8/WibergNyk",
    image: "wibergnyk.png",
  },
  {
    title: "PathFree",
    description:
      "File Lock Finder is a Windows app that shows which processes are locking a file or folder and allows you to terminate them. It helps free files or folders that cannot be deleted or modified.",
    link: "https://github.com/wiberg8/PathFree",
    image: "pathfree.png",
  },
];

const settings = {
  firstname: "Jesper",
  lastname: "Dahlberg Wiberg",
  email: "jesper.dahlberg.wiberg@gmail.com",

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  },
};

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
  "nginx",
];

const links = {
  github: "https://github.com/wiberg8",
  linkedin: "https://www.linkedin.com/in/jesper-dahlberg-wiberg-72a763139/",
};

const downloadTextFile = () => {
  // Convert array to string with new lines
  const text = technologies.join("\n");

  const blob = new Blob([text], { type: "text/plain" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "tekniker.txt";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

function App() {
  return (
    <>
      <div className="mr-10 ml-10 md:mx-10 mt-3">
        <About className="mb-6"/>
        <div className="flex flex-col gap-10 md:flex-row mb-6">
          <Experience className="md:basis-1/2" />
          <Techniques className="md:basis-1/2" />
        </div>
        <Projects className="mb-6"/>
        <a
          href="https://github.com/wiberg8/wiberg"
          className="underline text-2xl"
        >
          Källkod
        </a>
      </div>
    </>
  );
}

// function Nav() {
//   return (
//     <ul className="mx-1 md:mx-10 mt-3 py-1 text-vs-text-primary flex text-sm gap-3">
//       {navItems.map((item) => (
//         <li key={item.href}>
//           <a
//             href={item.href}
//             className="hover:underline"
//             {...(item.external && {
//               target: "_blank",
//               rel: "noopener noreferrer",
//             })}
//           >
//             {item.label}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }

function About({className }: { className: string }) {
  return (
    <div className={className}>
      <img
        src={reactLogo}
        className="w-32 aspect-square object-cover
    float-none sm:float-right
    mb-4 sm:ml-6"
        alt={settings.firstname}
      />

      <h1 className="text-3xl font-bold">{settings.getFullName()}</h1>
      <div className="group">
        <p className="mb-3 group-hover:hidden">
          Fullstackutvecklare med extra passion för backend
        </p>
        <p className="mb-3 hidden group-hover:block">
          Har du en dålig dag, skriv lite javascript så kanske du blir glad?
        </p>
      </div>
      {/* <p>Kontakt</p> */}
      <div className="flex flex-start gap-1 items-center">
        <a className="underline" href={`mailto:${settings.email}`}>
          {settings.email}
        </a>
        <button
          className="p-1 bg-vs-bg-darkest hover:bg-vs-bg-elevated hover:cursor-pointer"
          onClick={() => navigator.clipboard.writeText(settings.email)}
        >
          Kopiera
        </button>
      </div>
      <div className="flex gap-2">
        <a className="underline" href={`${links.github}`}>
          github
        </a>
        <a className="underline" href={`${links.linkedin}`}>
          linkedin
        </a>
      </div>
    </div>
  );
}

function Experience({ className }: { className: string }) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold mb-4">Arbetsliv</h2>

      <div className="flex flex-col gap-3">
        <div className="border border-vs-accent border-2 p-3">
          <p>Consid AB - Fullstackutvecklare</p>
          <div className="text-sm">
            <p>
              Från: <b>Jan 2022</b>
            </p>
            <p>
              Till: <b>Nuvarande</b>
            </p>
          </div>
        </div>
        <div className="border border-vs-border border-2 p-3">
          <p>Ekerö Kommun - IT Tekniker</p>
          <div className="text-sm">
            <p>
              Från: <b>Jun 2018</b>
            </p>
            <p>
              Till: <b>Jan 2022</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Techniques({ className }: { className: string }) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold mb-4">
        Tekniker jag främst arbetar med
      </h2>

      <div className="flex flex-wrap gap-2 mb-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="border border-vs-accent border-2 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <button
        className="p-1 bg-vs-bg-darkest hover:bg-vs-bg-elevated hover:cursor-pointer mb-1 text-sm"
        onClick={() => downloadTextFile()}
      >
        Ladda ner som (.txt)
      </button>
    </div>
  );
}

function Projects({ className }: { className: string }) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold">Publikt tillgängliga projekt</h2>
      <p className="text-sm mb-4">
        Publikt åtkomliga webbprojekt för verkliga användare samt projekt där
        jag har publicerat källkoden öppet.
      </p>

      <div className="flex flex-wrap gap-3">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="
        group
        block
        border border-vs-border
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-vs-accent
        focus-visible:ring-offset-2
        focus-visible:ring-offset-vs-bg-base
        w-[30rem]
      "
            aria-labelledby={`project-title-${idx}`}
            aria-describedby={`project-desc-${idx}`}
          >
            <div
              className="flex items-start p-1 min-h-[16rem] bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <h3
                id={`project-title-${idx}`}
                className="text-sm font-bold bg-vs-bg-base p-1 underline border border-vs-accent border-2 px-3 py-1"
              >
                {project.title}
              </h3>
            </div>

            <div className="p-2 flex flex-col gap-2">
              <p id={`project-desc-${idx}`}>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
