pipeline {
    agent any

    environment {
        DOCKERHUB_CRED = credentials('DockerHubCred')
    }
     

    stages {
      
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ishtiyak3000/notes-sharing-webapp.git'
            }
        }

        stage('Frontend Build') {
            steps {
                sh 'docker build -t ishtiyak3000/frontend ./client'
            }
        }
         stage('Backend Build') {
            steps {
                sh 'docker build -t ishtiyak3000/frontend ./server'      
            }
        }
         stage('Docker-Compose Build') {
            steps {
                sh 'docker-compose build'
              
            }
        }
        stage('Docker-Compose Push') {
            steps {
                sh 'echo $DOCKERHUB_CRED_PSW | docker login -u $DOCKERHUB_CRED_USR --password-stdin'
                sh 'docker compose push'
            }
        }
          stage('Starting Minikube Cluster') {
    steps {
          sh 'minikube start --driver=docker'
          
     }
        stage('Deploy to Kubernetes') {
    steps {
          sh 'kubectl apply -f backend-deployment.yaml'
          sh 'kubectl apply -f frontend-deployment.yaml'
          sh 'kubectl apply -f mongo-deployment.yaml'
     }
}
 stage('ELK monitoring') {
    steps {
          sh 'kubectl apply -f ELK/'
          
     }
}

    }
}
}
