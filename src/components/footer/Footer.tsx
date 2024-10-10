import { FooterCopyright } from './FooterCopyright'
import { FooterDevelopment } from './FooterDevelopment'

export function Footer() {
  return (
    <footer className="bg-default/40 p-4">
      <p className="flex flex-wrap items-center justify-center text-center text-sm text-foreground">
        <FooterCopyright />
        &nbsp;
        <FooterDevelopment />
      </p>
    </footer>
  )
}
