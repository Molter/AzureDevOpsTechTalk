pipeline {
  agent none
  stages {
    stage('DownloadSources') {
      steps {
        echo 'Hello'
      }
    }

    stage('Docker backend') {
      steps {
        dir(path: 'backend/TodoList')
      }
    }

  }
  environment {
    ENVIRONMENT = 'dev'
  }
}