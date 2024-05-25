import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { titleBase } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setPageTitle = (title: string) => {
  document.title = titleBase + title;
};
