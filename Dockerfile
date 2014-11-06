FROM hairmare/node
Maintainer Lucas Bickel <hairmare@purplehaze.ch>

# stage app

COPY ogc-gui.js   /usr/local/src/ogc-gui/ogc-gui.js
COPY package.json /usr/local/src/ogc-gui/package.json
COPY bower.json   /usr/local/src/ogc-gui/bower.json
COPY README.md    /usr/local/src/ogc-gui/README.md
COPY Gruntfile.js /usr/local/src/ogc-gui/Gruntfile.js
COPY app          /usr/local/src/ogc-gui/app

# build app

RUN cd /usr/local/src/ogc-gui; \
    emerge -q dev-vcs/git && \
    npm install && \
    npm install grunt-cli && \
    ./node_modules/grunt-cli/bin/grunt

# install app

RUN cd /usr/local/src/ogc-gui; \
    npm install -g && \
    install -d /srv/www && \
    cp -r public/* /srv/www && \
    chmod +x /usr/lib/node_modules/ogc-gui/ogc-gui.js

# configure runtime

ENTRYPOINT [ "node", "/usr/lib/node_modules/ogc-gui/ogc-gui.js" ]
CMD ['--help']

EXPOSE 80 443
