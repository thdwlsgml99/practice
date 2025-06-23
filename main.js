function btn() {
    let txt = document.getElementById("inputText").value;

    if(!txt) {
        console.log("텍스트가 존재 하지 않습니다.")
        return;
    }

    fetch('http://localhost:11434/api/generate', {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "model": "llama3.2:latest",
            "prompt": txt,
            "stream": false
        })
    })
    .then((res) => res.json())
    .then((res) => {
        document.getElementById("resultContainer").classList.remove("d-none");
        document.getElementById("result").innerText = res.response;
    })
}
