import {publicProcedure, router} from './trpc'
import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';


const createTodoType=z.object({
    name:z.string(),
    task:z.string()
})

const appRouter=router({
    createTodo:publicProcedure
                .input(createTodoType)
                .query(async(opts)=>{
                    const {name,task}=opts.input;

                    return{
                        id:"1",
                        task:task
                    }
                })
})

const server = createHTTPServer({
    router: appRouter,
  });
   
  server.listen(3000,()=>{
    console.log("server started")
  });

export type AppRouter = typeof appRouter;
