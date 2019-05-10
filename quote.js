var qOfTday = document.getElementById("qOfTday");
const quoteUrl = "https://quotes.rest/qod.json";

    fetch(quoteUrl)
        .then(quoteResp => quoteResp.json())
            .then(quoteData =>
            {
                console.log(quoteData.contents.quotes[0].quote);
                qOfTday.innerHTML = `${quoteData.contents.quotes[0].quote}`;
            })
