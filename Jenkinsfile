pipeline {
  agent any
  stages {
    stage('Integraci�n Continua') {
      agent {
        docker {
          image 'node:14-alpine'
        }

      }
      steps {
        echo 'En el stage de CI'
        sh '''npm install
&& npm build'''
        sh 'docker login wapophis dejoramoes7'
        sh 'docker push'
      }
    }

  }
}