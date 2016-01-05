
Object.toParams = function ObjectToParams(obj) {
    var p = [];
    for (var key in obj)
    {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
};