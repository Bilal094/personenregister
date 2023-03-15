fetch('json/opdracht1_bijlage.json')
  .then(response => response.json())
  .then(data => {
    Object.entries(data).forEach(([key,val]) => {

        document.write(`${key}` + ': ' + `${val}` + "<br>");
    })
  })