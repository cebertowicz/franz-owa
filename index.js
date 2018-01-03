module.exports = Franz => class owa extends Franz {
    overrideUserAgent() {
        const useragent = window.navigator.userAgent;

        // Quick and dirty hackfix
        const a = useragent.split('Franz');
        const b = a[1].split(' ');
        return a[0] + b[1] + ' ' + b[3];
    }
};