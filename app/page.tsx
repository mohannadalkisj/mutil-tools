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
    <>
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
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest user actions and system events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { user: "Alice", action: "logged in", time: "2 minutes ago" },
              { user: "Bob", action: "updated profile", time: "15 minutes ago" },
              { user: "Charlie", action: "sent a message", time: "1 hour ago" },
              { user: "David", action: "uploaded a file", time: "3 hours ago" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>{item.user[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {item.user} {item.action}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tools</CardTitle>
          <CardDescription>Quick access to common actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/ocr">
            <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
              <Plus className="h-5 w-5 mb-2" />
              New Project
            </Button>
            </Link>
            <Link href="/convert-docs">

            <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
              <FileText className="h-5 w-5 mb-2" />
              Create Report
            </Button>
            </Link>

            <Button className="h-20 w-full flex-col items-center justify-center" variant="outline">
              <Download className="h-5 w-5 mb-2" />
              Download Data
            </Button>
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
    </div></>
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