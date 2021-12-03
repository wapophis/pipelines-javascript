pipeline {
  agent {
    node {
      label 'nodejs-docker'
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