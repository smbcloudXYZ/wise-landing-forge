import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
const footerLinks = {
  company: [{
    label: "About",
    href: "#"
  }, {
    label: "Careers",
    href: "#"
  }, {
    label: "Press",
    href: "#"
  }, {
    label: "Blog",
    href: "#"
  }],
  product: [{
    label: "Personal",
    href: "#"
  }, {
    label: "Business",
    href: "#"
  }, {
    label: "Wise Card",
    href: "#"
  }, {
    label: "Pricing",
    href: "#"
  }],
  resources: [{
    label: "Help Centre",
    href: "#"
  }, {
    label: "Currency Converter",
    href: "#"
  }, {
    label: "Rate Alerts",
    href: "#"
  }, {
    label: "API",
    href: "#"
  }],
  legal: [{
    label: "Terms",
    href: "#"
  }, {
    label: "Privacy",
    href: "#"
  }, {
    label: "Cookies",
    href: "#"
  }, {
    label: "Security",
    href: "#"
  }]
};
const socialLinks = [{
  icon: Twitter,
  href: "#",
  label: "Twitter"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}];
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-lime-400">
                <span className="text-primary-foreground font-bold text-lg">
              </span>
              </div>
              <span className="text-xl font-bold">Snac</span>
            </a>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © 2024 Wise. All rights reserved.
            </p>
            <p className="text-xs text-secondary-foreground/40 max-w-xl text-center md:text-right">
              Wise is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic money.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;