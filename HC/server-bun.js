import { serve } from 'bun';

// serve(async (req) => {
//     return new Response('Hello World\n');
//     }, {
//     port: 3000  
//     });

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('HAHAHAHAHAH', {status: 200})
        } else if (url.pathname === '/haha') {
            return new Response('BHAHBABAHABHA', {status: 200})
        } else {
            return new Response('404 Not found', {status: 404});
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
})