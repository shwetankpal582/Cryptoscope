export const GA_TRACKING_ID = 'G-9D9YJ84V9E'; // Replace with your Measurement ID

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

// Log the pageview with Google Analytics
export const pageview = (url: string) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Log custom events
export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
};
