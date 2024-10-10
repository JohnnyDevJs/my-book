import { FaHeart } from 'react-icons/fa'

export function FooterDevelopment() {
  return (
    <>
      Feito com&nbsp;
      <FaHeart size={14} className="inline-flex text-secondary" />
      &nbsp;por&nbsp;
      <a
        href="https://johnnysilva.dev"
        target="_blank"
        className="font-bold text-secondary underline"
      >
        Johnny Silva
      </a>
    </>
  )
}
