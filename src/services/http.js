
export const httpRequest = (method, url, body) => {
    const defaultHeaders = {
        "Content-Type": "application/json"
    };
    const OPTIONS = {
        method,
        headers: { ...defaultHeaders }
    };
    return sendRequest(url, OPTIONS);
};


function sendRequest(url, OPTIONS) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ code: 408, statusText: "Request Timeout" });
        }, 45000);
        fetch(url, OPTIONS).then(response => {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(body => {
                    resolve({
                        body,
                        status: response.status,
                        statusText: response.statusText
                    });
                });
            } else {
                response.json().then(body => {
                    reject({
                        body: body,
                        code: parseInt(`${response.status}`)
                    });
                });

            }
        });
    });
}

