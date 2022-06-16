import * as React from 'react';

const SvgSmallClockHand = (props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    xmlSpace="preserve"
    viewBox="41.9 310.13 28.21 229.33"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M61.86 513.566c12.285-31.355-8.894-63.245-2.311-94.552h-.106c17.167-6.861 6.682-21.938 4.451-32.363-5.326-24.913-6.611-56.168-5.974-75.943-.718-.594-3.709-.909-5.022-.025.207 22.439.677 51.79-4.848 76.746-2.388 10.787-12.566 27.011 4.674 31.859 4.785 31.369-14.475 62.929-2.512 94.248-4.899 2.125-8.317 6.856-8.317 12.36 0 7.492 6.317 13.566 14.107 13.566 7.792 0 14.106-6.074 14.106-13.566.001-5.479-3.382-10.187-8.248-12.33z"
    />
  </svg>
);

export default SvgSmallClockHand;