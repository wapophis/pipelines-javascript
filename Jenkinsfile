pipeline {
  agent any
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
        sh 'npm build'
      }
    }

    stage('RELEASE') {
      steps {
        sh 'docker login -u wapophis -p dejoramoes7'
      }
    }

  }
}