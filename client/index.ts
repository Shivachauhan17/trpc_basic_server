import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
import fetch from 'node-fetch';

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}


const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      // fetch: (url: RequestInfo, init?: RequestInit) => fetch(url, init), // Ensure type compatibility
    }),
  ],
});

async function main() {
    const user = await trpc.createTodo.query({
        name: "shiva",
        task: "!23456"
    });
    console.log(user)
}

main();