import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Strata Portal</h3>
            <p className="text-muted-foreground">Making community living better through technology and connection.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-muted-foreground hover:text-foreground">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/documents" className="text-muted-foreground hover:text-foreground">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-muted-foreground hover:text-foreground">
                  Amenities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/bylaws" className="text-muted-foreground hover:text-foreground">
                  Bylaws
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-muted-foreground hover:text-foreground">
                  Emergency Contacts
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p>123 Strata Avenue</p>
              <p>Building A, Suite 100</p>
              <p>City, State 12345</p>
              <p className="mt-2">
                <a href="mailto:info@strataportal.com" className="hover:text-foreground">
                  info@strataportal.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-foreground">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Strata Portal. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
