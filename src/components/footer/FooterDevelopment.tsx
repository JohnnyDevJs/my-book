import { FaHeart } from 'react-icons/fa'

export function FooterDevelopment() {
  return (
    <>
      Feito com&nbsp;
      <FaHeart size={14} className="inline-flex text-teal-500" />
      &nbsp;por&nbsp;
      <a
        href="https://johnnysilva.dev"
        target="_blank"
        className="font-bold text-teal-500 underline"
      >
        Johnny Silva
      </a>
      ,&nbsp;utilizando&nbsp;
      <a
        href="https://nextjs.org/"
        target="_blank"
        className="font-bold text-teal-500 underline"
      >
        Next.js
      </a>
      &nbsp;e&nbsp;
      <a
        href="https://nextui.org"
        target="_blank"
        className="font-bold text-teal-500 underline"
      >
        NextUI
      </a>
    </>
  )
}
