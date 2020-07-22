# USRC React development
## Quick start
Prerequisites:
- Node.js installed
  - here: https://nodejs.org/en/download/
- gatsby-cli installed 
  - `npm i -g gatsby-cli`
Then:
1. `git clone`
2. `git checkout develop`
3. `git pull`
4. make changes
5. test changes by running `gatsby develop` and going to `localhost:8000` in your browser
5. `node build.js` (will do everything including update the site)

## Long start
If you're reading this, chances that you are a little lost re: how to maintain and use this website, because perhaps you've done some frontend in HTML but you've not used React JS yet.
1. Let us convince you that React is the right tool to use.
  - We are not developing a single page web application; we have various subpages on our website.
  - Because of this, there are some parts of the website e.g. the title bar that are common between different pages.
  - Without some kind of framework, every time the title bar changes, the developer (you) would have to change all of the title bars 6 separate times.
  - React solves this problem.
1. Do the FreeCodeCamp tutorial in React.
  - https://www.freecodecamp.org/learn/front-end-libraries/react/
2. Learn about gatsby.
  - There are two ways to use react: server and serverless. 
  - Since we can get away with using github-pages for free, but github-pages doesn't have a server, we will be using serverless.
  - The most popular package for serverless is `gatsby`. 
  - You can read more on their website, but the main thing you will need to know is:
    - Most of the code is in the `/src` folder.
    - The actual pages are in the `/src/pages` folder.
    - Also I hope you're familiar with `import` statements in javascript!
3. Start making changes!
4. Once you're done with the changes, you need to:
  - run `gatsby build`
  - `git push`

## FAQ
### Where do i put css files?
- in public/static/css, for now. still working on it.