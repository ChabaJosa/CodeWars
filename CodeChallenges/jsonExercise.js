let json = require("./whateverJson.json")
sortedJson = json.sort( (a,b) => { return new Date(b.published_at) - new Date(a.published_at)} )
// sortedJson.forEach( obj => {console.log(`Date: ${obj.published_at}, Title: ${obj.title}`)})

// Assuming there's html and bootstrap is installed
const div1 = document.getElementById('one')
sortedJson.forEach( obj => {return d1.insertAdjacentHTML('afterend', `<div className="display-3 text-center">${obj.title}</div>`)})
