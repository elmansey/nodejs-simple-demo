FROM node
WORKDIR /node-app
COPY app.js /node-app/
RUN npm install
ENTRYPOINT [ "node","app.js" ]