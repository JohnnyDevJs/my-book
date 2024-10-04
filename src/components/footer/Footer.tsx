import { FooterCopyright } from './FooterCopyright'
import { FooterDevelopment } from './FooterDevelopment'

export function Footer() {
  return (
    <footer className="bg-teal-50 p-4">
      <p className="flex flex-wrap items-center justify-center text-center text-sm text-slate-600">
        <FooterCopyright />
        &nbsp;
        <FooterDevelopment />
      </p>
    </footer>
  )
}
