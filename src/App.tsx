import "./App.css";
import JsonSchemaForm from "./json-schema-form";

const schema = {
  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      description: "The User's First Name",
      secret: true,
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    age: {
      type: "integer",
      title: "Age",
      secret: true,
    },
    bio: {
      type: "string",
      title: "Bio",
    },
  },
};

const gg = {
  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    credentials: {
      title: "",
      type: "object",
      required: ["auth_type", "username", "password"],
      properties: {
        auth_type: {
          type: "string",
          default: "username/password",
          order: 0,
          readOnly: true,
        },
        username: {
          description:
            "Username refers to your individual PostgreSQL login credentials. At a minimum, the user associated with these credentials must be granted read access to the data intended for synchronization.",
          examples: ["POSTGRESQL_USER"],
          type: "string",
          title: "Username",
          order: 1,
        },
        password: {
          description:
            "This field requires the password associated with the user account specified in the preceding section.",
          type: "string",
          multiwoven_secret: true,
          title: "Password",
          order: 2,
        },
      },
      order: 0,
    },
    username: {
      description:
        "Username refers to your individual PostgreSQL login credentials. At a minimum, the user associated with these credentials must be granted read access to the data intended for synchronization.",
      examples: ["POSTGRESQL_USER"],
      type: "string",
      title: "Username",
      order: 1,
    },
    password: {
      description:
        "This field requires the password associated with the user account specified in the preceding section.",
      type: "string",
      secret: true,
      title: "Password",
      order: 2,
    },
    host: {
      description: "The hostname or IP address of your PostgreSQL server.",
      examples: ["127.0.0.1"],
      type: "string",
      title: "Host",
      order: 1,
    },
    port: {
      description:
        "The port number for your PostgreSQL server, which defaults to 5432, may vary based on your configuration. ",
      examples: ["5432"],
      type: "string",
      title: "Port",
      order: 2,
    },
    database: {
      description: "The specific PostgreSQL database to connect to.",
      examples: ["POSTGRESQL_DB"],
      type: "string",
      title: "Database",
      order: 3,
    },
    schema: {
      description: "The schema within the PostgreSQL database.",
      examples: ["POSTGRESQL_SCHEMA"],
      type: "string",
      title: "Schema",
      order: 4,
    },
  },
};

function App() {
  return (
    <>
      <h1>JSON Schema Form</h1>
      <div className="card">
        <JsonSchemaForm schema={gg} />
      </div>
    </>
  );
}

export default App;
