import { Application } from "https://deno.land/x/oak@v5.0.0/mod.ts";

const app = new Application();

const PORT = 8000;

app.use((ctx) => {
  ctx.response.body = `Nasa mission control project`;
});

if (import.meta.main) {
  app.listen({
    port: PORT,
  });
}
