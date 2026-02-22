export const getCssVariableValue = (variableName: string): string => {
  // Access the variable at the root element
  const rootStyles = window.getComputedStyle(document.documentElement);
  const value = rootStyles.getPropertyValue(variableName).trim();
  return value;
};