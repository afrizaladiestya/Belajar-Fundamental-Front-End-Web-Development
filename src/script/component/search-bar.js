class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      .meal-search {
        max-width: 1280px;
        margin: 0 auto;
        text-align: center;
      }
      .meal-search-box {
        margin: 1.2rem 0;
        display: flex;
        align-items: stretch;
        justify-content: center;
      }
      search-control,
      search-btn {
        width: 100%;
      }
      .search-control {
        width: 50%;
        padding: 15px;
        border: 2px solid #A1DD70;
        font-weight: bold;
        border-top-left-radius:15px;
        border-bottom-left-radius:15px;
      }

      .meal-search-box > input:focus {
         outline: 0;
      }

      .meal-search-box > input:focus::placeholder {
        font-weight: bold;
        color: black;
      }
      
      .meal-search-box >  input::placeholder {
        color: grey;
        font-weight: bold;
      }
    
      .search-btn {
        cursor: pointer;
        background-color: #A1DD70;
        color: white;
        font-weight: bold;
        border: 0;
        border-top-right-radius:15px;
        border-bottom-right-radius:15px;
        text-transform: uppercase;
      }

      .search-btn:hover {
        background-color: #EAEAEA;
        color: black;
        border-right: 2px solid #A1DD70 ;
        border-top: 2px solid #A1DD70 ;
        border-bottom: 2px solid #A1DD70 ;
      }
    
      @media screen and (min-width: 600px){
        .meal-search-box {
          position: static;
          margin-left: auto;
          margin-right: auto;
        }

        .search-control {
          width: 30%;
        }

        .search-btn {
          width: 10%;
        }
      }
      </style>
      
      <div class = "meal-search">
        <h2 class = "title">Find Meals Recipe</h2>

        <div class = "meal-search-box">
          <input type = "search" class = "search-control" placeholder="Enter an ingredient" id = "searchElement">
          <button type = "submit" class = "search-btn btn" id = "searchButtonElement">
            search
          </button>
        </div>
      </div>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
