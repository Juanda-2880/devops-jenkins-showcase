#  DevOps Jenkins Showcase

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white" />
  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=FF9900" />
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" />
</p>

---

##  Descripción General

**DevOps Jenkins Showcase** es un proyecto de demostración que integra las mejores prácticas de DevOps para el despliegue automatizado de una aplicación web informativa sobre Jenkins. El proyecto abarca desde la escritura del código frontend hasta el aprovisionamiento de infraestructura en la nube y la automatización del ciclo de vida del software mediante un pipeline de integración y despliegue continuo (CI/CD).

Cada cambio realizado en el repositorio desencadena automáticamente un pipeline en Jenkins que construye la aplicación, genera una imagen Docker y la despliega en una instancia EC2 de AWS, garantizando entregas rápidas, repetibles y confiables.

---

##  Página de Jenkins en PC



https://github.com/user-attachments/assets/13fce550-f719-4b2c-8e05-d220021c6a69

##  Página de Jenkins en Mobile 



<p align="center">
  <video src="https://github.com/user-attachments/assets/cdc2850b-5d91-42b4-9717-746bdc5683b4" width="350px"></video>
</p>

## EC2 en AWS


<img width="1600" height="731" alt="WhatsApp Image 2026-05-03 at 10 18 41 AM" src="https://github.com/user-attachments/assets/2a4a4a69-bec3-4e32-8126-927bc7dd0b47" />

---

<img width="1600" height="805" alt="WhatsApp Image 2026-05-03 at 10 18 58 AM" src="https://github.com/user-attachments/assets/32b1097d-989f-4963-a0c2-2b716256b165" />


## Jenkins


<img width="1600" height="486" alt="WhatsApp Image 2026-05-03 at 10 15 45 AM" src="https://github.com/user-attachments/assets/43d66e55-26a2-44ea-b4aa-53cdeec985c7" />

----

<img width="1600" height="793" alt="WhatsApp Image 2026-05-03 at 10 16 08 AM" src="https://github.com/user-attachments/assets/de00a258-e582-451e-9340-028a6743393c" />

-----

<img width="1600" height="807" alt="WhatsApp Image 2026-05-03 at 10 16 34 AM" src="https://github.com/user-attachments/assets/7d878ddc-d1ae-4ae8-a0bf-0baf3fc022a3" />

----

<img width="1315" height="528" alt="WhatsApp Image 2026-05-03 at 10 16 50 AM" src="https://github.com/user-attachments/assets/7e99c9b7-0a8c-4802-8eac-a212764f5ac6" />

----

<img width="1600" height="349" alt="WhatsApp Image 2026-05-03 at 10 17 16 AM" src="https://github.com/user-attachments/assets/dfaef73f-4b19-400c-8dcb-c1b7ce528ed6" />

-----

## GitHub

<img width="1600" height="806" alt="WhatsApp Image 2026-05-03 at 10 18 16 AM" src="https://github.com/user-attachments/assets/bd94be13-9ba8-458d-9560-bec00255f791" />



---


**Flujo resumido:**
1. El desarrollador realiza un `git push` al repositorio.
2. Jenkins detecta el cambio mediante un webhook y ejecuta el pipeline.
3. La aplicación React es compilada y empaquetada en una imagen Docker.
4. La imagen es desplegada en una instancia EC2 aprovisionada con Terraform.
5. La aplicación queda disponible públicamente a través del puerto 3000.

---


##  Estructura del Proyecto

```
DEVOPS-JENKINS-SHOWCASE/
│
├── app/                          # Aplicación frontend (React + TypeScript)
│   ├── public/                   # Recursos estáticos públicos
│   │   ├── images/               # Imágenes del proyecto
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/                      # Código fuente de la aplicación
│   │   ├── assets/               # Recursos internos (fuentes, imágenes)
│   │   ├── components/           # Componentes React reutilizables
│   │   │   └── Header.tsx
│   │   ├── App.tsx               # Componente raíz de la aplicación
│   │   ├── index.css             # Estilos globales
│   │   └── main.tsx              # Punto de entrada de React
│   ├── Dockerfile                # Imagen Docker para producción
│   ├── index.html                # Plantilla HTML base
│   ├── package.json              # Dependencias y scripts npm
│   ├── tsconfig.json             # Configuración de TypeScript
│   ├── tsconfig.app.json         # Configuración TS para la app
│   ├── tsconfig.node.json        # Configuración TS para Node
│   ├── vite.config.ts            # Configuración de Vite
│   └── eslint.config.js          # Configuración de ESLint
│
├── Terraform/                    # Infraestructura como Código (IaC)
│   └── environments/
│       └── user_practice/        # Entorno de práctica/desarrollo
│           ├── .terraform/       # Archivos internos de Terraform (auto-generado)
│           │   ├── modules/
│           │   └── providers/
│           ├── .terraform.lock.hcl   # Lock de versiones de providers
│           ├── main.tf               # Configuración principal de recursos
│           ├── provider.tf           # Configuración del provider AWS
│           ├── terraform.tfstate     # Estado actual de la infraestructura
│           └── terraform.tfstate.backup
│   └── modules/
│       └── compute/              # Módulo reutilizable de cómputo
│           ├── EC2.tf            # Definición de la instancia EC2
│           └── SG-EC2.tf         # Grupo de seguridad para EC2
│
├── scripts/                      # Scripts de automatización
│   └── jenkins-install.sh        # Script de instalación de Jenkins en EC2
│
├── .gitignore                    # Archivos y carpetas ignorados por Git
└── README.md                     # Documentación del proyecto
```

---

##  Flujo de CI/CD con Jenkins

El pipeline de Jenkins automatiza completamente el ciclo de build y deploy. A continuación se describe cada etapa:

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  Checkout │ → │   Build  │ → │  Docker  │ → │   Push   │ → │  Deploy  │
│   (SCM)  │   │   (npm)  │   │  Build   │   │  Image   │   │  en EC2  │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
```

### Etapas del Pipeline (`Jenkinsfile`)

```groovy
docker build -t node-app ./app
docker stop my-app
docker rm my-app
docker run -d --name my-app -p 3000:3000 node-app
```

---

## ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado y configurado lo siguiente:

- **Git** ≥ 2.x
- **Node.js** ≥ 20.x y **npm** ≥ 10.x
- **Docker** ≥ 24.x (con el daemon activo)
- **Terraform** ≥ 1.7.x
- **AWS CLI** configurado con credenciales válidas (`aws configure`)
- Una cuenta de **AWS** con permisos para EC2 e IAM
- Una instancia de **Jenkins** accesible (local o en la nube)
- Par de claves **SSH** para acceso a EC2

---

##  Instalación y Ejecución Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/devops-jenkins-showcase.git
cd devops-jenkins-showcase
```

### 2. Instalar dependencias del frontend

```bash
cd app
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

### 4. Compilar para producción

```bash
npm run build
```

Los artefactos de producción se generarán en la carpeta `dist/`.

---

##  Despliegue en AWS

### Paso 1 — Aprovisionar infraestructura con Terraform

Consulta la sección [Uso de Terraform](#-uso-de-terraform) a continuación.

### Paso 2 — Instalar Jenkins en EC2

Una vez que la instancia EC2 esté activa, se ejecuta el script de instalación:

```bash
# Desde tu máquina local, copia el script a EC2
scp -i <tu-clave.pem> scripts/jenkins-install.sh ec2-user@<EC2_PUBLIC_IP>:~

# Conéctate a la instancia y ejecuta el script
ssh -i <tu-clave.pem> ec2-user@<EC2_PUBLIC_IP>
chmod +x jenkins-install.sh
./jenkins-install.sh
```

### Paso 3 — Configurar Jenkins

1. Accede a Jenkins en `http://<EC2_PUBLIC_IP>:8080`.
2. Completa la configuración inicial con la contraseña de administrador.
3. Instala los plugins recomendados: **Git**, **Docker Pipeline**, **SSH Agent**.
4. Crea las credenciales necesarias: `ec2-host` y `ec2-ssh-key`.
5. Crea un nuevo pipeline y apunta al `Jenkinsfile` del repositorio.
6. Configura el webhook en GitHub para disparar el pipeline automáticamente.

### Paso 4 — Ejecutar el pipeline

Realiza un `git push` a la rama principal y Jenkins iniciará el pipeline automáticamente.

---

##  Uso de Terraform

El directorio `Terraform/` contiene toda la infraestructura declarada como código.

### Recursos aprovisionados

- **EC2 Instance** — Servidor de aplicación (tipo `c7i-flex.large`, elegible para Free Tier).
- **Security Group (SG-EC2)** — Reglas de red: permite tráfico en los puertos `80` (HTTP), `22` (SSH), `8080` (Jenkins) y `3000` (Docker).

### Comandos principales

```bash
# Ir al directorio del entorno
cd Terraform/environments/user_practice

# Inicializar Terraform (descarga providers y módulos)
terraform init

# Previsualizar los cambios antes de aplicar
terraform plan

# Aplicar la infraestructura
terraform apply

# Destruir la infraestructura cuando ya no sea necesaria
terraform destroy
```

### Variables configurables (`main.tf` y `provider.tf`)

```hcl
module "compute" {
    source = "../../modules/compute"
}

terraform {
  required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "~> 6.0"
    }
  }
}

provider "aws" {
    region = "us-east-1"
}
```

>  **Importante:** Nunca incluyas credenciales de AWS directamente en los archivos `.tf`. Utiliza variables de entorno o el archivo `~/.aws/credentials`.

---

##  Uso de Docker

La aplicación React se sirve mediante **Nginx** dentro de un contenedor Docker.

### Dockerfile (`app/Dockerfile`)

```dockerfile
FROM node:22-alpine

# La ruta absoluta dentro del contenedor es correcta
WORKDIR /usr/src/app

# Copiamos solo los archivos de dependencias primero para optimizar el caché de Docker
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código de la app
COPY . .

# Exponemos el puerto (asegúrate de que Vite esté configurado para el 3000 o ajusta este número)
EXPOSE 3000

# Comando para iniciar. Asumiendo que usas el script "dev" de Vite. 
# El flag --host es OBLIGATORIO para que el contenedor exponga la app a tu EC2.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
```

---

##  Automatización con Jenkins

### Script de instalación (`scripts/jenkins-install.sh`)

El script `jenkins-install.sh` automatiza la instalación de Jenkins, Java y Docker en una instancia EC2 con Amazon Linux 2:

```bash
#!/bin/bash
sudo apt update -y

# Instalar Java 21 (El nuevo requisito estricto de Jenkins)
sudo apt install openjdk-21-jre -y

# Agregar clave de Jenkins (Actualizada a la versión 2026)
sudo curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key \
  | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# Agregar repositorio de Jenkins
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" \
  | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

# Actualizar paquetes
sudo apt-get update -y

# Instalar Jenkins
sudo apt-get install jenkins -y

# Habilitar e iniciar Jenkins
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
```


##  Posibles Mejoras Futuras

- [ ] **Ambiente de staging** — Añadir un entorno de pruebas previo a producción en el pipeline.
- [ ] **Tests automatizados** — Integrar pruebas unitarias y de integración (Jest, Cypress) como etapa del pipeline.
- [ ] **Registry privado** — Publicar imágenes en Amazon ECR o Docker Hub como parte del pipeline.
- [ ] **HTTPS** — Configurar un certificado SSL con Let's Encrypt y un dominio personalizado vía Route 53.
- [ ] **Auto Scaling** — Reemplazar la instancia EC2 fija por un grupo de Auto Scaling con un Application Load Balancer.
- [ ] **Notificaciones** — Integrar alertas de Slack o email al finalizar cada ejecución del pipeline.
- [ ] **Monitoreo** — Implementar monitoreo con Prometheus + Grafana o AWS CloudWatch.
- [ ] **Terraform remoto** — Migrar el estado de Terraform a un backend remoto en S3 con bloqueo en DynamoDB.
- [ ] **GitOps** — Adoptar una estrategia GitOps con ArgoCD o Flux para los despliegues.
- [ ] **Escaneo de seguridad** — Incluir análisis de vulnerabilidades en imágenes Docker con Trivy o Snyk.

---

##  Autores

**Juan David Pacheco Vargas**
**Angela Camila Quitiaquez Diaz**



