export function selectAvatar(element) {
  // Deseleccionar avatares previamente seleccionados
  var avatars = document.querySelectorAll(".avatar-option");
  avatars.forEach(function (avatar) {
    avatar.classList.remove("selected-avatar");
  });

  // Seleccionar el avatar actual
  element.classList.add("selected-avatar");

  // Actualizar la imagen de vista previa
  var avatarPreview = document
    .getElementById("avatar-preview")
    .querySelector("img");
  avatarPreview.src = element.src;
}
