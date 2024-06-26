
class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.setAttribute('class', 'card-book');

        container.innerHTML = `
            <div class="card-book surface">
                <md-elevation></md-elevation>
                <div class="card-book-content">
                    <div class="card-media"></div>
                    <div class="other-content">
                        <div style= "margin-top: 5px;"class="calification">
                            <md-icon class="star1" filled>grade</md-icon>
                            <md-icon class="star2" >grade</md-icon>
                            <md-icon class="star3" >grade</md-icon>
                            <md-icon class="star4" >grade</md-icon>
                            <md-icon class="star5" >grade</md-icon>
                        </div>
                        <div class="text-content item-margin">
                            <div class="md-typescale-title-medium">${this.getAttribute('title')}</div>
                            <div class="md-typescale-body-large">${this.getAttribute('author')}</div>
                        </div>
                        
                    </div>
                    <div class="minifooter">
                        <md-assist-chip class="item-margin" label="${this.getAttribute('chip-label')}" style="width: fit-content;"></md-assist-chip>   
                        <div class="acceso-rapido">
                                <md-icon-button><md-icon>${this.getAttribute('icon')}</md-icon></md-icon-button>
                                <md-icon-button><md-icon>grade</md-icon></md-icon-button>
                                <md-icon-button><md-icon>share</md-icon></md-icon-button>
                                <md-icon-button><md-icon>format_quote</md-icon></md-icon-button>
                        </div>
                    </div>
                </div>
            </div>
        `;

       // Apply multiple stylesheets
       this.shadowRoot.adoptedStyleSheets = [cardBookStyle, typographyStyle];
       this.shadowRoot.append(container);
    }

    static get observedAttributes() {
        return ['title', 'author', 'chip-label', 'icon', 'image-url', 'star1', 'star2', 'star3', 'star4', 'star5'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
            this.shadowRoot.querySelector('.md-typescale-title-medium').textContent = newValue;
        }
        if (name === 'author') {
            this.shadowRoot.querySelector('.md-typescale-body-large').textContent = newValue;
        }
        if (name === 'chip-label') {
            this.shadowRoot.querySelector('md-assist-chip').setAttribute('label', newValue);
        }
        if (name === 'icon') {
            this.shadowRoot.querySelector('.acceso-rapido md-icon').textContent = newValue;
        }
        if (name === 'image-url') {
            this.shadowRoot.querySelector('.card-media').style.backgroundImage = `url(${newValue})`;
        }
        if (name.startsWith('star')) {
            const starIndex = name.replace('star', '');
            const starElement = this.shadowRoot.querySelector(`.star${starIndex}`);
            if (newValue === 'false') {
                starElement.removeAttribute('filled');
            } else {
                starElement.setAttribute('filled', '');
            }
        }
    }
}

const cardBookStyle = new CSSStyleSheet();
cardBookStyle.replaceSync(`

            @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1');
            
            md-icon[filled] {
                font-variation-settings: 'FILL' 1;
            }
        
        /* Base component */
            .surface {
             width: 200px;
             position: relative;
             border-radius: 16px;
             z-index: inherit;
            }

            .card-book {
               padding: 0;
                background-color: #FFF8F7;
                --md-elevation-level: 5;
                font-family: 'Roboto', sans-serif;
            }

            .card-book-content {
                height: 370px;
                width: 200px;
                display: flex;
                flex-direction: column;  
            }

            .item-margin {
            margin-top: 5px;
            }

            .other-content {
                min-height: 110px;
                padding: 0px 8px;
            }

            .calification md-icon {
                color: yellow;
            }

            .minifooter {
            display: flex;
            flex-direction: column;

                min-height: 96px;
                height: 96px;
                align-self: flex-start;
                justify-self: flex-end;
                padding: 8px;
            }

            .acceso-rapido md-icon {
                color: #e4002b;
            }

            .card-media {
                background-size: cover; /* Asegura que la imagen cubra el contenedor */
                background-repeat: no-repeat; /* Evita que la imagen se repita */
                min-height: 160px;
                height: 160px;
                width: 100%;
                border-radius: 16px 16px 0px 0px;
                overflow: hidden;
            }

            
           
        `);

const typographyStyle = new CSSStyleSheet();
typographyStyle.replaceSync(`
            
             @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

            .md-typescale-display-large {
                font-family: 'Roboto', sans-serif;
                font-size: 57px;
                font-weight: 400;
                line-height: 64px;
            }

            .md-typescale-display-medium {
                font-family: 'Roboto', sans-serif;
                font-size: 45px;
                font-weight: 400;
                line-height: 52px;
            }

            .md-typescale-display-small {
                font-family: 'Roboto', sans-serif;
                font-size: 36px;
                font-weight: 400;
                line-height: 44px;
            }

            .md-typescale-headline-large {
                font-family: 'Roboto', sans-serif;
                font-size: 32px;
                font-weight: 400;
                line-height: 40px;
            }

            .md-typescale-headline-medium {
                font-family: 'Roboto', sans-serif;
                font-size: 28px;
                font-weight: 400;
                line-height: 36px;
            }

            .md-typescale-headline-small {
                font-family: 'Roboto', sans-serif;
                font-size: 24px;
                font-weight: 400;
                line-height: 32px;
            }

            .md-typescale-title-large {
                font-family: 'Roboto', sans-serif;
                font-size: 22px;
                font-weight: 700;
                line-height: 28px;
            }

            .md-typescale-title-medium {
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
            }

            .md-typescale-title-small {
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
            }

            .md-typescale-label-large {
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
            }

            .md-typescale-label-medium {
                font-family: 'Roboto', sans-serif;
                font-size: 12px;
                font-weight: 500;
                line-height: 16px;
            }

            .md-typescale-label-small {
                font-family: 'Roboto', sans-serif;
                font-size: 11px;
                font-weight: 500;
                line-height: 16px;
            }

            .md-typescale-body-large {
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }

            .md-typescale-body-medium {
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
            }

            .md-typescale-body-small {
                font-family: 'Roboto', sans-serif;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
            }
            
        `);
customElements.define('book-card', BookCard);

