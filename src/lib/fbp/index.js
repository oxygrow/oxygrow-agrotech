export const pageview = (url) => {
  window.fbq("track", url);
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
