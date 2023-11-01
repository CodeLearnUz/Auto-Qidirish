let searchTerms = ['iphone 12', 'redmi', 'apple', 'redmi 5', 'samsung', 'acer', 'lenovo']

const autocopleteMatch = (input) => {
    if(input == ''){
        return []
    }

    let reg = new RegExp(input)
    return searchTerms.filter(termin => {
        if(termin.match(reg)){
            return termin
        }
    })
}

function showResults(val){
    let res = document.getElementById('result')
    res.innerHTML = ''
    let list = ''
    let termins = autocopleteMatch(val)
    for(let i = 0; i < termins.length; i++){
        list = list + '<li>' + termins[i] + '</li>'
    }
    res.innerHTML = '<ul>' + list + '</ul>'
}