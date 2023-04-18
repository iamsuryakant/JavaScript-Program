import icons from 'url:../../img/icons.svg';
export default class view{
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (eg. recipe)
   * @param {boolean} [render = true] if false create markup string instead of remarking to the DOM.
   * @returns {*|void}
   */

  render(data, render = true){

    if(!data || (Array.isArray(data) && data.length ===  0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if(!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data){

    this._data = data;
    const newmarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newmarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) =>{
      const currEl = currElements[i];

      if(!newEl.isEqualNode(currEl) && newEl.firstChild?.nodeValue.trim() !== ''){
        currEl.textContent = newEl.textContent;
      }

      if(!newEl.isEqualNode(currEl))
        Array.from(newEl.attributes).forEach(attr => currEl.setAttribute(attr.name, attr.value));
    });

  }

  _clear(){
    this._parentElement.innerHTML = '';
  }

  renderSpinner(){
    const markup =
      `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errorMessage){
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;


    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);

  }


  renderMessage(message = this._sucessMessage){
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;


    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);

  }
}