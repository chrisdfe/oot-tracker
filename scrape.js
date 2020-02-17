var request = require('request');
var cheerio = require('cheerio');
var _       = require('lodash');
var fs      = require('fs');

var baseUrl = 'http://www.zeldadungeon.net';
var paths = {
  hearts: 'Zelda05-ocarina-of-time-pieces-of-heart.php'
}

function scrape() {
  request([baseUrl, paths.hearts].join('/'), function(error, response, body) {
    var $ = cheerio.load(body);

    var $bodyContent = $('#body_content');
    var $boxes       = $bodyContent.find('.box1');

    var sections = _($boxes).
    map(function(box, index) {
      var $box = $(box);
      var $cells = $box.find('tr td');

      var section = {
        title: $box.find('.title_section').text(),
      };

      section.pieces = _($cells).
      map(function(cell) {
        var $cell = $(cell);

        // Look for a cell with title/image/directions
        var $piece = $cell.find('.box2');

        if ($piece.length === 0) {
          return null;
        }

        return {
          number     : parseInt($piece.find('b').text().split('#')[1].trim().trimLeft()),
          img        : $piece.find('img').attr('src'),
          directions : $piece.find('.pad.font_tiny').text()
        };
      }).
      compact().
      value();

      return section;

      // TODO: Look for a cell with just an img
      // TODO: Look for a cell with just a video
    }).
    compact().
    value();

    console.log('sections');
    console.log(JSON.stringify(sections));

    fs.writeFile('./heart_pieces.json', JSON.stringify(sections), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
    });
  });
}

module.exports = scrape;
