pipeline {
  agent any
  stages {
    stage('Docker frontend') {
      steps {
        dir(path: './backend/TodoList')
        sh 'docker image build -t todo-frontend:1.0 .'
      }
    }
    stage('Docker backend') {
      steps {
        dir(path: './frontend/todo-list')
        sh 'docker image build -t todo-backend:1.0 .'
      }
    }
  }
  environment {
    ENVIRONMENT = 'dev'
  }
} 