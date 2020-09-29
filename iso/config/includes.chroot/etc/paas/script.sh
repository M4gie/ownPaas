resp=$(curl '192.168.0.30:3000/ping')

IMAGE=${resp%\"}
IMAGE=${IMAGE#\"}
sudo docker pull $IMAGE

