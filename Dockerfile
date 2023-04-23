FROM node
WORKDIR /node-app
COPY . /node-app/
RUN npm install
ENTRYPOINT [ "node","app.js" ]