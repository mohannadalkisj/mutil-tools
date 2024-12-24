export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Reez App",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    }, 
   
  ],
  links: {
    login: "/login",
    signup: "/signup",
    docs: "https://ui.shadcn.com",
  },
}
