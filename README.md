# Vue Genshi

## Vue 3 Material UI Components with Module Federation

This repository contains a collection of reusable Material UI components built with Vue 3 and Vite, packaged using Module Federation. The components are designed to provide a consistent and visually appealing user interface across your Vue.js applications.

## Features

- **Material Design**: The components follow the Material Design guidelines, ensuring a modern and intuitive user experience.
- **Vue 3 Composition API**: The components are built using the Vue 3 Composition API, leveraging the latest features and best practices.
- **Module Federation**: The components are packaged as federated modules, allowing them to be seamlessly shared and consumed across multiple Vue.js applications or micro-frontends.
- **Vite**: The project uses Vite as the build tool, providing a fast and efficient development experience.

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/vue3-material-ui-components.git
```

2. Install dependencies:

```bash
cd vue3-material-ui-components
npm install
```

### Development

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and provide hot module replacement (HMR) for a streamlined development experience.

### Building for Production

To build the components for production, run:

```bash
npm run build
```

This will generate an optimized bundle for deployment.

### Module Federation

This repository is set up to serve the components as federated modules using Module Federation. To consume the components in another Vue.js application or micro-frontend, follow the instructions in the respective project's documentation.

## Usage

Once the components are built or served via Module Federation, you can import and use them in your Vue.js application like any other Vue component:

```vue
<template>
  <div>
    <MaterialButton>Click Me</MaterialButton>
    <!-- Use other Material UI components here -->
  </div>
</template>

<script>
import MaterialButton from 'vue3-material-ui-components/MaterialButton';

export default {
  components: {
    MaterialButton,
    // Import other Material UI components here
  },
};
</script>
```

## Usage

### Topbar
```vue
  <Header
    type="large"
    leading-icon="arrow_back"
    :traling-icons="['attach_file', 'person', 'more_vert']"
    class="my-header"
  >
    <template #headline>
      Hello World
    </template>
  </Header>
```

Refer to the individual component documentation for specific usage instructions and examples.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
