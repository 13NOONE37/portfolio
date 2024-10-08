const scrollToId = (id: string, offset?: number, failCallback?: () => void) => {
  const ifFailCallback = failCallback ?? (() => {});

  const scrollOffset = offset ?? 0;
  const element = document.getElementById(id);

  if (!element) return ifFailCallback();
  const { top } = element.getBoundingClientRect();
  const scrollPosition = top + window.scrollY - scrollOffset;

  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  });
};
export default scrollToId;
