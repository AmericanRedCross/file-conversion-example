var fs = require('fs');
var shell = require('shelljs');

var path = "./source"

fs.readdir(path, function(err, items) {

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        if(items[i].lastIndexOf(".md") !== -1){
          var basename = items[i].slice(0,items[i].lastIndexOf(".md"));
          // generate PDF
          shell.exec('pandoc --standalone --pdf-engine=pdflatex -V geometry:margin=1in --from=markdown ./source/' + basename + '.md -o ./output/' + basename + '.pdf')
          // generate rich text format
          shell.exec('pandoc --standalone --from=markdown ./source/'+ basename + '.md -o ./output/'+ basename + '.rtf')
          // generate epub
          shell.exec('pandoc --standalone --from=markdown ./source/'+ basename + '.md -o ./output/'+ basename + '.epub')
          // generate html
          shell.exec('pandoc --standalone --from=markdown ./source/'+ basename + '.md -o ./output/'+ basename + '.html')

        }
    }
});
