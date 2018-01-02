module.exports = (Franz) => {

    function getMessages() {
        let count = jQuery("span[title*='Inbox'] + span + span").first().text();

        Franz.setBadge(count);
    };

    // check for new messages every second and update Franz badge
    Franz.loop(getMessages);


};