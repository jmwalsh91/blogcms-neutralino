import DOMPurify from 'dompurify'



   export function sanitizeRichText(postText: string): string {
        const sanitizedPost = DOMPurify.sanitize(postText)
    console.log(sanitizedPost)
    return sanitizedPost
    }

