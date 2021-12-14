// Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
export function throttle(timer: number | undefined, func: Function, delay?: number) {
  // If setTimeout is already scheduled, no need to do anything
  if (timer) {
    return;
  }

  // Schedule a setTimeout after delay seconds
  timer = setTimeout(function () {
    func();

    // Once setTimeout function execution is finished, timerId = undefined so that in <br>
    // the next scroll event function execution can be scheduled by the setTimeout
    timer = undefined;
  }, delay);
}
