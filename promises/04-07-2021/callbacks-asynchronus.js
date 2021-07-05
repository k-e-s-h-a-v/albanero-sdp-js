function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        callback(url);
    }, 3000);
}

let url = 'picture from somewhere on the internet';
download(url, function(picture) {
    console.log(`Processing ${picture}`);
}); 