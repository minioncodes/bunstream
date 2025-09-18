export function Footer() {
  return (
    <footer className="container-px mx-auto max-w-7xl py-12">
      <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">BunStream</div>
            <p className="mt-2 text-sm text-gray-600">Placeholder company, 123 Business Rd, Suite 100, New York, NY 10001</p>
            <p className="mt-1 text-sm text-gray-600">support@example.com</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="hover:text-brand" href="/privacy">Privacy</a></li>
              <li><a className="hover:text-brand" href="/terms">Terms</a></li>
              <li><a className="hover:text-brand" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal Notice</div>
            <p className="mt-2 text-xs text-gray-500">Service availability, pricing, and features are subject to change and may vary by platform. All trademarks are property of their respective owners.</p>
          </div>
        </div>
        <div className="mt-6 border-t pt-4 text-xs text-gray-500">© {new Date().getFullYear()} BunStream — For demo use.</div>
      </div>
    </footer>
  )
}
