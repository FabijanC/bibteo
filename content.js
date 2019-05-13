var node = document.getElementsByClassName("qtext")[0].getElementsByTagName("h4")[0]
node.innerText = node.innerText.replace(/[A-ž]/g, "")
