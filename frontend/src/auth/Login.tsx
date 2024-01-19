import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";

const formSchema = z.object({
  email: z.string().email({
    message: "Email is invalid.",
  }),
  password: z.string().min(12, {
    message: "Password must be at least 12 characters.",
  }),
})

type CardProps = React.ComponentProps<typeof Card>
const LoginForm: React.FC = ({ className, ...props }: CardProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Card className={cn("w-[80vw] bg-opacity-heavy backdrop-filter backdrop-blur-lg  bg-card text-card-foreground p-5 rounded-xl dark:bg-card dark:bg-opacity-medium dark:text-card-foreground", className)} {...props}>
      <CardHeader>
        <CardTitle><img src="/icon/favicon-32x32.png" alt="Helia IPFS CMS" className="mx-auto h-[32px]" /> Helia IPFS CMS</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
         <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-card bg-transparent dark:text-card-foreground dark:bg-transparent">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                >Email</FormLabel>
                <FormControl>
                  <Input 
                    className="input input-bordered basis-3/4 hover:text-secondary hover:bg-secondary"
                    placeholder="me@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is your login email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input 
                    className="input input-bordered basis-3/4 hover:text-secondary hover:bg-secondary"
                    placeholder="°°°°°°°°°°°°" {...field} />
                </FormControl>
                <FormDescription>
                  This is your login password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            <Button
              type="submit"
              className="w-full"
            >Submit</Button>
        </form>
      </Form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Forgot your login ?
        </Button>
      </CardFooter>
    </Card>
  )
};
export default LoginForm;
    
    