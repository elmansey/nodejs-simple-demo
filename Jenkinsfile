pipeline{
    agent any
    tools {
        nodejs "nodejs-18.8.0"
    }
    stages {
        stage("Verify Branch"){
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage("Docker Build"){
            steps {
                sh 'docker images -a'
                sh """ 
                  docker build -t elmansey/node-app-jenkins .
                  docker images -a 
                """
            }
        }
        stage("Run app testing"){
            steps {
                sh """ 
                   npm install
                   npm run test
                """
            }
        }
    }
}