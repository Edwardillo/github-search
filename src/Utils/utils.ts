export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: NodeJS.Timeout | undefined;

  return function(...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      // @ts-expect-error - TS doesn't know what the return type of the function is
      func.apply(this, args);
    }, delay);
  };
}
