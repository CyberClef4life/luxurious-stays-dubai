
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/&/g, '-and-')     // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')   // Remove all non-word characters
    .replace(/\-\-+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '');        // Trim - from end of text
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export function getAmenityIcon(amenity: string): string {
  const amenityIcons: Record<string, string> = {
    wifi: 'wifi',
    pool: 'pool',
    parking: 'car',
    airConditioning: 'thermometer-snowflake',
    gym: 'dumbbell',
    laundry: 'washing-machine',
    kitchen: 'utensils',
    tv: 'tv',
    workspace: 'briefcase',
    // Add more as needed
  };
  
  return amenityIcons[amenity] || 'check';
}
