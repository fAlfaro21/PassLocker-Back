FROM node:18
EXPOSE 3000/tcp
RUN mkdir /psd
WORKDIR /psd
COPY . /psd
RUN npm install
#RUN npm update
RUN npm run start:dev
