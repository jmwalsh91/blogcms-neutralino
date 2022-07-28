import { QueryClient } from "@tanstack/react-query";
import { sb } from "./sb";

/**
 * New instance of QueryClient for QueryProvider
 */
export const queryClient = new QueryClient();

/**
 * Prefetch object with methods to prefetch data from Supabase
 * TODO: Add pagination
 * TODO: Add error handling
 */
export const prefetch = {
    prefetchPosts: async function prefetchPosts() {
        await queryClient.prefetchQuery(['allPosts'], sb.getAllPosts)
    },
}