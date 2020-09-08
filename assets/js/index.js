var data_url = "https://raw.githubusercontent.com/organizejs/organizejs.github.io/master/data.json"; 

function getTemplate(date, link, title, publication, description) {
  return `
  <tr>
    <td class="date">${date}</td>
    <td class="link"><a href="${link}" target="_blank">${title}</a></td>
  </tr>
  <tr>
    <td></td>
    <td class="publication">${publication}</td>
  </tr>
  <tr>
    <td></td>
    <td class="description">${description}</td>
  </tr>
  `
}

$(document).ready(function() {
  $.getJSON(data_url, function(data) {
    for (var i in data) {
      let e = data[i]
      let template = getTemplate(
        e["date"],
        e["link"],
        e["title"],
        e["publication"],
        e["description"]
      );
      $("#writing").append($(template));
    }
  });

})
