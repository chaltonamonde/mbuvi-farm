import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderClass = 'border-theme-primary/50 bg-theme-surface text-theme-textPrimary shadow-card';
        let iconColor = 'text-theme-primary';

        if (toast.type === 'error') {
          Icon = AlertCircle;
          borderClass = 'border-theme-error/50 bg-theme-surface text-theme-textPrimary shadow-card';
          iconColor = 'text-theme-error';
        } else if (toast.type === 'info') {
          Icon = Info;
          borderClass = 'border-theme-accent/50 bg-theme-surface text-theme-textPrimary shadow-card';
          iconColor = 'text-theme-accent';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-farm-md border ${borderClass} animate-fade-in transition-all`}
            role="alert"
          >
            <div className="flex items-center gap-3">
              <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
              <p className="text-sm font-medium leading-snug">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-theme-textMuted hover:text-theme-textPrimary p-1 rounded-full transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
