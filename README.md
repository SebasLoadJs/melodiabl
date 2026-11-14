<div align="center">

<a href="https://sebasloadjs.github.io/SebasLoadJs/">
  <img src="./assets/profile-cover.jpg" width="100%" alt="SEBAS / Software — Systems — Sound. Azul eléctrico con el avatar de Sebas." />
</a>

<br />

**` 𝚂𝚎𝚋𝚊𝚜 `** &nbsp; **·** &nbsp; `DEVELOPER / OPEN SOURCE / PARAGUAY`

<br />

<a href="https://sebasloadjs.github.io/SebasLoadJs/"><img src="https://img.shields.io/badge/◈_ENTER_PORTFOLIO-144e86?style=for-the-badge&labelColor=071224&color=176eac" alt="Visit my portfolio" /></a>&nbsp;
<a href="https://github.com/SebasLoadJs?tab=repositories"><img src="https://img.shields.io/badge/⌘_SOURCE_ARCHIVE-162b49?style=for-the-badge&labelColor=071224&color=244a73" alt="Explore repositories" /></a>&nbsp;
<a href="https://github.com/SebasLoadJs/NyxLink"><img src="https://img.shields.io/badge/↗_NYXLINK-263a7b?style=for-the-badge&labelColor=071224&color=335a9e" alt="NyxLink" /></a>

<br />

<sub>Software isn't only what people see. It's what makes everything work.</sub>

</div>

<br />

<img src="./assets/section-01.svg" width="100%" alt="01 / Identity and about" />

<table>
<tr>
<td width="58%" valign="top">

### Hey, I'm Sebas. <code>↗</code>

Soy **Sebas**, desarrollador de Paraguay. Exploro la arquitectura detrás de aplicaciones de Discord, clientes de audio, automatizaciones, APIs y herramientas para desarrolladores.

I enjoy working with the less visible parts of software: **systems, integrations, developer experience and maintainable architecture**.

Más que una lista de tecnologías, este perfil reúne proyectos reales, su código y las decisiones técnicas que vale la pena estudiar.

</td>
<td width="42%" valign="top">

**`developer.config.ts`**

<pre><code>const developer = {
  name: "Sebas",
  location: "Paraguay",
  focus: [
    "audio systems",
    "Discord ecosystem",
    "software architecture",
    "developer tooling"
  ],
  approach: "research → build → refine"
} as const;</code></pre>

</td>
</tr>
</table>

<br />

<img src="./assets/section-02.svg" width="100%" alt="02 / Featured projects" />

<div align="center">

### Selected work / Proyectos destacados

<sub>REAL REPOSITORIES · DIFFERENT SYSTEMS · CONTINUOUS ITERATION</sub>

</div>

<br />

<table>
<tr>
<td width="50%" valign="top">
  <a href="https://github.com/SebasLoadJs/NyxLink"><img src="./assets/nyxlink-feature.svg" width="100%" alt="NyxLink project artwork with audio waveform" /></a>
  <h3>01 — NyxLink</h3>
  <p>Audio client for Discord bots, working with <strong>Lavalink v4</strong> and <strong>NodeLink</strong>. Includes implementation modules, automated tests and examples.</p>
  <p><code>TypeScript</code> <code>Audio</code> <code>Library</code></p>
  <p><a href="https://github.com/SebasLoadJs/NyxLink"><strong>Explore repository ↗</strong></a></p>
</td>
<td width="50%" valign="top">
  <a href="https://github.com/SebasLoadJs/OguriCap-Bot"><img src="./assets/oguri-feature.svg" width="100%" alt="OguriCap Bot project artwork" /></a>
  <h3>02 — OguriCap Bot</h3>
  <p>WhatsApp automation project with plugin infrastructure, independent frontend, backend services and deployment files.</p>
  <p><code>Automation</code> <code>Node.js</code> <code>Plugins</code></p>
  <p><a href="https://github.com/SebasLoadJs/OguriCap-Bot"><strong>Explore repository ↗</strong></a></p>
</td>
</tr>
<tr>
<td colspan="2" align="center" valign="top">
  <a href="https://github.com/SebasLoadJs/KONMI-BOT-"><img src="./assets/konmi-feature.svg" width="55%" alt="KONMI Bot project artwork" /></a>
  <h3>03 — KONMI BOT</h3>
  <p>Another part of my bot-development experiments. Consult the public repository for the implementation and its current state.</p>
  <p><code>Bot</code> <code>Experimental</code></p>
  <p><a href="https://github.com/SebasLoadJs/KONMI-BOT-"><strong>Explore repository ↗</strong></a></p>
</td>
</tr>
</table>

<br />

<img src="./assets/section-03.svg" width="100%" alt="03 / Technical architecture" />

### Behind the repository / Dentro de los sistemas

El código puede decir más que una lista de badges. Estas son algunas de las estructuras verificadas en mis repositorios:

<details>
<summary><strong>✳ NyxLink — audio infrastructure</strong> &nbsp; <code>OPEN SOURCE / IN DEVELOPMENT</code></summary>
<br />

```text
NyxLink/
├── src/             implementation modules
├── tests/           automated tests
├── examples/        usage examples
├── scripts/         development utilities
├── dist/            distributable package
├── index.ts         entry point
├── package.json     package metadata
└── tsconfig.json    TypeScript configuration
```

Current package metadata: `0.1.0-dev.2`; Node.js `>=22.12.0`. Documentation covers playback, track metadata, player and node management. Features remain subject to testing and development status.

[Source](https://github.com/SebasLoadJs/NyxLink) · [Tests](https://github.com/SebasLoadJs/NyxLink/tree/v5.2/tests) · [Examples](https://github.com/SebasLoadJs/NyxLink/tree/v5.2/examples)

</details>

<details>
<summary><strong>✳ OguriCap Bot — automation and services</strong></summary>
<br />

```text
OguriCap-Bot/
├── plugins/          plugin modules
├── services/         backend services
├── frontend-next/    separate frontend
├── database/         database files
├── lib/              shared utilities
├── test/             tests
├── nginx/            server configuration
└── docker-compose.yml
```

[Source](https://github.com/SebasLoadJs/OguriCap-Bot)

</details>

<br />

### An audio client, conceptually

<a href="https://github.com/SebasLoadJs/NyxLink">
  <img src="./assets/audio-architecture.svg" width="100%" alt="Conceptual model: Discord bot connects to NyxLink client, which can use Lavalink or NodeLink as audio backend" />
</a>

<sub>Illustrative component diagram. It does not claim a live deployment, streaming traffic, or validated automatic failover.</sub>

<br /><br />

<img src="./assets/section-04.svg" width="100%" alt="04 / Technology and tools" />

<div align="center">

### TECH / TOOLKIT

<sub>Technologies found in the repositories and current areas of exploration</sub>

<br /><br />

<img src="https://skillicons.dev/icons?i=js,ts,nodejs,git,github,docker,mongodb,postgres&theme=dark&perline=8" alt="JavaScript, TypeScript, Node.js, Git, GitHub, Docker, MongoDB and PostgreSQL" />

<br /><br />

`discord.js` &nbsp; `REST APIs` &nbsp; `WebSockets` &nbsp; `Lavalink` &nbsp; `NodeLink` &nbsp; `Docker`

`Testing` &nbsp; `Documentation` &nbsp; `Modular architecture` &nbsp; `Developer experience`

</div>

<br />

### The way I approach development

| Discipline | What matters |
|:--|:--|
| `01` Architecture | Clear responsibilities and interfaces before adding complexity |
| `02` Testing | Verifying important paths, failures and regressions |
| `03` Documentation | Making projects understandable to someone new |
| `04` Operations | Configuration, deployment and maintenance as part of engineering |
| `05` Iteration | Research → build → evaluate → refine |

<br />

<img src="./assets/section-05.svg" width="100%" alt="05 / Contact and portfolio" />

<div align="center">

### Explore the work beyond this README.

This profile is the index. The portfolio contains more context, an interactive project explorer and public GitHub data when the API is available.

<br />

<a href="https://sebasloadjs.github.io/SebasLoadJs/"><img src="https://img.shields.io/badge/PORTFOLIO-OPEN_WEBSITE-176eac?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Open website" /></a>
<a href="https://github.com/SebasLoadJs?tab=repositories"><img src="https://img.shields.io/badge/GITHUB-EXPLORE_SOURCE-182e4e?style=for-the-badge&logo=github&logoColor=white" alt="Open repositories" /></a>

<br /><br />

<sub>SEBAS © 2026 · SOFTWARE / SYSTEMS / SOUND · BUILD / EXPLORE / REFINE</sub>

</div>