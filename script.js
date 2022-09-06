let origineArray = [1,'text', ['text'], [{name: 'origine'}], {func: function(){console.log('hello')}}];
let origineArray2 = [1,'text', ['text'], [{name: 'origine'}], [{func: { isName: true}}]];
let origineArray3 = [1,'text', ['text'], [{name: 'origine'}], [5, [5, [0]]]];

function deepCloneArray (arr) {
    let result = [];
    for( let i=0; i<arr.length; i++){
        if(typeof(arr[i]) !== 'object') {
            result.push(arr[i])
        } else if (Array.isArray(arr[i])){
            let elemClone = deepCloneArray(arr[i]);
            result.push(elemClone);
        } else {
            objectClone = JSON.parse(JSON.stringify(arr[i]));
            result.push(objectClone);
        }
    }

    return result;
}

