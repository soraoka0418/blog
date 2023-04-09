import type { IncomingMessage, ServerResponse } from 'http'

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result: User[] = await $fetch('https://jsonplaceholder.typicode.com/users')
  return result
}