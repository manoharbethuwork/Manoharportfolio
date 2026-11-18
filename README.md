# Manohar Bethu | Portfolio

Single-page portfolio built with Angular (standalone components, signals, no SSR).
Pages: Home (Hero, About, Experience, Skills, Projects, Education, Contact) and /projects.

## Run locally
```
npm install
ng serve            # http://localhost:4200
ng build            # production build -> dist/Manohar_Portfolio.Client/browser
ng test             # unit tests
```

## Where to edit content
All text lives in `src/app/data/portfolio.data.ts`. Images and the resume are in `public/`.

## Structure
- `src/app/core`: navbar, footer, section-scroll service (used once)
- `src/app/shared`: reusable pieces (section heading, tech tag, project card, social links)
- `src/app/features`: home sections and the /projects page
- `src/app/models`: TypeScript shapes of the data
- `src/styles.css`: global colors, spacing and buttons

## Contact form
Messages are sent to my inbox through Web3Forms (JSON POST). The access key is public by design.

## Deployment
Any static host works. Upload `dist/Manohar_Portfolio.Client/browser`.
The host must serve `index.html` for unknown paths (so /projects works on refresh).