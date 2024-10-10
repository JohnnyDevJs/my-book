import { type ClassValue, clsx } from 'clsx'
import { differenceInYears } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  const nameParts = name.trim().split(' ')
  const firstInitial = nameParts[0][0]
  const lastInitial = nameParts[nameParts.length - 1][0]
  return `${firstInitial}${lastInitial}`.toUpperCase()
}

export function calculateAge(dob: Date) {
  return differenceInYears(new Date(), dob)
}
