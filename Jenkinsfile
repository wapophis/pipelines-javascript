pipeline {
  agent any
  stages {
    stage('CI') {
      agent {
        docker {
          image 'node:14-alpine'
        }

      }
      steps {
        echo 'En el stage de CI'
      }
    }

  }
}