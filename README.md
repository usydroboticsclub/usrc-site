# USRC Website
Hey maintainer!

Most of this website is pure HTML. The title bar is managed by a javascript file called `header.js`, included on every page. 

From a web developer's viewpoint, this is not ideal. However, USRC members are not all web developers, and we want to keep this easy to maintain for all our future executives. 

So don't go turning it into a ReactJS masterpiece please. Thanks.

## Website structure
If someone's thrown you to this git repo without an explainer on how the system works, then here's a quick explainer.
1. We're hosting our page on `github pages`. Github kindly provides every repository with a free hosting service. 
  - We then use the `CNAME` file to redirect this page to our domain at `usydrobotics.club.`
  - A consequence of this is that it can take up to 10min to update the website, so you'll need to be patient.
2. To make changes to the title bar, edit `header.js`.

## Editing instructions
1. Update the page you want to edit
2. `git push`

That's it.

## TODO
- Edit activities page so that it aligns with our workshop series documents: https://docs.google.com/document/d/1TB2Nsrp_xu8NzJjku20utEcAFqZWxdUic_TZ1wn3hqM/edit