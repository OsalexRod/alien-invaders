pipeline {
    agent any
    environment {
        //KUBE_CONFIG_PATH = '/home/alejandro/.kube/config'
        DOCKERHUB_TOKEN = credentials('dockerhub_token')
        registry = "alejandrorodriguezsalazar/alien-invaders"
    }

    stages {
        stage('Clonar') {
            steps {
                deleteDir()
                sh "git clone https://github.com/OsalexRod/alien-invaders.git"
            }
        }
        stage('Compilar') {
            steps {
                echo '***********************  COMPILE  **********************'
                dir ("alien-invaders") {
                    sh "npm install"
                }
            }
        }
        stage('Pruebas') {
            steps {
                echo '***********************  TEST  **********************'
                dir ("alien-invaders") {
                    sh 'npm test'
                }
                echo "Ejecucion de pruebas completada."
            }
        }
        stage('Docker build') {
            steps {
                echo '***********************  BUILD  **********************'
                dir ("alien-invaders") {
                    // construccion de la imagen
	                sh 'docker build -t $registry:$BUILD_NUMBER .'
                    sh 'docker tag $registry:$BUILD_NUMBER $registry:$BUILD_NUMBER'
                    sh 'docker tag $registry:$BUILD_NUMBER $registry:latest'           
                    echo 'Construccion de imagen completada!!!'
                }
            }
        }
        stage('Docker publish') {
            steps {
                echo '***********************  PUBLISH  **********************'
                //loguearse en dockerhub
                sh 'docker info'
                sh 'docker login -u alejandrorodriguezsalazar -p $DOCKERHUB_TOKEN'
                //sh 'docker login -u $DOCKERHUB_CREDENTIALS --password-stdin'
                //echo "logueado correctamente"

                // publicar la imagen en dockerhub
                sh 'docker push $registry:$BUILD_NUMBER'
                sh 'docker push $registry:latest'
                echo 'Imagen Subida a dockerhub Exitosamente!!!'
                sh 'docker logout'
                // limpieza de la imagen
                sh "docker image rm $registry:$BUILD_NUMBER"
                sh "docker image rm $registry:latest"
            }
        }
        stage('Desplegar') {
            steps {
                echo '***********************  DESPLEGAR  **********************'
                dir ("alien-invaders") {
                    sh '''
                        export KUBECONFIG=/home/alejandro/.kube/config
                        kubectl set image deployment/alien-invaders-app-deployment alien-invaders-app=alejandrorodriguezsalazar/alien-invaders:$BUILD_NUMBER
                    '''
                    sh 'kubectl config get-contexts'
                    sh 'kubectl config get-clusters'
                    sh 'kubectl config get-users'
                    sh 'kubectl config view'
                }
                echo "Proyecto desplegado"
            }
        }

    }
}