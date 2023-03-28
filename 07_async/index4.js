// setTimeout(function () {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function () {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.body.style.backgroundColor = "green";
//         setTimeout(function () {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function setBackground(color, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

setBackground("red", 1000)
  .then(function () {
    return setBackground("orange", 1000);
  })
  .then(function () {
    return setBackground("yellow", 1000);
  })
  .then(function () {
    return setBackground("green", 1000);
  })
  .then(function () {
    return setBackground("blue", 1000);
  })
  .catch(function (error) {
    console.error(error);
  });
