export const appName = import.meta.env.VITE_APP_NAME || 'Deep Bucket';

export const titleBase = `${appName} | `;


export const apiPostfix = import.meta.env.VITE_API_POSTFIX || 'api';
export const apiVersion = import.meta.env.VITE_API_VERSION || 'v1';
export const apiBaseURL = `/${apiPostfix}/`;
