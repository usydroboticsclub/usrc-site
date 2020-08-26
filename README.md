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
  - See the FAQ for more information.
5. test changes by running `gatsby develop` on the command line and going to `localhost:8000` in your browser
6. run `gatsby build` on the command line
6. push your changes to github.

## Long start
If you're reading this, chances that you are a little lost re: how to maintain and use this website, because perhaps you've done some frontend in HTML but you've not used React JS yet.
1. Let us convince you that React is the right tool to use.
  - We are not developing a single page web application; we have various subpages on our website.
  - Because of this, there are some parts of the website e.g. the title bar that are common between different pages.
  - Without some kind of framework, every time the title bar changes, the developer (you) would have to change all of the title bars 6 separate times.
  - React solves this problem.
2. Let us convince you that the current deployment system is the right way to go about things.
  - We don't want to pay extra for server costs, because 
    - It's a recurring cost we'd rather not have;
    - we're intelligent people who can code our own website (and its more flexible this way!)
  - For free server hosting, Github offers free hosting (thanks Github!).
  - There are some limits tho. We need to put the site in the `/docs` branch, but gatsby publishes to the `/public`. Thankfully, `gatsby-node.js` takes cares of it for us.   
2. Still unsure about how to use React and what Gatsby is? Do the FreeCodeCamp tutorial!
  - https://www.freecodecamp.org/learn/front-end-libraries/react/
  - React is a decent front-end library so you might as well use it.
  - Learn about gatsby, which is a static site system for React:
    - There are two ways to use react: server and serverless. 
    - Since we can get away with using github-pages for free, but github-pages doesn't have a server, we will be using serverless.
    - The most popular package for serverless is `gatsby`. 
    - You can read more on their website, but the main thing you will need to know is:
      - Most of the code is in the `/src` folder.
      - The actual pages are in the `/src/pages` folder.
      - Also I hope you're familiar with `import` statements in javascript!
3. Start making changes!

## FAQ
### Where do i put css files?
- Try to avoid static css files. I know what they taught you in HTML school but in gatsby, any css file is loaded on every page, causing some undesired style conflicts. 
- Instead, go into the page-data and put your css in a style tag on the page. It has to be a (React Style tag)[https://medium.learnreact.com/the-style-tag-and-react-24d6dd3ca974], not a regular one.