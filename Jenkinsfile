pipeline {
  agent {
    docker {
      image 'node:14-alpine'
    }

  }
  stages {
    stage('CI') {
      agent {
        docker {
          image 'node:14-alpine'
        }

      }
      steps {
        echo 'En el stage de CI'
        sh 'docker --version'
      }
    }

  }
}