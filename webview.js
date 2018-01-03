module.exports = (Franz) => {

    function getMessages() {
        let count = jQuery("span[title*='Inbox'] + span + span").first().text();

        Franz.setBadge(parseInt(count));

        setTimeout(getMessages, 3000);
    };

    getMessages();

};