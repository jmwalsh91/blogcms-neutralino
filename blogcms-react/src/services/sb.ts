import { createClient } from '@supabase/supabase-js'
import type {PostgrestResponse, PostgrestError} from '@supabase/supabase-js'
import DOMPurify from 'dompurify'
//Create Supabase client
const sbUrl = 'https://qkdyjypdpruelatqkwbh.supabase.co'
const sbKey = import.meta.env.VITE_API_KEY
console.log(import.meta.env.VITE_TRY)
export const sbClient = createClient(sbUrl, sbKey)
//INTERFACES & TYPES
export type Post = {
    id: number,
    created_at: string,
    posted_at?: string,
    post_title: string,
    post_text: string,
    views?: number
  }
  
  export type PostResolved = Post[]
  export type PostRejected = PostgrestError

/** Functions */
export const sb = {
    /**
 * Get all posts
 * TODO: Paginate, accept currentUser as param
 * @returns {Promise<SupabaseClient>}
 */
 getAllPosts: async function getAllPosts(): Promise<PostResolved> {
    console.log('getallposts')
 const {data: posts, error} = await sbClient
 .from ('BlogPost')
 .select('*')

 console.log(posts)
//TODO: Error Handler
if (error) {
  console.log(error)
}
return posts !== null? posts : []
},
/**
 * Get a post by id
 * @param {string} id
 * @returns {Promise<SupabaseClient>}
 * @memberof sb
 */
getPostById: async function getPostById(id: string): Promise<PostResolved | PostRejected> {
    const {data: post, error} = await sbClient
    .from ('BlogPost')
    .select()
    .ilike('id', id)
   return post? post : error
},
/** */
createNewPost: async function createNewPost(title: string, postText: string) {
    const {data: newPost, error} = await sbClient
    .from ('BlogPost')
    .insert({
        'post_title': title,
        'post_text': postText,
    })
    return newPost ? newPost : error
},
files: {
    upload: async function upload(file: File, name: string) {
        console.log(file)
        console.log(name)
        const {data: image, error} = await sbClient
            .storage
            .from ('public')
            .upload(`${file.name}`, file, {
            cacheControl: '3600',
            upsert: false
        })
    console.log(image, error)
    }
},
auth :  {
signup: async function signup(data: any) {
        const response = await sbClient.auth.signUp(data)
        return response
    
}, 
signin: async function signin(data: any) {
    const response = await sbClient.auth.signIn(data)
    return response
},
signout: async function signout() {
    const response = await sbClient.auth.signOut()
    return response
}
}
}
/* 
export async function getPostById(id: string): Promise<any> {
    const post = await sbClient
    .from ('BlogPost')
    .select()
    .ilike('id', id)
}

export async function createNewPost(title: string, postText: string) {
    const newPost = await sbClient
    .from ('BlogPost')
    .insert({
        'post_title': 'New Post',
        'post_text': 'New Post Content',
    })

    return newPost
}
 */