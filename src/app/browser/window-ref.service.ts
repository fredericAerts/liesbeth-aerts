import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class WindowRef {
  document: HTMLDocument;

  constructor(@Inject(DOCUMENT) document: HTMLDocument) {
    this.document = document;
  }

  get nativeWindow() : Window {
    // return the global native browser window object
    return window;
  }

  scrollTo(destination: HTMLElement, duration = 200, easing = 'linear', callback?) {
    const easings = {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };

    const start = this.nativeWindow.pageYOffset;
    const startTime = 'now' in this.nativeWindow.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(this.document.body.scrollHeight, this.document.body.offsetHeight, this.document.documentElement.clientHeight, this.document.documentElement.scrollHeight, this.document.documentElement.offsetHeight);
    const windowHeight = this.nativeWindow.innerHeight || this.document.documentElement.clientHeight || this.document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in this.nativeWindow === false) {
      this.nativeWindow.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }

    function scroll(windowRef) {
      const now = 'now' in windowRef.performance ? windowRef.performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easings[easing](time);
      windowRef.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

      if (windowRef.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }

      windowRef.requestAnimationFrame(scroll.bind(null, windowRef));
    }

    scroll(this.nativeWindow);
  }
}
