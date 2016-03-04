var gitGrep = require('git-grep');
var path = require('path');
var fs = require('fs');
var colors = require('colors');


var searchterm = process.argv[2];


var repoPaths = fs.readdirSync(path.resolve(__dirname + '/repos')).map(function(dirname) {
    return {
        name: dirname,
        path: path.resolve(__dirname + '/repos/' + dirname + '/.git')
    }
});

if (!searchterm || searchterm == '') {
    return console.error(colors.random("ARRR - u enter serchterm!!!!!"));
}

console.log("🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭");
console.log("🍭" + colors.blue('  Searching for') + ' ' + colors.rainbow('"' + searchterm + '"'));
console.log("🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭");

function searchRepo(repo) {
    gitGrep(repo.path, {
        rev: 'HEAD',
        term: searchterm
    }).on('data', function(data) {
        console.log(colors.blue.inverse(repo.name) + ' ' + colors.green.inverse(data.file + ' LINE:' + data.line));
        console.log(colors.green(data.text));
    }).on('error', function(err) {}).on('end', function() {});
}

repoPaths.forEach(searchRepo);
