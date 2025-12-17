# Windborne Test

Welcome to what maybe nothing more than my mental dumping ground. Long story short, this repo is starting as an engineering challenge that may or may not lead to anything, but has peaked my interest enough. This is going to be a WIP, but since I like writing my thought process down, I'm outlining what the plans our here so I can either look back and laugh at my feeble attempts or smile and nod at the struggles that led this getting somewhere.

Instead of outlining what the challenge is, I'll just document the thought process. Some assumptions are being made about the incoming balloon data, but for reference, here's a start of what I was looking at from the [Windborne API docs](https://api.windbornesystems.com/observations/version_1/metadata/current-location/)

## Project spin up stuffs

npm run dev

## Initial Setup

~~Phase 0 - Dry run (probably locally): spin up and spit out data and see what else comes to mind.~~

~~Phase 1 - Setup simple React FE interface that'll list the first n number of balloons (maybe 10 to start)~~

Phase 2a - Probably using [Leaflet](https://leafletjs.com/), plot out balloon locations on a map via a pin. Additionally, have maybe a line plot that can show each balloons altitude readings over time.

Phase 2b - Update balloon information to show tracking info overtime (i.e. distance traveled from one reading to another, current trending direction, altitude changes, etc.)

### Broader Picture

Phase 3 - Includes pairing the previous layout with additional data. Easy option, pick one. Modular option, devise a way to add/query additional APIs to overlay/combine data points with.
  
Topics:

- Wildfire tracking (tracking either air quality or smoke direction/dissipation)
- Commercial flight turbulence tracking (would this be public, tho?)
- Magnetic storm (maybe solar activity could affect some parameters of balloon data?)
- Some of NASA's APIs are interesting [DONKI](https://api.nasa.gov/) (of course in Shrek's voice)

### Extra ideas

- Docker container set up for (n) number of balloon coverage
- Flexible API manipulation via Rails paired with React/Vue
- FAQ page for new users/docs for reoccurring users
- Lighthearted language depending on the overall feel of how the data's being presented. (serious for fire, fun for learning, eh?)

