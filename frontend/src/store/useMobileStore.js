import { create } from 'zustand';

const useMobileStore = create((set, get) => ({
  // Mobile view states
  showChatWindow: false,
  showSettings: false,

  // Actions
  setShowChatWindow: (show) => set({ showChatWindow: show }),
  setShowSettings: (show) => set({ showSettings: show }),
  
  // Mobile navigation functions
  handleOpenChat: () => {
    set({ showChatWindow: true });
  },

  handleBackToSidebar: () => {
    set({ showChatWindow: false });
  },

  handleToggleSettings: () => {
    const { showSettings } = get();
    set({ showSettings: !showSettings });
  },

  // Reset mobile states (useful when switching between desktop/mobile)
  resetMobileStates: () => {
    set({ 
      showChatWindow: false, 
      showSettings: false 
    });
  },

  // Combined actions
  openChatAndCloseSettings: () => {
    set({ 
      showChatWindow: true, 
      showSettings: false 
    });
  },

  closeChatAndSettings: () => {
    set({ 
      showChatWindow: false, 
      showSettings: false 
    });
  },

  // Utility functions for responsive behavior
  isMobileView: () => {
    return window.innerWidth < 768; // md breakpoint
  },

  // Handle window resize and reset states if needed
  handleWindowResize: () => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      // Reset mobile states when switching to desktop
      set({ 
        showChatWindow: false, 
        showSettings: false 
      });
    }
  },

  // Initialize mobile store with window resize listener
  initializeMobileStore: () => {
    const handleResize = () => {
      get().handleWindowResize();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
}));

export default useMobileStore;
