export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Reez App",
  description:
    "Powerful tools that are essential for success and efficiency.",
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
