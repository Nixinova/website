function coords() {
    /// VARIABLES ///
    // call from input form //
    var overworld_block_x = value('overworld_block_x');
    var overworld_block_y = value('overworld_block_y');
    var overworld_block_z = value('overworld_block_z');
    var overworld_chunk_x = value('overworld_chunk_x');
    var overworld_chunk_y = value('overworld_chunk_y');
    var overworld_chunk_z = value('overworld_chunk_z');
    var nether_block_x = value('nether_block_x');
    var nether_block_y = value('nether_block_y');
    var nether_block_z = value('nether_block_z');
    var nether_chunk_x = value('nether_chunk_x');
    var nether_chunk_y = value('nether_chunk_y');
    var nether_chunk_z = value('nether_chunk_z');
    var region_x = value('region_x');
    var region_z = value('region_z');

    /// GENERATOR ///

    if (coordsType === 'overworld_block') {
        nether_block_x    = Math.floor(overworld_block_x / 8);
        nether_block_y    = overworld_block_y;
        nether_block_z    = Math.floor(overworld_block_z / 8);
        overworld_chunk_x = Math.floor(overworld_block_x / 16);
        overworld_chunk_y = Math.floor(overworld_block_y / 16);
        overworld_chunk_z = Math.floor(overworld_block_z / 16);
        nether_chunk_x    = Math.floor(nether_block_x / 16);
        nether_chunk_y    = Math.floor(nether_block_y / 16);
        nether_chunk_z    = Math.floor(nether_block_z / 16);
        region_x          = Math.floor(overworld_block_x / 512);
        region_z          = Math.floor(overworld_block_z / 512);
    }
    else if (coordsType === 'overworld_chunk') {
        overworld_block_x   = Math.floor(overworld_chunk_x * 16);
        overworld_block_y   = Math.floor(overworld_chunk_y * 16);
        overworld_block_z   = Math.floor(overworld_chunk_z * 16);
        nether_block_x      = Math.floor(overworld_chunk_z * 2);
        nether_block_y      = Math.floor(overworld_chunk_z * 2);
        nether_block_z      = Math.floor(overworld_chunk_z * 2);
        region_x            = Math.floor(overworld_chunk_x / 32);
        region_z            = Math.floor(overworld_chunk_z / 32);
    }
    else if (coordsType === 'nether_block') {
        overworld_block_x   = Math.floor(nether_block_x * 8);
        overworld_block_y   = nether_block_y;
        overworld_block_z   = Math.floor(nether_block_z * 8);
        overworld_chunk_x   = Math.floor(overworld_block_x / 16);
        overworld_chunk_y   = Math.floor(overworld_block_y / 16);
        overworld_chunk_z   = Math.floor(overworld_block_z / 16);
        region_x            = Math.floor(nether_block_x / 512);
        region_z            = Math.floor(nether_block_z / 512);
    }
    else if (coordsType === 'nether_chunk') {
        overworld_block_x   = Math.floor(nether_chunk_x * 128);
        overworld_block_y   = nether_block_y;
        overworld_block_z   = Math.floor(nether_chunk_z * 128);
        nether_block_x      = Math.floor(overworld_block_x / 8);
        nether_block_y      = Math.floor(overworld_block_y / 8);
        nether_block_z      = Math.floor(overworld_block_z / 8);
        region_x            = Math.floor(overworld_block_x / 512);
        region_z            = Math.floor(nether_chunk_z / 32);
    }
    else if (coordsType === 'overworld_region') {
        overworld_block_x   = Math.floor(region_x * 128);
        overworld_block_y   = 0;
        overworld_block_z   = Math.floor(region_x * 128);
        overworld_chunk_x   = Math.floor(overworld_block_x / 16);
        overworld_chunk_y   = 0;
        overworld_chunk_z   = Math.floor(overworld_block_z / 16);
        nether_block_x      = Math.floor(region_x * 8);
        nether_block_y      = 0;
        nether_block_z      = Math.floor(region_z * 8);
    }

    /// OUTPUT ///
    $('#overworld_block_x').val(overworld_block_x);
    $('#overworld_block_y').val(overworld_block_y);
    $('#overworld_block_z').val(overworld_block_z);
    $('#overworld_chunk_x').val(overworld_chunk_x);
    $('#overworld_chunk_y').val(overworld_chunk_y);
    $('#overworld_chunk_z').val(overworld_chunk_z);
    $('#nether_block_x'   ).val(nether_block_x);
    $('#nether_block_y'   ).val(nether_block_y);
    $('#nether_block_z'   ).val(nether_block_z);
    $('#nether_chunk_x'   ).val(nether_chunk_x);
    $('#nether_chunk_y'   ).val(nether_chunk_y);
    $('#nether_chunk_z'   ).val(nether_chunk_z);
    $('#region_x'         ).val(region_x);
    $('#region_z'         ).val(region_z);
}

function copy(text) {
    let box = document.createElement('textarea');
    box.value = text;
    document.body.appendChild(box);
    box.select();
    document.execCommand('copy');
    document.body.removeChild(box);
}

function copyOverworldBlock() {
    submit();
    copy([value('overworld_block_x'), value('overworld_block_y'), value('overworld_block_z')].join(' '));
}

function copyOverworldChunk() {
    submit();
    copy([value('overworld_chunk_x'), value('overworld_chunk_y'), value('overworld_chunk_z')].join(' '));
}

function copyNetherBlock() {
    submit();
    copy([value('nether_block_x'), value('nether_block_y'), value('nether_block_z')].join(' '));
}

function copyNetherChunk() {
    submit();
    copy([value('nether_chunk_x'), value('nether_chunk_y'), value('nether_chunk_z')].join(' '));
}


function submit() {
    try {
        coords();
    }
    catch (error) {
        "An unknown error has occurred. Please try again or reload the page.";
        console.error(error.stack);
    }
}//*/

/* Copyright © Nixinova 2020 */