class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .fan-art-meal {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .meal-info {
            padding: 24px;
        }

        h2, h3 {
            text-transform: uppercase;
            text-align: center;
            
        }

        h2 {
            margin: 0 auto;  
            font-size: 160%
            word-spacing : 2px;
            margin-bottom: 10px;
            margin-top : 10px;
            background-color: #A1DD70;
            border-radius: 10px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            width: 50%;
            
        }

        .row {
            max-width: 1140px;
            margin: 0 auto;
        }

        .row .long-copy {
            margin-bottom : 30px;
            text-align : justify;
        }



    </style>
    <div class="meal-info">
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Meal Art">
        <h2>${this._meal.strMeal}</h2>
        <h3> Country: ${this._meal.strArea}</h3>
        <div class="row">
            <p class="long-copy"><strong><span>How to make:<span></strong><br> ${this._meal.strInstructions}</p>
        </div>
    </div>`;
    }
}

customElements.define("meal-item", MealItem);