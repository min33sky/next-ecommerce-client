import { z } from 'zod';

const environmentSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

type Environment = z.infer<typeof environmentSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}
