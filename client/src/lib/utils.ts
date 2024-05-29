import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { titleBase } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const setPageTitle = (title: string) => {
  document.title = titleBase + capitalize(title);
};
