import React from "react";
//import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {useNavigate} from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const formSchema = z.object({
  email: z.string().email({
    message: "Email is invalid.",
  }),
  name: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
  password: z.string().min(12, {
    message: "Password must be at least 12 characters.",
  }),
})

type CardProps = React.ComponentProps<typeof Card>

const Register = ({ className, ...props }: CardProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
  })
  const navigate = useNavigate();
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
     <Card className={cn("w-[80vw] bg-opacity-light backdrop-filter backdrop-blur-lg  bg-card text-card-foreground p-5 rounded-xl dark:bg-card dark:bg-opacity-15 dark:text-card-foreground", className)} {...props}>
      <CardHeader>
        <CardTitle><img src="/icon/favicon-32x32.png" alt="Helia IPFS CMS" className="mx-auto h-[32px]" /> Helia IPFS CMS</CardTitle>
        <CardDescription>Register to your account</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
         <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  This is your registering name.
                </FormDescription>
                <FormMessage 
                  className="text-red-500 dark:text-red-400"
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="me@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is your registering email.
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
                  <Input placeholder="°°°°°°°°°°°°" {...field} />
                </FormControl>
                <FormDescription>
                  This is your registering password.
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
        <Button 
         onClick={() => navigate('/Login')}
         className="w-full">
          Log in
        </Button>
      </CardFooter>
    </Card>
  )
}
export default Register;
