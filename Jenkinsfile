pipeline {
  agent none
  stages {
    stage('DownloadSources') {
      steps {
        git(url: 'https://github.com/Molter/AzureDevOpsTechTalk', branch: 'master')
        echo 'Hello'
      }
    }

  }
  environment {
    ENVIRONMENT = 'dev'
  }
}