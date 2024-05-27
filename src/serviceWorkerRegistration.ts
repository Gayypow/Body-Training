export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(`${process.env.PUBLIC_URL}/sw.js`)
        .then((registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed: ", error);
        });
    });
  }
}
