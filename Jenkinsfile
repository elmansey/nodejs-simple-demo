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
                  docker build -t node-app-jenkins .
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
            post{
                always{
                    echo "finish :D"
                }
                success{
                    echo "the testing running successful "
                }
                failure{
                    echo "the test was failed"
                }
            }
        }
        stage("Push Container") {
            steps {
               withCredentials([usernamePassword(credentialsId: 'dockerhub_credentials',usernameVariable: 'DOCKER_USERNAME',passwordVariable: 'DOCKER_PASS')]){
                  sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USERNAME  --password-stdin'
                  sh 'docker tag node-app-jenkins elmansey/node-app-jenkins:latest'
                  sh 'docker push elmansey/node-app-jenkins:latest'
               }
               

            }
        }
    }
}