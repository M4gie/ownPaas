#resp=$(curl '192.168.0.30:3000/task')
resp=$(curl -s '192.168.1.24:3333/task')

URL=$(echo $resp | jq -r '.url')
ID=$(echo $resp | jq -r '.id')

#IMAGE=${resp%\"}
#IMAGE=${IMAGE#\"}
touch /tmp/id_paas
echo $ID > /tmp/id_paas
sudo docker pull $URL

