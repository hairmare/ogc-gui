$(document).ready(function() {

  var client = new $.RestClient('/', {stripTrailingSlash: true, stringifyData: true});
  client.add('images');
  client.add('builds');

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
    var search = {
      search: ko.observable(""),
      results: ko.observable([])
    };
    search.search.subscribe(function(query) {
      console.log("saerching for", query);
      client.images.read({name: '~' + query}).done(function(results) {
        console.log("got reesults", results);
        search.results(results);
      });
    });
    this.search = search;

    var add = {
      name: ko.observable(""),
      addImage: function(form) {
        console.log("adding image", form.addImage.value);
        client.images.create({
          "name": form.addImage.value
        }).done(function(image) {
          console.log("image was added ", image);
          window.location.hash = '#image/about?id='+image._id;
        });
      }
    }
    add.name.subscribe(function(image) {
      // @todo implement me properly
      console.log("checking image", image);
    });
    this.add = add;
  };

  var model = new ViewModel();

  pager.extendWithPage(model);
  ko.applyBindings(model);
  pager.start();

});
