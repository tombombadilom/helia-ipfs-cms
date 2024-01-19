import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
    <Card className=" w-[80vw]  border-0 backdrop-filter backdrop-blur-lg bg-card bg-opacity-heavy   text-card-foreground p-5 rounded-xl">
      <CardHeader>
        <CardTitle><img src="/icon/favicon-32x32.png" alt="Helia IPFS CMS" className="mx-auto h-[32px]" /> Helia IPFS CMS</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
         <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
           <div className="btn-wrapper w-full">
             <Button
                type="submit"
                className="w-full m-auto bg-card bg-opacity-medium text-card-foreground border-0 pr-3 pl-3"
              >Login</Button>
            <div className="btn-bg w-1/2"></div>
          </div>
        </form>
      </Form>
      </CardContent>
      <CardFooter
        className="flex justify-between w-full flex-row"
      >
       
        <div className="btn-wrapper w-1/2">
          <Button className="w-full m-auto bg-card text-card-foreground border-0 pr-3">
            Forgot your login ?
          </Button>
          <div className="btn-bg w-1/2"></div>
        </div>
        
      </CardFooter>
    </Card>
  )
};
export default LoginForm;
    
    