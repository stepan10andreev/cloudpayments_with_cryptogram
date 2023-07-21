export function loadCloudpaymentsScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.addEventListener('load', () => {
      resolve()
    })
    document.head.append(script);
  })
}
