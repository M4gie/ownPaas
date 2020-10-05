#Create the virtual machine

VBoxManage createvm --name $1 --ostype Debian_64 --register

#Edit the vm

VBoxManage modifyvm $1 --memory 512
VBoxManage modifyvm $1 --nic1 bridged --nictype1 82545EM --bridgeadapter1 en0
VBoxManage modifyvm $1 --nictype1 virtio 
VBoxManage modifyvm $1 --boot1 net

#Start the vm

VBoxHeadless --startvm $1
