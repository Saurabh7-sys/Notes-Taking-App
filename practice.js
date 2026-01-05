// Write a function that calls an API.
// If it fails, retry up to 3 times, then throw a clear custom error.

// network failure

// timeout

// final error message must explain why it failed

// https://jsonplaceholder.typicode.com/posts/1


let isLoading = true;
let isSuccess = false;
let isError = false;


const getPost = async (retry = 3) => {
    isLoading;
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("server error", response.status);
        }
        const data = await response.json();

        console.log("success");
        isLoading = false;
        isSuccess = true
        return data;
    } catch (error) {
        console.log(error);

        if (retry > 0) {
            console.log("retrying", retry);

            setTimeout(() => {
                getPost(retry - 1);
            }, 1000)
        }
        else {
            isError = true;
            console.log("stopped");

        }
    }
}


getPost();
