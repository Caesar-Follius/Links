function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/assets/avatar-light.png",
      img.setAttribute(
        "alt",
        "Foto de Julio Cezar com uma face séria com uma camisa azul em um fundo amadeirado"
      )
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/assets/avatar.png",
      img.setAttribute(
        "alt",
        "Foto de Julio Cezar de oculos, com uma face séria e uma camisa social branca com um fundo amadeirado"
      )
    )
  }
}
