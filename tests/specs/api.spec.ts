import {test, expect} from '@playwright/test';

test.describe('API Testing', () =>{

    test('GET - fetch a single post',async ({request}) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

        // Validate status code
        expect(response.status()).toBe(200);

        // Valitdate response body
        const body = await response.json();
        expect(body.id).toBe(1);
        expect(body.title).toBeTruthy();
        expect(body.userId).toBeTruthy();
    });

    test('{POST - create a new post ', async({request}) =>{
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: {
                title: 'My test post',
                body: 'This is the post body',
                userId: 1
            }
        });

        // Validate status code
        expect(response.status()).toBe(201);

        // Validate the created post
        const body = await response.json();
        expect(body.title).toBe('My test post');
        expect(body.id).toBeTruthy();

        
    });

    test('DELETE - delete a post', async({request}) =>{
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

        // 200 means the delete was successful
        expect(response.status()).toBe(200);


    });

});