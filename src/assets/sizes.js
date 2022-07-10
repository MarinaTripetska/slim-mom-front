export const size = {
  mobile: '320px',
  maxTablet: '767px',
  tablet: '768px',
  laptop: '1024px',
  maxDesktop: '1279px',
  desktop: '1280px',
};

export const breakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  maxTablet: `(max-width: ${size.maxTablet})`,
  onlyTablet: `(min-width: ${size.tablet}) and (max-width: ${size.maxDesktop})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  maxDesktop: `(max-width: ${size.maxDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
