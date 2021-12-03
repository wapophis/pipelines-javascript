pipeline {
  agent {
    docker {
      image 'pdmlab/jenkins-node-docker-agent:6.11.1'
    }

  }
  stages {
    stage('BUILD') {
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