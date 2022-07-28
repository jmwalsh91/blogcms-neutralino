import { QueryClient } from "@tanstack/react-query";
import { sb } from "./sb";

export const queryClient = new QueryClient();

export const prefetch = {
    prefetchPosts: async function prefetchPosts() {
        await queryClient.prefetchQuery(['allPosts'], sb.getAllPosts)
    },
}