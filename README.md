# JSON-Schema-Form

### Typesafe, validated JSON Schema Form built with shad/cn ui, Zod and react-hook-form.

## Goal

The goal of this is to create a copy-able file that can be used in any JS Framework to render a form from a user-defined JSON Schema with any validation library (Zod, Yup, etc.), any form validator (react-hook-form, Formik, etc. ) and any components (Plain HTML, shadcn/ui, Chakra UI, MUI, etc.).

## What works:

- Parsing a JSON Object and getting the form to render for type String and Integer.

## Roadmap:

- Parse and validate the JSON Schema input.
- Make the logic work for Object type in JSON Schema.

## Running Locally:

- Clone the [repo](https://github.com/Use-Just-Apps/json-schema-form).
- Run `bun install` in the local repo folder.
- Run `bun run dev` to launch the Vite app and render the JSON Schema in `App.tsx`.

Contributions are welcome! Please fork the repo and raise a PR.
