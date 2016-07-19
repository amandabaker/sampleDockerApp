# Docker Sample App

A simple web application built on the MEAN stack that will accept a string and reverse it.

Despite the simple functionality, the purpose is to show interaction between docker containers. 
The string is first saved to a mongo database and retreived by it's object ID, and then reversed 
and displayed on the page. 

The intended use is with Marathon, and shouldn't work without it since it depends on the use of 
Marathon Load Balancers for communication between containers. 

### Deploying to DC/OS cluster in Azure

If this is not your goal, then you will likely have to change your steps a bit.

##### Prerequisites 
* Create ACS DC/OS cluster in Azure
* Install DC/OS CLI and configure for your cluster

##### Build and Deploy

To deploy the app, run the commands 

```dcos marathon app add node-web-app.json```

```dcos marathon app add mongo.json```

These commands will pull the latest version of the app from DockerHub and push the containers to
your cluster. 

To scale the containers, run

```dcos marathon app scale [app-name] [scale-size]```

where `[app-name]` is either mongo or node-web-app and `[scale-size]` is the number of containers you
want to scale up or down to. 