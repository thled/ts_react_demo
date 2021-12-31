# React Demo Project with Typescript

Based on the Pluralsight course: [Building Applications with React and Flux][course]

## Getting started

1. Install dependencies

    ```shell
    docker compose run --rm app yarn install
    ```

1. Run app

    ```shell
    docker compose up
    ```

1. Exec container

    ```shell
    docker compose exec app sh
    ```

1. Run API fake

    ```shell
    docker compose exec app yarn start:api
    ```

1. Visit app: <localhost:3000>

[course]: https://app.pluralsight.com/library/courses/react-flux-building-applications

