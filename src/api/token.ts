import { API_TOKEN_KEY } from '../const.ts';
import { APIToken } from '../internal/types/api-token.tsx';

export const getAPIToken = (): APIToken => localStorage.getItem(API_TOKEN_KEY) || '';
