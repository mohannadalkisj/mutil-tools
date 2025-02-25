import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { GoogleIcon } from "./google-icon"

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
          Enter your email and password to create new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                </div>
                <Input id="password" type="password" required />
              </div>
               <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Confirm Password</label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <Button variant="outline" className="w-full">
              <GoogleIcon/>
              Sign Up with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
            Already Registered?{" "}
              <Link href="/login" className="underline underline-offset-4">
              Sign In 
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
