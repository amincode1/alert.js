class Alert {
    constructor(options) {
        // default style
        this.alertStyle = {
            width: "400px",
            textAlign: "center",
            padding: "20px 10px",
            position: "fixed",
            borderRadius: "10px",
            direction: "ltr",
            cursor: "pointer",
            fontWeight: "bold",
            borderBottom: "solid 4px",
            zIndex: "9",
        };

        // default option
        this.alertOptions = {
            limit: 5,
            location: "tc",
            clickUrl: null,
            clickFun: null,
            severity: "success",
            after: null,
        };

        // severity level and color
        this.severity = {
            success: {
                background: "rgb(159, 249, 213)",
                color: "#1ea97c",
            },
            info: {
                background: "rgb(161, 202, 255)",
                color: "rgb(6, 101, 255)",
            },
            warn: {
                background: "rgb(255, 213, 161)",
                color: "rgb(172, 103, 1)",
            },
            error: {
                background: "rgb(255, 195, 192)",
                color: "rgb(255, 0, 0)",
            },
        };

        // Check the following values
        // COV => Check Option Value
        this.COV = (option, defaultVal) => {
            if (option !== undefined) {
                return option;
            } else {
                return defaultVal;
            }
        };

        this.afterAlert = null;

        // create alertItem in html document
        this.alertItem = document.createElement("div");
        this.alertItem.setAttribute("class", "alert-message");

        // put text in alert
        let text = options.text;
        this.alertItem.textContent = text;

        // style
        if (options.style !== undefined) {
            this.alertStyle.background = this.COV(
                options.style.background,
                this.alertStyle.background,
            );
            this.alertStyle.color = this.COV(
                options.style.color,
                this.alertStyle.color,
            );
            this.alertStyle.width = this.COV(
                options.style.width,
                this.alertStyle.width,
            );
            this.alertStyle.textAlign = this.COV(
                options.style.textAlign,
                this.alertStyle.textAlign,
            );
            this.alertStyle.padding = this.COV(
                options.style.padding,
                this.alertStyle.padding,
            );
            this.alertStyle.borderRadius = this.COV(
                options.style.borderRadius,
                this.alertStyle.borderRadius,
            );
        }

        this.alertOptions.severity = this.COV(
            options.severity,
            this.alertOptions.severity,
        );
        this.alertItem.style.background =
            this.severity[this.alertOptions.severity].background;
        this.alertItem.style.color =
            this.severity[this.alertOptions.severity].color;
        // execution style
        Object.assign(this.alertItem.style, this.alertStyle);
        // end style

        // location alert
        this.alertOptions.location = this.COV(
            options.location,
            this.alertOptions.location,
        );
        if (this.alertOptions.location === "tl") {
            this.alertItem.style.top = "10px";
            this.alertItem.style.left = "10px";
        } else if (this.alertOptions.location === "tr") {
            this.alertItem.style.top = "10px";
            this.alertItem.style.right = "10px";
        } else if (this.alertOptions.location === "tc") {
            this.alertItem.style.top = "10px";
            this.alertItem.style.left = "0";
            this.alertItem.style.right = "0";
            this.alertItem.style.margin = "0 auto";
        } else if (this.alertOptions.location === "bl") {
            this.alertItem.style.left = "10px";
            this.alertItem.style.bottom = "10px";
        } else if (this.alertOptions.location === "br") {
            this.alertItem.style.right = "10px";
            this.alertItem.style.bottom = "10px";
        } else if (this.alertOptions.location === "bc") {
            this.alertItem.style.left = "0";
            this.alertItem.style.right = "0";
            this.alertItem.style.margin = "0 auto";
            this.alertItem.style.bottom = "10px";
        }
        // end location alert

        // limit alert
        this.alertOptions.limit = this.COV(
            options.limit,
            this.alertOptions.limit,
        );
        this.alertOptions.limit = this.alertOptions.limit * 1000;
        let timeOut = setTimeout(() => {
            this.alertItem.remove();
            this.afterAlert();
        }, this.alertOptions.limit);
        // remove set time out if hover alert
        this.alertItem.addEventListener("mouseenter", () => {
            clearTimeout(timeOut);
        });
        // add set time out after leave alert
        this.alertItem.addEventListener("mouseleave", () => {
            timeOut = setTimeout(() => {
                this.alertItem.remove();
                this.afterAlert();
            }, 1000);
        });
        // end limit alert

        // go to url if click hover
        this.alertOptions.clickUrl = this.COV(
            options.clickUrl,
            this.alertOptions.clickUrl,
        );
        if (this.alertOptions.clickUrl !== null) {
            this.alertItem.addEventListener("click", () => {
                window.open(this.alertOptions.clickUrl, "_blank");
            });
        }

        // execution function if click hover
        this.alertOptions.clickFun = this.COV(
            options.clickFun,
            this.alertOptions.clickFun,
        );
        if (this.alertOptions.clickFun !== null) {
            this.alertItem.addEventListener("click", () => {
                this.alertOptions.clickFun();
            });
        }

        // after alert
        this.afterAlert = () => {
            this.alertOptions.after = this.COV(
                options.after,
                this.alertOptions.after,
            );
            if (this.alertOptions.after !== null) {
                this.alertOptions.after();
            }
        };

        // add alert div in html document
        var parentElement = document.querySelector("body");
        parentElement.appendChild(this.alertItem);
    }
} // end class Alert

