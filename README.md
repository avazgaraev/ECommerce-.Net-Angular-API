Using a modular architecture, dividing the project into Admin and UI modules for better organization. The project includes multiple Angular components, such as dashboard, orders, products, and customers, which are part of the Admin panel. The UI section contains elements like baskets, home, and products, enhancing the user experience.

To manage API requests, I implemented HTTP services such as http-client.service.ts and product.service.ts, ensuring a clean separation of concerns. Additionally, I integrated Alertify.js and Toastr notifications through alertify.service.ts and custom-toastr.service.ts, improving user interaction feedback.

The project is structured using feature modules, where each section (dashboard, products, orders, etc.) has its own dedicated module, making the application scalable and maintainable. Routing is likely managed in app-routing.module.ts, ensuring navigation between different sections.

For styling, I followed Angular Material principles (if implemented) or custom styles, ensuring a clean UI. The project is also configured for dependency injection, allowing services to be used efficiently across components. It is ready for deployment with environment-based configurations (environment.ts and environment.prod.ts).


# EShoppingClient

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
