$(document).ready(function() {

  function ViewModel() {
    this.image = {
      "__v": 0,
      "_id": "hairmare/node",
      "date": "2014-11-05T00:59:06.117Z",
      "hub": {
        "description": "node.js on Gentoo wut?",
        "is_official": false,
        "is_trusted": true,
        "name": "hairmare/node",
        "star_count": 0
      },
      "needsBuild": true,
      "syncHub": true,
      "recentBuilds": [
        {
          "_id": "test1",
          "date": "2014-11-05T00:59:06.117Z"
        },
        {
          "_id": "test2",
          "date": "2014-11-06T12:59:06.117Z"
        }
      ]
    };
    this.build = {
        "__v": 1,
        "_id": "test1",
        "clean": {
            "log": [
            ]
        },
        "date": "2014-11-05T01:07:59.006Z",
        "image": {
            "$ref": "/images/hairmare/node",
            "name": "hairmare/node"
        },
        "pull": {
            "log": [
              "Much log content goes here",
              "Even moar"
            ]
        },
        "result": {
            "log": []
        },
        "run": {
            "log": []
        },
        "runStage": "asdf"
    };
    this.loadImage = function(callback, page) {
      // @todo iget rid of extremely dirty substr hack
      client.images.read(page.route[0].substr(9)).done(callback);
    }
    this.loadBuild = function(callback, page) {
      client.builds.read(page.ctx.id()).done(callback);
    }
  };

  var client = new $.RestClient('http://localhost:8090/', {stripTrailingSlash: true});
  client.add('images');
  client.add('builds');

  var model = new ViewModel();

  pager.extendWithPage(model);
  ko.applyBindings(model);
  pager.start();


});
