FROM jenkins/slave:4.3-4-jdk11
USER root
#instalación de librerías para la ejecución de lftp
RUN apt-get update && apt-get install -y lftp
USER jenkins
