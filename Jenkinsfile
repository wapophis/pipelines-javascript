pipeline {
  agent {
    docker {
      image 'jenkins-slave:latest'
    }

  }
  stages {
    stage('BUILD') {
      agent {
        docker {
          image 'node:14-alpine'
        }

      }
      steps {
        sh 'npm install'
      }
    }

    stage('TEST') {
      steps {
        sh 'npm run build'
      }
    }

  }
}