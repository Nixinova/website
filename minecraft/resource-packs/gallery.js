var $text = $('#pause-text');

function togglePlay() {
    if ($text.html() == 'pause') {
        $text.html('play_arrow');
    } else {
        $text.html('pause');
    }
}

function gallery(arr) {
    if ($text.html() == 'pause') {
        const $gallery_img = $('#gallery .screenshot')
        let src = 'https://images.nixinova.com/minecraft/resource-packs/' + arr[i];
        $gallery_img.css("background-image", "url('" + src + "')");

        i++;
        if (i >= arr.length) {i = 0;}
    }
};