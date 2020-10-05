ID=$(cat /tmp/id_paas)

echo $ID
curl -s 192.168.1.24:3333/task/$ID
