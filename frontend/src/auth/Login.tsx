import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
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


const LoginForm: React.FC = () => {
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
    <div className="flex bg-opacity-15 backdrop-filter backdrop-blur-lg w-1/2 bg-primaryBackground text-primaryForeground p-5 rounded-xl
    dark:bg-primaryBackground dark:bg-opacity-15 dark:primaryForeground ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src="/icon/favicon-32x32.png" alt="Helia IPFS CMS" className="mx-auto h-[32px]" />
        <p className="mt-6 text-center text-1xl  text-primaryForeground">Helia IPFS CMS</p>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-secondaryForeground">Sign in to your account</h2>
      </div>
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-primary primaryBackground dark:primary dark:primaryBackground">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                >Email</FormLabel>
                <FormControl>
                  <Input placeholder="me@email.com" {...field} />
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
                  <Input placeholder="°°°°°°°°°°°°" {...field} />
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
              className="w-full flex justify-center rounded-md shadow-sm text-sm font-medium text-primaryForeground bg-primaryBackground hover:bg-primaryBackground/80 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
            >Submit</Button>
        </form>
      </Form>
      </div>
    </div>
  )
};
export default LoginForm;
    
    