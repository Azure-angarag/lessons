let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(arr, nuhtsul){
    let results = [];
    for (let i = 0; i < arr.length; i++){
        if(nuhtsul(arr[i])){
            results.push(arr[i]);
        }
    }
}

filter()
