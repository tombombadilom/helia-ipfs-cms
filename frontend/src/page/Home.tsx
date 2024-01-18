import React from 'react'
import { cn } from "../lib/utils"
import { Button }  from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

type CardProps = React.ComponentProps<typeof Card>

const Home = ({ className, ...props }: CardProps) => {
  const navigate = useNavigate();
  return (
    <Card
      className={cn("w-[80vw] h-fit m-auto bg-card text-card-foreground shadow-lg dark:bg-card dark:text-card-foreground", className)} {...props}
    >
      <CardHeader>
        <CardTitle>Helia IPFS CMS</CardTitle>
        <CardDescription>Playing with P2P Storage</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button
              onClick={() => navigate("/About")}
              type="button"
              className="text-tertiary-foreground bg-secondary rounded border-2 border-primary  px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out focus:border-primary-600 focus:text-primary-600 hover:background-secondary hover:bg-opacity-10 hover:text-secondary-foreground focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-secondary dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="dark">
              Let's Begin !
            </Button>
      </CardFooter>
    </Card>
  )
}
export default Home;