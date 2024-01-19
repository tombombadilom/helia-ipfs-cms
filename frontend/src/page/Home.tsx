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
      className={cn("w-[80vw] h-fit m-auto bg-opacity-heavy backdrop-filter backdrop-blur-lg p-5 rounded-xl shadow-lg hover:bg-opacity-medium dark:hover:bg-opacity-medium", className)} {...props}
    >
      <CardHeader
        className="flexinit"
      >
        <CardTitle>HeliaVault</CardTitle>
        <CardDescription>Playing with P2P Storage</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => navigate("/About")}
          type="button"
          className="w-1/2"
          data-te-ripple-init
          data-te-ripple-color="dark"
        >
          Let's Begin !
        </Button>
      </CardFooter>
    </Card>
  )
}
export default Home;