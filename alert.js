class Alert {
    constructor(options) {
    	// default style
        this.alertStyle = {
            width: '500px',
            textAlign: 'center',
            padding: '20px 10px',
            position: 'fixed',
            borderRadius: '10px',
            direction: 'ltr',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderBottom: 'solid 4px'
        };

        // default option
        this.alertOptions = {
            limit: 5,
            location: 'tc',
            clickUrl: null,
            clickFun: null,
            severity: 'success',
            theme: 'lite',
            after: null,
        };

        // severity level and color
        this.severity = {
            lite: {
                success: {
                    background: 'rgba(159, 249, 213, 0.7)',
                    color: '#1ea97c'
                },
                info: {
                    background: 'rgba(161, 202, 255, 0.7)',
                    color: '#3b82f6'
                },
                warn: {
                    background: 'rgba(255, 213, 161, 0.7)',
                    color: '#cc8925'
                },
                error: {
                    background: 'rgba(255, 188, 185, 0.7)',
                    color: '#ff5757'
                }
            },
            dark: {
                success: {
                    background: 'rgba(110, 251, 195, 0.7)',
                    color: 'rgb(21, 113, 83)'
                },
                info: {
                    background: 'rgb(59, 130, 246)',
                    color: 'rgb(5, 34, 72)'
                },
                warn: {
                    background: 'rgba(255, 161, 44, 0.7)',
                    color: 'rgb(60, 39, 7)'
                },
                error: {
                    background: 'rgba(255, 96, 89, 0.7)',
                    color: 'rgb(132, 28, 28)'
                }
            }
        };

        this.afterAlert = null;
        
        // create alertItem in html document
        this.alertItem = document.createElement('div');
        this.alertItem.setAttribute('class', 'alert-message');

        // put text in alert
        let text = options.text;
        this.alertItem.textContent = text;

        // style
        if (options.style !== undefined) {
            this.alertStyle.background = COV(options.style.background, this.alertStyle.background);
            this.alertStyle.color = COV(options.style.color, this.alertStyle.color);
            this.alertStyle.width = COV(options.style.width, this.alertStyle.width);
            this.alertStyle.textAlign = COV(options.style.textAlign, this.alertStyle.textAlign);
            this.alertStyle.padding = COV(options.style.padding, this.alertStyle.padding);
            this.alertStyle.borderRadius = COV(options.style.borderRadius, this.alertStyle.borderRadius);
        }
        this.alertOptions.theme = COV(options.theme, this.alertOptions.theme);
        this.alertOptions.severity = COV(options.severity, this.alertOptions.severity);
        this.alertItem.style.background = this.severity[this.alertOptions.theme][this.alertOptions.severity].background;
        this.alertItem.style.color = this.severity[this.alertOptions.theme][this.alertOptions.severity].color;
        // execution style
        Object.assign(this.alertItem.style, this.alertStyle);
        // end style
        
        // location alert
        this.alertOptions.location = COV(options.location, this.alertOptions.location);
        if (this.alertOptions.location === 'tl') {
            this.alertItem.style.left = '10px';
        } else if (this.alertOptions.location === 'tr') {
            this.alertItem.style.right = '10px';
        } else if (this.alertOptions.location === 'tc') {
            this.alertItem.style.left = '0';
            this.alertItem.style.right = '0';
            this.alertItem.style.margin = '0 auto';
        } else if (this.alertOptions.location === 'bl') {
            this.alertItem.style.left = '10px';
            this.alertItem.style.bottom = '10px';
        } else if (this.alertOptions.location === 'br') {
            this.alertItem.style.right = '10px';
            this.alertItem.style.bottom = '10px';
        } else if (this.alertOptions.location === 'bc') {
            this.alertItem.style.left = '0';
            this.alertItem.style.right = '0';
            this.alertItem.style.margin = '0 auto';
            this.alertItem.style.bottom = '10px';
        }
        // end location alert

        // limit alert
        this.alertOptions.limit = COV(options.limit, this.alertOptions.limit);
        this.alertOptions.limit = this.alertOptions.limit * 1000;
        let timeOut = setTimeout(() => {
            this.alertItem.remove();
            this.afterAlert();
        }, this.alertOptions.limit);
        // remove set time out if hover alert
        this.alertItem.addEventListener('mouseenter', () => {
            clearTimeout(timeOut);
        });
        // add set time out after leave alert
        this.alertItem.addEventListener('mouseleave', () => {
            timeOut = setTimeout(() => {
                this.alertItem.remove();
                this.afterAlert();
            }, 1000);
        });
        // end limit alert

        // go to url if click hover
        this.alertOptions.clickUrl = COV(options.clickUrl, this.alertOptions.clickUrl);
        if (this.alertOptions.clickUrl !== null) {
            this.alertItem.addEventListener('click', () => {
                window.open(this.alertOptions.clickUrl, '_blank');
            });
        }

        // execution function if click hover
        this.alertOptions.clickFun = COV(options.clickFun, this.alertOptions.clickFun);
        if (this.alertOptions.clickFun !== null) {
            this.alertItem.addEventListener('click', () => {
                this.alertOptions.clickFun();
            });
        }
        
        // after alert
	    this.afterAlert = () => {
	        this.alertOptions.after = COV(options.after, this.alertOptions.after);
		    if (this.alertOptions.after !== null) {
		        this.alertOptions.after();
		    }
	    } 

        // add alert div in html document
        var parentElement = document.querySelector('body');
        parentElement.appendChild(this.alertItem);
    }
} // end class Alert

// Check the following values 
// COV => Check Option Value
function COV(option, defaultVal) {
    if (option !== undefined) {
        return option;
    } else {
        return defaultVal;
    }
}