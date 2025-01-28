pipeline {
    agent any
     tools{
         nodejs 'mynode'
     }
     stages {
        stage('Git cloning') {
            steps {
                echo 'github checkout'
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/swati-zampal/nodepipeline.git']])
            }
        }
        stage('Build') {
            steps {
                echo 'Building Nodejs-app'
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing'
                sh "./node_modules/mocha/bin/_mocha --exit ./test/test.js"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying"
                }
            }
        }
    }
}
