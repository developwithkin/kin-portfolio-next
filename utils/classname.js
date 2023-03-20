
export default function cx(...args) {
  let classes = [];
  args.forEach(arg => {
    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg);
    } else if (typeof arg === "object") {
      for (let key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });
  return classes.join(" ");
}