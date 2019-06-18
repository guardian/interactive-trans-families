export default {
    init: function() {
        this.bindings();
    },

    bindings: function() {
        $('.uit-story__switch').click(function(e) {
            this.toggleLanguage(e.currentTarget);
        }.bind(this));
    },

    toggleLanguage: function(switchEl) {
        var $parent = $(switchEl).parent();
        var switchState = $parent.hasClass('is-spanish');

        if (switchState) {
            $parent.removeClass('is-spanish');
        } else {
            $parent.addClass('is-spanish');
        }
    }
};
