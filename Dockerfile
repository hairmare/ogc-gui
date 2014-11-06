FROM hairmare/node
Maintainer Lucas Bickel <hairmare@purplehaze.ch>

# stage app

COPY app          /usr/local/src/ogc-gui/app
COPY server.js    /usr/local/src/ogc-gui/server.js
COPY package.json /usr/local/src/ogc-gui/package.json
COPY bower.json   /usr/local/src/ogc-gui/bower.json
COPY README.md    /usr/local/src/ogc-gui/README.md
COPY Gruntfile.js /usr/local/src/ogc-gui/Gruntfile.js

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
    chmod +x /usr/lib/node_modules/ogc-gui/server.js

# configure runtime

ENTRYPOINT [ "node", "/usr/lib/node_modules/ogc-gui/server.js" ]
CMD ['--help']

EXPOSE 80 443
