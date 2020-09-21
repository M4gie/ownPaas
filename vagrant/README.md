# VAGRANT

Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.

https://www.vagrantup.com/

## Installation

--------------
You can dowload vagrant here
```
https://www.vagrantup.com/downloads.html
```
You need 3rd party systems like VirtualBox, VmWare etc..

    VirtualBox: https://www.virtualbox.org/wiki/Downloads
    VmWare: https://www.vmware.com/fr.html

## Create VM
------------
This repo contain a vagrant file in order to deploy a bridged vm. The vm is based on debian/stretch64 (you can find more in https://vagrantcloud.com/search)

### Deploy the VM
-------------
To start the vm use:

```bash
vagrant up
```
To ssh the vm use:
```bash
vagrant ssh
```
Top stop the vm use:
```bash
vagrant halt
```%

