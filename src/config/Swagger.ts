import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      description: "Node API documentation",
      version: "1.0.0",
      contact: {
        name: "Eduardo França",
        url: "https://www.linkedin.com/in/eduardofrancaa/",
      },
    },
    tags: [
      {
        name: "Auth",
      },
      {
        name: "User",
      },
    ],
    servers: [
      {
        url: "http://localhost:3001/api-docs",
        description: "Local server",
      },
    ],
    components: {
      schemas: {
        login: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
        },
        createUser: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
            },
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
            confirmPassword: {
              type: "string",
            },
          },
        },
        updateUser: {
          type: "object",
          required: ["_id", "name", "email", "password"],
          properties: {
            _id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            email: {
              type: "string",
            },
          },
        },
        updateUserPassword: {
          type: "object",
          required: ["_id", "oldPassword", "newPassword", "confirmNewPassword"],
          properties: {
            _id: {
              type: "string",
            },
            oldPassword: {
              type: "string",
            },
            newPassword: {
              type: "string",
            },
            confirmNewPassword: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const openapiSpecification = swaggerJsdoc(options);
