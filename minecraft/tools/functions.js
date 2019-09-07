function show_more(sourceId, targetId, rvcols) {
    var source = $('#' + sourceId)
    var target = $('#' + targetId)
    
    source.toggleClass('minus')
    source.toggleClass('elipsis')
    target.toggleClass("hide")

    if (rvcols) {target.toggleClass("row")}
}

function getQueryString(val) {
    let href = window.location.href.split('#')
    let query = href[1]? href[1].split('&') : '';
    if (query) {
        let regexMatch = new RegExp('(\\?|)' + val + '=.+');
        let regexReplace = new RegExp('(\\?|)' + val + '=');
        let times = 0;
        for (var i in query) {
            if (query[i].match(regexMatch)) {
                return query[i].replace(regexReplace, '');
            } else {times++;}
        }
        if (times === 0) {return '';}
    }
}

function value(id, type) {
    switch (type) {
        case 'int': return parseInt($('#'+id).val(), 10);
        case 'num': return parseFloat($('#'+id).val(), 10);
        default: return $.trim($('#'+id).val());
    }
}

function checked(id) {
    return document.getElementById(id).checked;
}

function hasClass(id, class_) {
    return $('#' + id).hasClass(class_);
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
    for (key of object) {
        if (object.hasOwnProperty(key)) return false;
    }
    return true;
}

function rvNestedDupes(array) {
    let newArray = [];
    let itemsFound = {};
    for (i = 0; i < array.length; i++) {
        let str = JSON.stringify(array[i]);
        if (itemsFound[str]) {continue};
        newArray.push(array[i]);
        itemsFound[str] = true;
    }
    return newArray;
}

function rvDupes(array) {
    let newArray = [];
    for (a = 0; a < array.length; a++) {
        if (newArray.indexOf(array[a]) == -1) {
            newArray.push(array[a]);
        }
        if (newArray[a] == null) {newArray.splice(a,1);}
    }
    return newArray;
}