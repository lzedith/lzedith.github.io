function onload() {
  const loc = window.location.pathname;
  if ((loc??'').startsWith('/~')) {
    const id = loc.substring(2);
    if (index404[id] != null) {
      window.location.href = index404[id];
    }
  }
}
setTimeout(onload, 1);