// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  const sentence = document.querySelector("input#sentence").value; 
  const sentenceArray = sentence.split(' '); // creates array from iterable object
  const pElement = document.createElement("p");
  const newArray = [];
  // create results heading
    const resultsHeading = document.createElement("h2");
    resultsHeading.append("result");
    document.body.append(resultsHeading);

  sentenceArray.forEach(function(word) {
    if (word.length >= 3) {
      newArray.push(word);
    } 
  });

  newArray.reverse();
  pElement.append(newArray.join(' '));
  document.body.append(pElement);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});