var Page = require('astrolabe').Page;

/**
 * @namespace
 */
var rxInfoPanel = {

    /**
     * @function
     * @instance
     * @description Whether or not the info panel is displayed.
     * @returns {Boolean}
     */
    isDisplayed: {
        value: function () {
            return this.rootElement.isDisplayed();
        }
    },

    lblTitle: {
        get: function () { return this.rootElement.$('.info-title'); }
    },

    /**
     * @type {String}
     * @instance
     * @description The title of the info panel.
     */
    title: {
        get: function () {
            var page = this;
            return this.lblTitle.isPresent().then(function (present) {
                if (present) {
                    return page.lblTitle.getText();
                } else {
                    var deferred = protractor.promise.defer();
                    deferred.fulfill('');
                    return deferred.promise;
                }
            });
        }
    },
};

exports.rxInfoPanel = {

    /**
     * @function
     * @memberof rxInfoPanel
     * @param {ElementFinder} rxInfoPanelElement - The ElementFinder to be turned into an rxInfoPanel page object.
     * @returns {rxInfoPanel}
     */
    initialize: function (rxInfoPanelElement) {
        if (rxInfoPanelElement === undefined) {
            rxInfoPanelElement = $('rx-info-panel');
        }

        rxInfoPanel.rootElement = {
            get: function () { return rxInfoPanelElement; }
        };

        return Page.create(rxInfoPanel);
    }

};
