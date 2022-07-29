try {
  const resp = await fetch("/api/v1/mods");
  const data = await resp.json();
  if (!data.success) {
    alert("Failed to get mods");
  }
  const mods = data.mods;
  const modSpace = document.querySelector("#modSpace");
  modSpace.querySelector("#loading").remove();
  for (const mod of mods) {
    const elem = document.createRange().createContextualFragment(
      `<mod-card
        icon="${mod.icon_url}"
        name="${mod.name}"
        desc="${mod.summary}"
        file="${mod.direct_download_url}"
        modrinth="${mod.modrinth_url}
        curseforge="${mod.curseforge_url}"
      ></mod-card>`
    ).firstChild;
    console.log(elem);
    modSpace.append(elem);
  }
} catch (error) {
  alert("Failed to get mods");
}
