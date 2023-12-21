/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

import "@remix-run/node";
import BookService from "~/types/services/book-service";
import TradeService from "~/types/services/trade-service";

declare module "@remix-run/node" {
    export interface AppLoadContext {
        BookService: BookService;
        TradeService: TradeService;
    }
}