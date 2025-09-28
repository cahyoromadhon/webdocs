import React from 'react';
import { useEffect } from 'react';

export default function Root({children}) {
  useEffect(() => {
    // Suppress MetaMask extension console errors
    const originalError = console.error;
    console.error = (...args) => {
      // Filter out MetaMask-related errors
      const message = args[0]?.toString() || '';
      if (
        message.includes('Cannot destructure property') ||
        message.includes('chrome-extension://') ||
        message.includes('scripts/inpage.js')
      ) {
        return; // Suppress this error
      }
      // Allow other errors through
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError; // Restore original console.error on cleanup
    };
  }, []);

  return <>{children}</>;
}