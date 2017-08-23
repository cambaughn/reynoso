
const mediaQuery = (size, desktopStyle, mobileStyle) => {
  const getStyle = style => {
    return style;
  }

  return window.innerWidth > size ? getStyle(desktopStyle) : getStyle(mobileStyle);
}

export { mediaQuery };
