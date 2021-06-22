function random(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function show_more(sourceId, targetId, rvcols) {
    var source = $('#' + sourceId);
    var target = $('#' + targetId);

    source.toggleClass('minus').toggleClass('elipsis');
    target.toggleClass("hide");

    if (rvcols) target.toggleClass("row");
}

function toggleOnOff(id) {
    $(id).toggleClass('on').toggleClass('off');
}

function copyCommand() {
    let box = document.createElement('textarea');
    box.value = window.Output;
    document.body.appendChild(box);
    box.select();
    document.execCommand('copy');
    document.body.removeChild(box);
}

function getQueryString(val) {
    let href = window.location.href.split('#');
    let query = href[1] ? href[1].split('&') : '';
    if (query) {
        let regexMatch = new RegExp('(\\?|)' + RegExp.escape(val) + '=.+');
        let regexReplace = new RegExp('(\\?|)' + RegExp.escape(val) + '=');
        let times = 0;
        for (let q of query) {
            if (q.match(regexMatch)) {
                return q.replace(regexReplace, '');
            } else ++times;
        }
        if (times === 0) return '';
    }
}

function value(id, type) {
    let val = $('#' + id).val().trim();
    switch (type) {
        case 'int': return val ? parseInt(val, 10) : null;
        case 'num': return val ? parseFloat(val) : null;
        default: return val;
    }
}

function checked(id) {
    return document.getElementById(id).checked;
}

function cleanup(id) {
    return id.toLowerCase()
        .replace(/[ -]/g, '_')
        .replace(/[^a-z_:]/g, '')
        .replace(/_+/g, '_')
        .replace(/:+/g, ':')
        .replace(/:_/g, ':');
}

function isEmpty(object) {
    for (key in object) {
        if (object.hasOwnProperty(key)) return false;
    }
    return true;
}

function rvNestedDupes(array) {
    let newArray = [];
    let itemsFound = {};
    for (let x of array) {
        let str = JSON.stringify(x);
        if (itemsFound[str]) continue;
        newArray.push(x);
        itemsFound[str] = true;
    }
    return newArray;
}

function rvDupes(array) {
    let newArray = [];
    for (let a = 0; a < array.length; a++) {
        if (newArray.indexOf(array[a]) == -1) {
            newArray.push(array[a]);
        }
        if (newArray[a] == null) {
            newArray.splice(a, 1);
        }
    }
    return newArray;
}

function randomString(length) {
    let chars = [], output = '';
    for (let i = 32; i <= 591; i++) {
        chars.push(String.fromCharCode(i));
    }
    for (let i = 0; i < length; i++) {
        output += chars[random(0, chars.length - 1)];
    }
    return output.replace(/ /g, '\u00a0');
}

function obfuscate(input, element) {
    const randString = randomString(input.length);
    if (element) $(element).text(randString);
    else return randString;
}

/* Copyright © Nixinova 2021 */
