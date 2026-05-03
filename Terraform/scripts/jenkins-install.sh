#!/bin/bash
sudo apt update -y
# Instalar Java 17 (Recomendado para versiones modernas de Jenkins)
sudo apt install openjdk-17-jre -y

# Agregar clave de Jenkins
sudo curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key \
  | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# Agregar repositorio de Jenkins
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" \
  | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

# Actualizar paquetes
sudo apt-get update -y

# Instalar Jenkins (Faltaba la palabra 'install')
sudo apt-get install jenkins -y

# Habilitar e iniciar Jenkins (Corregido 'sysctemctl')
sudo systemctl enable jenkins
sudo systemctl start jenkins

# Instalar Docker
sudo apt install docker.io -y

# Dar permiso a Docker al usuario 'ubuntu' y al usuario 'jenkins'
sudo usermod -a -G docker ubuntu
sudo usermod -a -G docker jenkins

# Moverse al directorio del usuario ubuntu para clonar el repositorio
cd /home/ubuntu
git clone https://github.com/Juanda-2880/devops-jenkins-showcase.git

# Navegar al archivo de la aplicación
cd devops-jenkins-showcase/app

# Construir la imagen de Docker
sudo docker build . -t node-app

# Correr Docker

sudo docker run -d --name my-app -p 3000:3000 node-app