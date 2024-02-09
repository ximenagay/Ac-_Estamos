export function selectAvatar(element) {
  var avatars = document.querySelectorAll(".avatar-option");
  avatars.forEach(function (avatar) {
    avatar.classList.remove("selected-avatar");
  });

  element.classList.add("selected-avatar");

  var avatarPreview = document
    .getElementById("avatar-preview")
    .querySelector("img");
  avatarPreview.src = element.src;
}
