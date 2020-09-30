#Create the virtual machine

VBoxManage createvm --name machine1 --ostype Debian_64 --register


#Edit the vm

VBoxManage modifyvm machine1 --memory 512 
VBoxManage modifyvm machine1 --nic1 nat
VBoxManage modifyvm machine1 --nictype1 virtio 
VBoxManage modifyvm machine1 --boot1 net

#Start the vm

VBoxHeadless --startvm machine1
