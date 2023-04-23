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
                echo "$WORKSPACE"
                // script block to run groovy code 
                script { 
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub_credentials') {
                        def image = docker.build('elmansey/node-app-jenkins:latest')
                        image.push()
                    }
                }
            }
        }
    }
}