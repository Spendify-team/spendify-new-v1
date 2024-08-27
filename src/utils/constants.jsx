export const navItems = [
    {
        name: "Spendify AI OLA",
        subText: "Personalised financial services",
        to: "/ola-ai",
    },
    {
        name: "Tracker",
        subText: "Manage personal and business finances",
        to: "/spendify-tracker",
    },
    {
        name: "Finance News",
        subText: "Stay up to date on global business news",
        to: "/spendify-news",
    },
    {
        name: "Insights",
        subText: "Expert video feels business and personal",
        to: "/spendify-insights",
    },
    {
        name: "Analytics",
        subText: "Mange business finances",
        to: "/analysis",
    },
    {
        name: "Spendify 101",
        subText: "Financial knowledge quiz",
        to: "/spendify-101",
    },
]


export const download = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIphone = /iphone/i.test(navigator.userAgent);
    const isIpad = /ipad/i.test(navigator.userAgent);
    const isMacOS = /mac/i.test(navigator.userAgent);

    let targetUrl;

    if (isIphone || isIpad || isMacOS) {
        // Redirect for iOS devices
        targetUrl = 'https://apps.apple.com/us/app/spendify/id1629340357';
    } else {
        // Redirect for Android devices
        targetUrl = 'https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite';
    }
    window.open(targetUrl, "_blank")
}
