answerSheet = document.querySelector('.answer-sheet')


class Choise {

    constructor(responseNumber, choiseNumber){
        this.responseNumber = responseNumber;
        this.choiseNumber = choiseNumber;

        this.radio = document.createElement('input');
        this.radio.classList = ["choice-radio"];
        this.radio.type = "radio";
        this.radio.name = `Response${responseNumber}`;
        this.radio.id = `R${responseNumber}C${choiseNumber}`;
        this.radio.value = choiseNumber;

        this.label = document.createElement('label');
        this.label.setAttribute('for', this.radio.id)
        this.label.classList = ["choice-label"];
        this.label.innerHTML = `${choiseNumber}`;
    }
}

class Response {

    constructor(responseNumber, numberOfChoises){
        this.responseNumber = responseNumber;

        this.element = document.createElement('div');
        this.element.classList = ["response"];
        this.element.id = `R${responseNumber}`;
        this.element.innerHTML = `${responseNumber}.`;

        this.choises = [];

        for (let choiseNumber = 1; choiseNumber <= numberOfChoises; choiseNumber++) {
            var choise = new Choise(responseNumber, choiseNumber);
            this.choises.push(choise);
            this.element.appendChild(choise.radio);
            this.element.appendChild(choise.label);
        }
    }
}

var responses = [];
var numberOfResponses = 50;
var numberOfChoises = 5;

for (let responseNumber = 1; responseNumber <= numberOfResponses; responseNumber++) {
    var response = new Response(responseNumber, numberOfChoises);
    this.responses.push(response);
}

for (let i = 0; i < responses.length/5; i++) {
    for (let j = 0; j < 5; j++) {
        if (Math.ceil(responses.length/5)*j+i >= responses.length){
            answerSheet.appendChild(document.createElement('div'))
            break;
        } 
        answerSheet.appendChild(responses[Math.ceil(responses.length/5)*j+i].element)
    }
}