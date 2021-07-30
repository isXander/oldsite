const modlist = $('#mod-list')
$.getJSON('https://dl.isxander.dev/mods/index.json', function (data) {
    data.forEach(function (mod) {
        modlist.append(`
            <div class="card" style="background-image: url(${mod.icon});">
                <div class="card-content">
                    <h2 class="card-title">${mod.name}</h2>
                    <p class="card-body">${mod.description}</p>
                    <a href="${mod.github}" class="card-button">GitHub</a>
                </div>
            </div>
        `)
    })
})