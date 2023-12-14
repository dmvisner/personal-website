/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

import "@remix-run/node";
import BookService from "~/types/services/BookService";

declare module "@remix-run/node" {
    export interface AppLoadContext {
        BookService: BookService
    }
}