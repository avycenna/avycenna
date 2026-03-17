export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Avycenna",
  title: "Avycenna | Digital transformation",
  description: "Digital transformation, transformed.",
  callToAction: {
    label: "We're Hiring!",
    href: "/openings",
  },
  navItems: [ // ideas: research, products, business, developers, company, foundation
    { label: "Business", href: "/business", },
    { label: "Showcase", href: "/showcase", }, // or showtime, playground
    // { label: "Developers", href: "/developers", },
    // { label: "Startups", href: "/startups", },
    // { label: "Technology", href: "/technology", },
    { label: "Company", href: "/company", }, // includes team
    // { label: "Contact", href: "/contact", },
  ],
  links: {
    linkedin: "https://linkedin.com/company/avycenna",
    github: "https://github.com/avycenna",
  },
  partners: [
    {
      name: "EMSI",
      img: "/logos/emsi.png",
      href: "https://emsi.ma/"
    },
    {
      name: "LSIA",
      img: "/logos/lsia.png",
      href: "https://lsia.avycenna.com/"
    },
    {
      name: "EPBS Consulting",
      img: "/logos/epbs_logo.svg",
      href: "https://epbsconsulting.com/"
    },
  ],
  footer: [
    {
      category: "Product",
      links: [
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/demo", label: "Demo" }
      ]
    },
    {
      category: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" }
      ]
    },
    {
      category: "Resources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: "/docs", label: "Docs" },
        { href: "/help", label: "Help Center" }
      ]
    },
    {
      category: "Legal",
      links: [
        { href: "/terms", label: "Terms", },
        { href: "/privacy", label: "Privacy", },
        { href: "/cookies", label: "Cookies", },
      ]
    }
  ],
};
