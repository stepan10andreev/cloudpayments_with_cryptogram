export function loadCloudpaymentsScript(src: string) {
  return new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.addEventListener('load', () => {
      resolve()
    })
    document.head.append(script);
  })
}
