pipeline {
  agent {
    node {
      label 'nodejs-docker-slave'
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

    stage('Publish') {
      steps {
        junit 'TEST-RESULTS.xml'
        cobertura(coberturaReportFile: 'coverage/cobertura-coverage.xml')
      }
    }

  }
}