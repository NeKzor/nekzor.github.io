const beautify = require('js-beautify').html,
    fs = require('fs');

var path = process.cwd() + '/';

var files = [
    'stats.html',
    'history.html',
    'yearly.html',
    'seum.html',
    'skill.html',
    'glitches.html',
    'mel.html',
    'parser.html',
    'cvars/hl2.html',
    'cvars/p1.html',
    'cvars/p2.html',
    'cvars/sar.html',
    'cvars/tbg.html',
    'cvars/tsp.html',
    'cvars/infra.html',
];

var format = {
    indent_size: 2,
    space_in_empty_paren: true,
    wrap_attributes: 'auto',
    operator_position: 'after-newline',
    'js': {
        'indent_size': 4
    },
};

for (let file of files) {
    console.log(file);
    fs.readFile(path + file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            fs.writeFile(path + file, beautify(data, format), (err) => {
                if (err) console.error(err);
            });
        }
    });
}
