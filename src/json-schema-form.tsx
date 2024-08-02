// src/JsonSchemaForm.tsx
import { useForm } from "react-hook-form";
import { z, ZodSchema, ZodObject } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { HiddenInput, Input } from "@/components/ui/input";

type JsonSchemaProperty = {
  type: string;
  title: string;
  description?: string;
  placeholder?: string;
  secret?: boolean;
};

// type JsonObjectProperty = {
//   properties?: JsonSchemaProperty;
// };

type PropertyField = { [key: string]: JsonSchemaProperty };

type JsonSchema = {
  title: string;
  description: string;
  type: string;
  required: string[];
  properties: PropertyField;
};

type JsonSchemaFormProps = {
  schema: JsonSchema;
};

const JsonSchemaForm = ({ schema }: JsonSchemaFormProps) => {
  const createZodSchema = (properties: PropertyField): ZodObject<any> => {
    const shape: { [key: string]: ZodSchema<any> } = {};
    for (const key in properties) {
      const field = properties[key];
      switch (field.type) {
        case "string":
          shape[key] = z.string().nonempty(`${field.title} is required`);
          break;
        case "integer":
          shape[key] = z.number().nonnegative(`${field.title} is required`);
          break;
        // case "object":
        //   if (field.properties) shape[key] = createZodSchema(field.properties);
        //   break;
        default:
          break;
      }
    }
    return z.object(shape);
  };

  const zodSchema = createZodSchema(schema.properties);

  const form = useForm({
    resolver: zodResolver(zodSchema),
  });

  const onSubmit = (data: z.infer<typeof zodSchema>) => {
    console.log("Form data submitted: ", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {Object.keys(schema.properties).map((key) => {
          const formField = schema.properties[key];
          return (
            <FormField
              control={form.control}
              name={formField.title}
              key={formField.title}
              render={({ field }) => (
                <FormItem className="flex flex-col text-left">
                  <FormLabel>{formField.title}</FormLabel>
                  <FormControl>
                    {formField.secret ? (
                      <HiddenInput
                        type={formField.type === "integer" ? "number" : "text"}
                        placeholder={formField.placeholder}
                        {...field}
                      />
                    ) : (
                      <Input
                        type={formField.type === "integer" ? "number" : "text"}
                        placeholder={formField.placeholder}
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormDescription>{formField.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default JsonSchemaForm;
