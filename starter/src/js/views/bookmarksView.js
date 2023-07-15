import View from "./view.js";
import previewView from "./previewView.js";
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Please find a recipe and add it to your bookmarks.'
    message = '';

    addHandlerRender(handler) {
        window.addEventListener('load', handler)
    }

    _generateMarkup() {
        return this._data
            .map(result => previewView.render(result, false))
            .join('');
    }
};

export default new BookmarksView();