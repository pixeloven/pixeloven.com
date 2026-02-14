## apps/emails — Unmaintained Dependencies

The `apps/emails` application uses `mailing` and `mailing-core` packages which are unmaintained. This app was not included in the Node 22+ dependency upgrade. It should be considered for removal or replacement with an actively maintained alternative such as `react-email`.

---

# Saas and support
 # White glove support
 https://www.mailing.run/


## Follow Ups

### Component library
- @headlessui/react
- some other component library?
- ui (generic)
    - ui-email
    - ui-web
    - ui-native
### Native React support

### Syntax (Docs)
- Convert doc site to typescript
- Use MDX instead
    - Unify Markdown approach for both docs and blog
    - Explore Sanity for docs and blog instead?
    - https://vercel.com/templates/next.js/blog-nextjs-sanity
- Register docsearch https://docsearch.algolia.com/docs/what-is-docsearch/

### Create Changelog app

https://vercel.com/templates/nuxt/logspot
Make something like this?

### Other Items
- [] Go through all deps on blog
- [] Upgrade blog site an deps
- [] Install sharp across each app
- [] Merge all the font usage and assets
- [] Merge apps by zone? 
- [] Make them avalible offline?
- [] Can all three apps (minus APIs) be static?

(See Advanced markdown blog for example)
- [] Create new favicons for all device types???
- [] Setup SEO for site
- [] Add Google analytics to entire site
- [] Can we make it so the blog and docs use the same markdown setup?

### CI/CD
- https://tyk.io/ or kong all in k8
- Configure ESLINT
    - https://nextjs.org/docs/pages/building-your-application/configuring/eslint#additional-configurations
- Configure Cypress
    - snapshot testing
    - Code coverage metrics
    - https://docs.cypress.io/guides/tooling/code-coverage
    - https://nextjs.org/docs/pages/building-your-application/optimizing/testing
- https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/

### Next.js

- Configure custom global 404/error handling

### Tailwind

- Add Font family
- Doc site has them in public folder can we use a shared resource?

### Design

- Color pallate
- Logo design (not just PO)
- Light and Dark modes

Personal Site
- https://dribbble.com/shots/14532125-Personal-Website 

PixelOven
- https://vercel.com/

### Site Construction

- https://vercel.com/templates/next.js/blog-starter-kit (simple)

```
# Make it a single
Site
- Intro
    - Hero: Who we are Brand -> Stylized picture of us or our log
    - Header: Mission Statement?
    - Feature 1 (Work): Project real (Just kiln for now)
    - Feature 2 (Services): Project real (Just kiln for now)
    - CTA: Services
    - Contact Us


- Projects
    - Kiln (Framework) - Needs it's own landing page and document site

### Ideas
To start keep the site focused on Kiln and our personal growth.
- Projects (show case these)
    - Kiln (Framework) 
        - Doc site and Landing section to show it off
        - Make it easy to build and deploy
    - Sites 
        - Build personal sites using framework
    - Apps
        - Destiny stats for crucible or manager app
        - Make a game for web and native
- Services (Solutions)
    - Freelance
        - Application prototyping / architect & design
        - Deployment and management of Next.js Apps? Kiln?
        - Consultation
    - Contact section
- Account?
    - Basic profile
    - Billing
- Blog
    - Experiances
        - Flashbacks: CS Degree, Palomar, In a Time before (Retail, messign with computers on the flour)
        - As an EM
        - As an IC
        - Decision to go IC again
    - Learnings as an eng
- Experiances
    - Flashbacks: CS Degree, Palomar, In a Time before (Retail, messign with computers on the flour)
    - As an EM
    - As an IC
    - Decision to go IC again
- Learnings as an eng
```

### Revenue
- Blog ads that promote tooling. Ads should feel very purposeful. Perhaps even custom built Affiliate. Only on blog and only for products/services/apps I believe in.


### Contribution doc
- install node
- npm install turbo --global
- brew install act (specify version) -- good for testing our CI