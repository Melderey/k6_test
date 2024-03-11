Hello! 

# Install

To build a `k6` binary with this extension, first ensure you have the prerequisites:

- [Go toolchain](https://go101.org/article/go-toolchain.html)
- Git
- [xk6](https://github.com/grafana/xk6#install)

1. Build with `xk6`:

```bash
xk6 build --with github.com/grafana/xk6-output-influxdb
```

# Docker Compose

This repo includes a [docker-compose.yml](./docker-compose.yml) file that starts InfluxDB, Grafana and k6. This is just a quick setup to show the usage; for real use case you might want to deploy outside of docker, use volumes and probably update versions.

Clone the repo to get started and follow these steps: 

1. Put your k6 scripts in the `samples` directory or use the `http_2.js` example.

2. Start the docker compose environment.
   
	```shell
	docker compose up -d
	```
3. Use the k6 Docker image to run the k6 script and send metrics to the InfluxDB container started on the previous step.
    ```shell
    docker compose run --rm -T k6 run -<samples/full_test.js --tag testid=full
    ```

InfluxDB open in `http://localhost:8086/`
Username = `croco`
Password = `password1`

Grafana open in `http://localhost:3000/`

In the project directory, you can run:

```shell
make install
```

```shell
make run
```

```shell
make up
```

```shell
make docker
```

```shell
make lint
```

```shell
make fix
```
If you want to run K6 locally, replace HOST in full_test.js.