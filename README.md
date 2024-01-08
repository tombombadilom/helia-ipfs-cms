# helia-ipfs-cms-template
This is a simple implementation of a simple react and node.js cms written in typescript with storage in ipfs with helia.
## Global installation with docker-compose
```bash
docker-compose up
```
## Frontend
What we use:
- Nodejs 20
- pnpm
- React
- Vite + swc
- Typescript
- Tailwindcss
- Shadcn/ui
- Vitest
- Eslint
- ....
- 
### FrontEnd installation 
#### Manual installation
##### Prerequisites :
requires:  
- node >=20
- pnpm
```bash
nvm install 21
or if nvm is already installed
nvm use 21
```
##### Dependencies Installation
```bash
cd frontend
pnpm install
```
##### Run locally in mode Development
```bash
pnpm dev
```
##### Run locally in mode Debug
```bash
pnpm debug
```
##### Use eslint to check code quality
```bash
pnpm lint
```
##### Build
```bash
pnpm build
```
#### Bash Scripts
##### install.sh
```bash
sudo chmod +w+x install.sh
./install.sh
```
##### build.sh
```bash
sudo chmod +w+x build.sh
./build.sh
```
By Default the script is intended to prompt for:
- Node version
- Build Mode (Devlopment | Production)
- User ownership
But it can also be passed as parameters
```bash
./build.sh --username=www-data --node=21 --mode=development
```
#### Docker installation
##### Use Dockerfile
```bash
# build container
sudo docker build -t docker-Helia-IPFS-Front-image:latest .
# run container
sudo docker run -d -p 4000:80 --name docker-HICF-container docker-Helia-IPFS-Front-image:latest
```
- -t is used to tag an image. When you build an image with Docker, you can assign it a name and optionally a tag to reference it more easily later. The tag is often used to specify the version of the image.
- -d means running container in background and print container ID.
- -p for port mapping. Port mapping is used to access the services running inside a Docker container. We open a host port to give us access to a corresponding open port inside the Docker container. The above command launches an httpd container and maps the host’s port 4000 to port 80 inside that container. By default, the httpd server listens on port 80. So now, we can access the application using port 4000 on the host machine.
- -name is for the container name. Here you can use any name you prefer.

#### Fleek installation
- [Fleek.co](https://fleek.co/) has free plan to host in IPFS your FrontEnd,
  - It has cloudflare
  - Can CI/CD your Github repository directly after testing in Production
  - And guide you to set your regular DNS with your IPFS hash
- At this stage of my development , I'm not sure if I will be able to host the whole solution to Fllek or only the FrontEnd. So I will write the installation process a bit later.
  
## Backend 
- Node.js 20
- Express
- Typescript
- Eslint
- Jest
- Helia
- ...

#### Manual installation
##### Prerequisites :
requires:  
- node >=20
- pnpm@latest
- pm2@latest

```bash
nvm install 21 # to install and / or update your node version
or if nvm is already installed
nvm use 21
```
##### Dependencies Installation
```bash
cd backend
pnpm install
```
##### Run locally in mode Development
```bash
pnpm dev
```
##### Run locally in mode Debug
```bash
pnpm debug
```
##### Use eslint to check code quality
```bash
pnpm lint
```
##### Use typescript-coverage-report to check typescript typeq quality
This is optional , for developmenet purpose , no need to install it in production mode.
```bash
pnpm type
```
##### Build 
```bash
pnpm build
```
##### Build and Start using node as daemon
```bash
pnpm start
```
#### Bash Scripts
##### install.sh
```bash
sudo chmod +w+x install.sh
./install.sh
```
By Default the script is intended to prompt for:
- Node version
- Build Mode (Devlopment | Production)
- User ownership
But it can also be passed as parameters
```bash
./install.sh --username=www-data --node=21 --mode=development
```
#### Docker installation
##### Use Dockerfile
```bash
# build container
docker build -t api-server .
docker run -t -i \
      --env NODE_ENV=production \
      -p 3000:3000 \
      api-server
```
- -t is used to tag an image. When you build an image with Docker, you can assign it a name and optionally a tag to reference it more easily later. The tag is often used to specify the version of the image.
- -d means running container in background and print container ID.
- -p for port mapping. Port mapping is used to access the services running inside a Docker container. We open a host port to give us access to a corresponding open port inside the Docker container. The above command launches an httpd container and maps the host’s port 5000 to port 80 inside that container. By default, the httpd server listens on port 80. So now, we can access the application using port 5000 on the host machine.
- -name is for the container name. Here you can use any name you prefer.
