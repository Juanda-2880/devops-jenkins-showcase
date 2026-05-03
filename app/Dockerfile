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