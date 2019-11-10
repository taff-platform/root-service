# root
provides the base auto discovery information of the service mesh

## run
port forward consul from k8
```
kubectl port-forward svc/service-consul-ui --namespace service 8500:80
```

OR launch new console -
```
docker run -p 8400:8400 -p 8500:8500 -p 8600:53/udp -h node1 progrium/consul -server -bootstrap
```

run service
```
npm start
```
