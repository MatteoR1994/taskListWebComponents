class SuperLi extends HTMLLIElement {

    constructor() {
        super();
    }

    attributeChangedCallback(){
        this.getAttributes();
        this.initTag()
    }

    static get observedAttributes() { return ['task']; }

    getAttributes(){
        if (this.getAttribute('task')) {
            this.task = JSON.parse(this.getAttribute('task'))
        }
    }

    initTag() {
        if (this.task) {
            const taskInfoContainer = document.createElement('div');
            for (const key in this.task) {
                if (Object.hasOwnProperty.call(this.task, key)) {
                    const objElement = this.task[key];
                    const span = document.createElement('span');
                    span.style.display = 'block';
                    let node;
                    if (key === 'doneDate') {
                        if (!objElement) {
                            node = document.createTextNode(key.toUpperCase() + ' - ' + 'assente');
                        } else {
                            node = document.createTextNode(key.toUpperCase() + ' - ' + new Date(objElement).toLocaleDateString('it-IT', { year:"numeric", month:"2-digit", day:"numeric", hour: 'numeric', minute: 'numeric'}));
                        }
                    } else {
                        if (key === 'tags') {
                            if (!objElement) {
                                node = document.createTextNode(key.toUpperCase() + ' - ' + 'assenti');
                            } else {
                                node = document.createTextNode(key.toUpperCase() + ' - ' + objElement);
                            }
                        } else {
                            if (key === 'creationDate') {
                                node = document.createTextNode(key.toUpperCase() + ' - ' + new Date(objElement).toLocaleDateString('it-IT', { year:"numeric", month:"2-digit", day:"numeric", hour: 'numeric', minute: 'numeric'}));
                            } else {
                                node = document.createTextNode(key.toUpperCase() + ' - ' + objElement);
                            }
                        }
                    }
                    span.appendChild(node);
                    taskInfoContainer.appendChild(span);
                }
            }
            this.appendChild(taskInfoContainer);
        }
    }

}

window.customElements.define('super-li', SuperLi, { extends: 'li' });