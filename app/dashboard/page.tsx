import { Bell, ChevronDown, Layout, LogOut, Menu, MessageSquare, PieChart, Settings, Users, Plus, FileText, Download, Upload, Trash2, BarChart2, Zap, HelpCircle } from 'lucide-react'
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { JSX, SVGProps } from 'react'

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 overflow-y-auto border-r bg-gray-100/40 lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Layout className="h-6 w-6" />
              <span>REEZ Inc</span>
            </Link>
          </div>
          <nav className="flex-1 px-2 py-4">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
              href="#"
            >
              <PieChart className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              href="#"
            >
              <Users className="h-4 w-4" />
              Users
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              href="#"
            >
              <MessageSquare className="h-4 w-4" />
              Messages
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              href="#"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-4 py-4">
              <Avatar>
                <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-gray-500">john@example.com</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <ChevronDown className="h-4 w-4" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:gap-6 lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-2 py-6">
                <Link
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
                  href="#"
                >
                  <PieChart className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                  href="#"
                >
                  <Users className="h-4 w-4" />
                  Users
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                  href="#"
                >
                  <MessageSquare className="h-4 w-4" />
                  Messages
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                  href="#"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-100/40 p-4 lg:p-6">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">789</div>
                <p className="text-xs text-muted-foreground">+2% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">456</div>
                <p className="text-xs text-muted-foreground">+10% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87</div>
                <p className="text-xs text-muted-foreground">+3% from last hour</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-6">
          
            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
                <CardDescription>Quick access to common actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                
                <Link href={'/ocr'}>
                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <Plus className="h-5 w-5 mb-2" />
                    OCR Tool 
                  </Button>
                  </Link>

                <Link href={'/report'}>
                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <FileText className="h-5 w-5 mb-2" />
                    Create Report
                  </Button>
                  </Link>

                <Link href={'/convert-docs'}>

                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <Download className="h-5 w-5 mb-2" />
                    Convert Documents
                  </Button>
                  </Link>

                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <Upload className="h-5 w-5 mb-2" />
                    Upload Files
                  </Button>
                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <BarChart2 className="h-5 w-5 mb-2" />
                    Analytics
                  </Button>
                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <Zap className="h-5 w-5 mb-2" />
                    Automate
                  </Button>
                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <Trash2 className="h-5 w-5 mb-2" />
                    Clear Cache
                  </Button>
                  <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
                    <HelpCircle className="h-5 w-5 mb-2" />
                    Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

