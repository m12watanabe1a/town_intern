### Application to show the location of toilets around 100m


#### Installing
```
$ git clone https://github.com/m12watanabe1a/town_intern.git
```


#### Create Docker Network

```
$ docker network create --driver bridge network_mixtoilet
```


#### Start up docker-file

```
$ cd docker
$ docker-compose up -d
```

##### access to the wordpless
[http:://localhost:8080]()


##### access to the phpmyadmin
[http:://localhost:9000]()
