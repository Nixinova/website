function loadData(data) {

    //$('html').attr('lang','en-NZ');

    // HEAD //
    for (var stylesheet of data.stylesheets) {
        $('head').prepend(`\n\t<link rel="stylesheet" href="/assets/css/${stylesheet}">`);
    }

    for (var script of data.scripts) {
        if (script.startsWith('./')) {
            $('head').prepend(`\n\t<script src="${script}">`);
        } else {
            $('head').prepend(`\n\t<script src="/assets/js/${script}">`);
        }
    }
    
    $('head').prepend(`
        <title>${data.title}</title>
        <head charset="UTF-8">
        <head name="description" content="${data.description}">
        <head name="author" content="Nixinova">
        <head name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="/favicon.ico">
    `);

    // BODY //
    $('body').append(`
        <header>
            <nav></nav>
        </header>

        <main>
        </main>

        <footer>
        </footer>
    `);

    $('nav').load('/assets/imports/navigation');
    $('footer').load('/assets/imports/footer');

    $('main').html($('#page-loader-content').html());

    $('#page-loader-script').remove();
    $('[src="/loader.js"]').remove();

}