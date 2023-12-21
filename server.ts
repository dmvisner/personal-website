import { unstable_viteServerBuildModuleId } from "@remix-run/dev";
import { createRequestHandler } from "@remix-run/express";
import { ServerBuild, installGlobals } from "@remix-run/node";
import express from "express";

import { getBookService } from "~/services/book-service";
import BookRepository from "~/backend/book-repository.js";
import TradeRepository from "~/backend/trade-repository.js";
import { getTradeService } from "~/services/trade-service.js";

installGlobals();

const vite =
  process.env.NODE_ENV === "production"
    ? undefined
    : await import("vite").then(({ createServer }) =>
        createServer({
          server: {
            middlewareMode: true,
          },
        })
      );

const app = express();

// handle asset requests
if (vite) {
  app.use(vite.middlewares);
} else {
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" })
  );
}
app.use(express.static("build/client", { maxAge: "1h" }));

// handle SSR requests
app.all(
  "*",
  createRequestHandler({
    build: vite
      ? () => vite.ssrLoadModule(unstable_viteServerBuildModuleId) as unknown as Promise<ServerBuild>
      : await import("./build/server/index.js") as unknown as ServerBuild,
    getLoadContext: () => {
      return {
        BookService: getBookService(BookRepository),
        TradeService: getTradeService(TradeRepository),
      }
    }
  })
);

const port = 3000;
app.listen(port, () => console.log("http://localhost:" + port));
