#base image
FROM node:20-alpine

#working directory
WORKDIR /app

#copy package .json to app directory
COPY package.json .

#npm install
RUN npm install

#copy all files
COPY . .

# RUN npm run build

#port expose
EXPOSE 9009

#run project
CMD ["npm", "run", "preview"]