#!bin/bash


sudo apt update
sudo apt upgrade -y  #this created prompts

sudo apt install build-essential -y
sudo apt install nginx -y
sudo apt install certbot python3-certbot-nginx -y

sudo systemctl start nginx
sudo systemctl enable nginx



sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg


echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update


sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

apt install qemu-user-static -y

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

sudo systemctl enable docker.service
sudo systemctl enable containerd.service

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


nvm install 18
npm install -g @sunodo/cli

git clone https://github.com/prototyp3-dev/world-arcade.git

cd world-arcade

git clone https://github.com/edubart/riv

cd riv

cd kernel
make
cd ..
make toolchain
cd ..

make

sunodo build

# sunodo run


# vim /etc/nginx/conf.d/nodeapp.conf
# server {
#   listen 80;
#   listen [::]:80;

#   server_name api.gabrielbarros.dev;

#   location / {
#       proxy_pass http://localhost:8080/;
#   }
# }

sudo certbot --nginx
