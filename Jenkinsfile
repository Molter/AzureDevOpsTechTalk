pipeline {
  agent any
  stages {
    stage('Docker frontend') {
      steps {
        dir('./backend/TodoList') {
            docker {
                dockerfile true
            }
        }
      }
    }
    stage('Docker backend') {
      steps {
        dir('./frontend/todo-list') {
            sh 'docker image build -t todo-backend:1.0 .'
        }
      }
    }
  }
  environment {
    ENVIRONMENT = 'dev'
  }
} 