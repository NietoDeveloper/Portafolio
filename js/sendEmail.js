const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const fd = new FormData(this);
  const encoded = new URLSearchParams(fd).toString();

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encoded,
  });

  if (response.ok) {
    this.reset();
    alert("Message Sent");
  } else {
    alert("Error");
  }
}