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

    stage('RELEASE') {
      steps {
        sh 'docker login -u ${DOCKER_REPO_USER} -p ${DOCKER_REPO_PASS}'
      }
    }

  }
}