let x = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  let value = localStorage.getItem(key);
  x.push({ [key]: value });
}

console.log(x,'tested');
