const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'alan',
            age: 28
        });
        // reject('something went wrong!')
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');
        }, 3500);
    });
}).then((str) => {
    console.log('Does this run?', str);
}).catch((error) => {
    console.log('error', error);
});


console.log('after');