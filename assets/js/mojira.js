function progress(val) {
    $('progress').attr('value', val);
}

function start() {
    progress(0);
    $('table').addClass('hide');
    $('#loading').removeClass('hide');
    $('#dropdown').html('<option></option>');
    $('table tbody').html('');
    location.hash = '';
}

function complete() {
    progress(1);
    setTimeout(function () {
        $('#loading').addClass('hide');
    }, 250);
    $('table').removeClass('hide');
}

function initial() {
    generateAllProjects()
}

function generateAllProjects() {
    $('#navigation').addClass('hide');
    start();
    $('table thead').html(`
        <tr>
            <th>Icon</th>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Navigation</th>
        </tr>
    `);
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://bugs.mojang.com/rest/api/2/project/'
    }).done(function (data) {
        progress(0.5);
        for (let project of data) {
            $('table tbody').append(`
                <tr>
                    <td><img src="${project.avatarUrls["48x48"]}"></td>
                    <td>${project.key}</td>
                    <td>${project.name}</td>
                    <td><a href="javascript:generateProject('${project.key}')">Generate</a>
                </tr>
            `);
        }
        complete();
    });
}

function bugsLink(type, version, project) {
    return `https://bugs.mojang.com/issues/?jql=${type}+in+%28%22${version}%22%29+AND+project+%3D+${project}+ORDER+BY+key`
}

function generateProject(project) {
    start();
    $('table thead').html(`
        <tr>
            <th style="max-width: 300px;">Version</th>
            <th style="width: 100px;">Date</th>
            <th>Description</th>
            <th style="width: 100px;">Quick Links</th>
        </tr>
    `);
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://bugs.mojang.com/rest/api/2/project/' + project
    }).done(function (data) {
        //$('#information').html(data.description);
        $('table thead').prepend(`
            <tr><td colspan=4 style="text-align: center;">
                <a href="javascript:generateAllProjects()" style="position: relative; right: 8%;">&larr; Back</a>
                <img src="${data.avatarUrls["48x48"]}"> ${data.name}
            </td></tr>
        `);
        for (let version of data.versions.reverse()) {
            $('#dropdown').append(`\n<option>${version.name}</option>`);
            $('table tbody').append(`
                <tr id="${encodeURIComponent(version.name)}">
                    <td style="max-width: 300px;">${version.name}</td>
                    <td style="width: 100px;"><samp>${version.released && version.releaseDate || ''}</samp></td>
                    <td><small>${version.description || ''}</small></td>
                    <td style="width: 100px;">
                        <a href="${bugsLink('affectedVersion', version.name, project)}">Bugs</a>,
                        <a href="${bugsLink('fixVersion', version.name, project)}">Fixes</a>
                    </td>
                </tr>
            `);
        }
        $('#navigation').removeClass('hide');
        complete();
    });
}

/* Copyright © Nixinova 2020 */