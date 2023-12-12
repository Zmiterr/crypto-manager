FROM --platform=linux/amd64 node:18.17.0
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./

RUN npm install --ignore-scripts

# Copying source files
COPY . .

# Building app
RUN npm run build
EXPOSE 3000
# Running the app
CMD [ "npm", "start"]
