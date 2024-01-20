import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

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
const Profile = () => {
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
    <Card className=" w-[80vw] overflow-x-hidden border-0 p-5 rounded-xl backdrop-filter backdrop-blur-lg bg-card bg-opacity-medium text-card-foreground dark:bg-card dark:bg-opacity-medium dark:text-primary-foreground h-fit">
      <CardTitle className="flex flex-col content-start items-center gap-2">
        <Avatar className="w-12 h-12">
          <AvatarImage src="../icon/favicon-32x32.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        Helia IPFS CMS
      </CardTitle>
      <div className="grid grid-cols-2 content-start">
        <CardHeader className="flex w-[20vw] items-center">
          <CardDescription >
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-center text-xl font-bold">John Doe</h1>
        </CardDescription>
        </CardHeader>
        <CardContent className="w-[60vw]">
          <div className="min-h-fit pt-2 font-mono my-16">
            <div className="container mx-auto">
              <div className="Input  max-w-2xl p-6 mx-auto">
                <h2 className="text-2xl text-gray-900">Account Setting</h2>
                <form className="mt-6 border-t border-gray-400 pt-4">
                  <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-full px-3 mb-6'>
                      <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-text-1'>email address</label>
                      <Input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                    </div>
                    <div className='w-full md:w-full px-3 mb-6 '>
                      <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>password</label>
                      <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">change your password</button>
                    </div>
                    <div className='w-full md:w-full px-3 mb-6'>
                      <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your country</label>
                      <div className="flex-shrink w-full inline-block relative">
                        <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                          <option>choose ...</option>
                          <option>USA</option>
                          <option>France</option>
                          <option>Spain</option>
                          <option>UK</option>
                        </select>
                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className='w-full md:w-full px-3 mb-6'>
                      <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                      <div className="flex-shrink w-full inline-block relative">
                        <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                          <option>choose ...</option>
                          <option>English</option>
                          <option>France</option>
                          <option>Spanish</option>
                        </select>
                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div className="personal w-full border-t border-gray-400 pt-4">
                      <h2 className="text-2xl text-gray-900">Personal info:</h2>
                      <div className="flex items-center justify-between mt-4">
                        <div className='w-full md:w-1/2 px-3 mb-6'>
                          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                          <Input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6'>
                          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                          <Input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                        </div>
                      </div>
                      <div className='w-full md:w-full px-3 mb-6'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                        <Input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                      </div>
                      <div className='w-full md:w-full px-3 mb-6'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                        <textarea className='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' required></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="Input Input-bordered w-full"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We'll never share your email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </form>
          </Form>
        </CardContent>
      </div>
      <CardFooter
        className="flex justify-between w-full flex-row"
      >
        <div className="btn-wrapper w-1/2">
          <Button
            type='submit'
            onClick={() => onSubmit(form.getValues())}
            className="w-full m-auto bg-card text-card-foreground border-0 pr-3">
            Save
          </Button>
          <div className="btn-bg w-1/2"></div>
        </div>
        <div className="btn-wrapper w-1/2">
          <Button className="w-full m-auto bg-card text-card-foreground border-0 pr-3">
            Forgot your login ?
          </Button>
          <div className="btn-bg w-1/2"></div>
        </div>

      </CardFooter>
     
    </Card>
  );
}
export default Profile;