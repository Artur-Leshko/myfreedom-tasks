export async function makeRequest(url, method='GET', body) {
    const params = {
        method
    };

    if(body && (method === "POST" || method === "PUT" || method === "PATCH")) {
        params.body = JSON.stringify(body);
        params.headers = {
            "content-type": "application/json"
        };
    }

    const response = await fetch(url, params);

    if(!response.ok) {
        throw new Error(`Что то пошло не так: status code ${response.status}`);
    }

    if(response.status !== 204) {
        return response.json();
    }
}
