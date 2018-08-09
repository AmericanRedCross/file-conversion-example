
## Convert example

This is just a brief example of how single files authored in a simple [markup language](https://en.wikipedia.org/wiki/Markup_language) can be quickly converted into multiple, different export formats. In this example the 2 plain text files in the `/source/` folder are processed by the `convert.js` script to create versions in PDF, HTML for web, Rich Text Format (RTF) for word processors, and EPUB for e-books. The styling is default and extremly basic but could easily be adjusted and improved for an actual project. This is all done with a single software tool called [pandoc](https://pandoc.org/). In an additional project, additional softwares and automation processes would likely be used. This is a simplified example of the same concept behind the digitized Epidemic Disease Control for Volunteers (ECV) [toolkit](https://github.com/ifrcgo/ecv-toolkit#readme).

### Environment

To set up the environment, you'll need to install the following on your system:

- Install Node.js 8.11.3 LTS
  - Install [nvm](https://github.com/creationix/nvm)
  - Run `nvm use` to read the '.nvmrc' file and switch to the correct version of node (built using 8.11.3 LTS)
- Install Gulp using `npm install -g gulp`
- Install pandoc with `brew install pandoc` or one of the other [install options](https://pandoc.org/installing.html)
- On macOS install [BasicTeX](http://www.tug.org/mactex/morepackages.html)
  - You may need to add `/usr/local/texlive/2018basic/bin:` to your `PATH`
  - Install any number of packages you might need, for example: `sudo tlmgr install amsfonts amsmath babel bbding booktabs collection-fontsrecommended enumitem environ fancyvrb framed geometry graphicx grffile hyperref ifluatex ifxetex import lm longtable mdframed multirow needspace ntheorem setspace tabu tcolorbox textpos threeparttable titlesec titling tocloft trimspaces ulem unicode-math varwidth wrapfig xcolor`
- Alternatively, you should be able to just `brew cask install mactex`
