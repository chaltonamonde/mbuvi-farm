import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { deliveryZones } from '../../data/deliveryZones';
import { farmConfig } from '../../data/farmData';
import { 
  X, 
  Check, 
  ChevronRight, 
  Truck, 
  Smartphone, 
  Printer, 
  MessageCircle, 
  ArrowLeft,
} from 'lucide-react';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    totalKES,
    selectedZoneId,
    setSelectedZoneId,
    selectedZone,
    isFreeDeliveryEligible,
    isStandingOrder,
    recordOrder,
    showToast,
  } = useCart();

  const [step, setStep] = useState(1); // 1: Delivery info, 2: Payment, 3: Confirmation
  
  // Step 1 Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    deliveryAddress: '',
    deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    preferredTime: 'Morning Dispatch (7:30 AM – 11:30 AM)',
    landmarks: '',
  });

  // Step 2 Payment State
  const [paymentMethod, setPaymentMethod] = useState('mpesa_stk'); // 'mpesa_stk' | 'deposit' | 'pay_on_delivery'
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [isSimulatingSTK, setIsSimulatingSTK] = useState(false);
  const [stkCountdown, setStkCountdown] = useState(15);
  const [stkSuccess, setStkSuccess] = useState(false);
  
  // Step 3 Placed Order State
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Sync phone from step 1 into MPesa phone
  useEffect(() => {
    if (formData.phone && !mpesaPhone) {
      setMpesaPhone(formData.phone);
    }
  }, [formData.phone]);

  if (!isCheckoutOpen) return null;

  // Handle STK Push Simulation
  const handleTriggerMpesaSTK = () => {
    if (!mpesaPhone || mpesaPhone.length < 9) {
      alert('Please enter a valid Safaricom phone number (e.g. 0712345678 or 254712345678)');
      return;
    }
    setIsSimulatingSTK(true);
    setStkCountdown(12);

    const interval = setInterval(() => {
      setStkCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSimulatingSTK(false);
          setStkSuccess(true);
          showToast('M-Pesa STK payment confirmed by Safaricom!', 'success');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Complete Order placement
  const handleFinalizeOrder = () => {
    const finalOrder = recordOrder({
      totalKES,
      deliveryZoneName: `${selectedZone.name} (${selectedZone.county})`,
      paymentMethod: 
        paymentMethod === 'mpesa_stk'
          ? 'M-Pesa STK Push (Paid)'
          : paymentMethod === 'deposit'
          ? `30% M-Pesa Deposit (KES ${Math.round(totalKES * 0.3).toLocaleString()})`
          : 'Pay on Delivery (Cash/Till)',
      customerName: formData.fullName || 'Valued Farm Customer',
      phone: formData.phone || mpesaPhone || farmConfig.phoneDisplay,
    });

    setConfirmedOrder(finalOrder);
    setStep(3);
    showToast('Your farm order has been queued for morning harvest!', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsAppReceipt = () => {
    if (!confirmedOrder) return;
    const msg = `Hello Mbuvi Farm, I just placed order #${confirmedOrder.id} on your website.\nTotal: KES ${confirmedOrder.totalKES.toLocaleString()}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nDelivery: ${selectedZone.name}\nPayment: ${confirmedOrder.paymentMethod}.\nPlease confirm harvest and dispatch receipt.`;
    window.open(`https://wa.me/${farmConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div 
        onClick={() => {
          if (step !== 3) setIsCheckoutOpen(false);
        }}
        className="fixed inset-0 bg-theme-page/85 backdrop-blur-sm transition-opacity" 
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative bg-theme-surface rounded-farm-lg max-w-2xl w-full text-left overflow-hidden shadow-2xl my-6 border border-theme-border animate-in fade-in zoom-in-95 duration-200 text-theme-textPrimary">
          
          {/* Header */}
          <div className="p-5 border-b border-theme-border bg-theme-section text-theme-textPrimary flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-theme-accent">
                Mbuvi Farm Direct Order
              </span>
              <h3 className="font-display font-extrabold text-xl text-theme-textPrimary">
                {step === 1 && 'Step 1: Delivery & Contact Details'}
                {step === 2 && 'Step 2: Choose Payment Method'}
                {step === 3 && 'Step 3: Order Confirmed & Receipt'}
              </h3>
            </div>

            {step !== 3 && (
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="p-1.5 rounded-full text-theme-textMuted hover:text-theme-textPrimary hover:bg-theme-surface transition-colors"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Progress Steps Indicators */}
          <div className="bg-theme-page/60 border-b border-theme-border px-6 py-3 flex items-center justify-between text-xs font-semibold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-theme-primary font-bold' : 'text-theme-textMuted'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-theme-primary text-[#07130E]' : 'bg-theme-section text-theme-textMuted border border-theme-border'}`}>
                1
              </span>
              <span>Delivery Details</span>
            </div>
            <div className="w-8 h-0.5 bg-theme-border" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-theme-primary font-bold' : 'text-theme-textMuted'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-theme-primary text-[#07130E]' : 'bg-theme-section text-theme-textMuted border border-theme-border'}`}>
                2
              </span>
              <span>Payment Option</span>
            </div>
            <div className="w-8 h-0.5 bg-theme-border" />
            <div className={`flex items-center gap-2 ${step === 3 ? 'text-theme-accent font-bold' : 'text-theme-textMuted'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-theme-accent text-[#07130E]' : 'bg-theme-section text-theme-textMuted border border-theme-border'}`}>
                3
              </span>
              <span>Receipt</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6">
            
            {/* STEP 1: Delivery Details Form */}
            {step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!formData.fullName || !formData.phone || !formData.deliveryAddress) {
                    alert('Please fill in your name, phone number, and delivery address.');
                    return;
                  }
                  setStep(2);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Mutua or Grace N."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="form-label">Safaricom Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0712 345 678 or 2547..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Delivery Zone / County *</label>
                    <select
                      value={selectedZoneId}
                      onChange={(e) => setSelectedZoneId(e.target.value)}
                      className="form-input text-sm font-medium"
                    >
                      {deliveryZones.map((zone) => (
                        <option key={zone.id} value={zone.id} className="bg-theme-surface text-theme-textPrimary">
                          {zone.name} ({zone.county}) — {isFreeDeliveryEligible ? 'FREE' : `KES ${zone.feeKES}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Preferred Delivery Date</label>
                    <input
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      className="form-input text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Delivery Street Address / Estate / Apartment *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. House 4B, Acacia Court, Dennis Pritt Rd, Kilimani"
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    className="form-input text-sm"
                  />
                </div>

                <div>
                  <label className="form-label">Gate Directions / Landmark Notes (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Black gate opposite TotalEnergies, call on arrival"
                    value={formData.landmarks}
                    onChange={(e) => setFormData({ ...formData, landmarks: e.target.value })}
                    className="form-input text-sm"
                  />
                </div>

                {isStandingOrder && (
                  <div className="p-3 bg-theme-section rounded-farm-md border border-theme-accent/40 text-xs text-theme-accent">
                    <p className="font-bold">✓ Recurring Weekly Standing Order Selected</p>
                    <p className="text-theme-textSecondary mt-0.5">
                      We will reserve fresh trays of eggs and greens for you every week on this day.
                    </p>
                  </div>
                )}

                {/* Subtotal preview */}
                <div className="p-4 rounded-farm-md bg-theme-section border border-theme-border flex items-center justify-between text-sm">
                  <div>
                    <span className="text-theme-textMuted block text-xs">Total to Pay:</span>
                    <span className="font-display font-extrabold text-xl text-theme-primary font-mono">
                      KES {totalKES.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-theme-accent font-semibold">
                    {cartItems.length} items • {selectedZone.name}
                  </span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button type="submit" className="btn-primary w-full sm:w-auto text-sm py-3 px-8 flex items-center justify-center gap-2">
                    <span>Continue to Payment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Payment Method */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="form-label">Select Payment Method:</label>

                  {/* Method A: M-Pesa STK Push */}
                  <div
                    onClick={() => setPaymentMethod('mpesa_stk')}
                    className={`p-4 rounded-farm-md border cursor-pointer transition-all ${
                      paymentMethod === 'mpesa_stk'
                        ? 'border-theme-primary bg-theme-section shadow-glow ring-1 ring-theme-primary'
                        : 'border-theme-border hover:border-theme-accent/50 bg-theme-section'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#1FAF38] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                          M
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-theme-textPrimary">
                            Lipa na M-Pesa (Online STK Push)
                          </h4>
                          <p className="text-xs text-theme-textSecondary">
                            Receive an instant Safaricom PIN prompt directly on your handset
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-theme-primary">Instant</span>
                    </div>

                    {paymentMethod === 'mpesa_stk' && (
                      <div className="mt-4 pt-3 border-t border-theme-border space-y-3">
                        <label className="block text-xs font-semibold text-theme-textSecondary">
                          M-Pesa Number for STK Push:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="tel"
                            value={mpesaPhone}
                            onChange={(e) => setMpesaPhone(e.target.value)}
                            placeholder="07XX XXX XXX or 2547..."
                            className="form-input text-sm flex-1"
                          />
                          <button
                            type="button"
                            onClick={handleTriggerMpesaSTK}
                            disabled={isSimulatingSTK || stkSuccess}
                            className="btn-primary text-xs px-4 py-2"
                          >
                            {isSimulatingSTK ? 'Prompting...' : stkSuccess ? '✓ Approved' : 'Send Push'}
                          </button>
                        </div>

                        {/* STK Countdown Simulation Card */}
                        {isSimulatingSTK && (
                          <div className="p-3 bg-theme-surface rounded border border-theme-accent/50 shadow-sm animate-pulse flex items-center gap-3">
                            <Smartphone className="w-6 h-6 text-theme-accent animate-bounce" />
                            <div className="text-xs">
                              <p className="font-bold text-theme-accent">
                                Check phone: Enter PIN on prompt ({stkCountdown}s remaining)...
                              </p>
                              <p className="text-[11px] text-theme-textMuted">
                                Sending KES {totalKES.toLocaleString()} to Mbuvi Farm {farmConfig.mpesaTillNumber}
                              </p>
                            </div>
                          </div>
                        )}

                        {stkSuccess && (
                          <div className="p-3 bg-theme-surface rounded border border-theme-primary/50 flex items-center gap-2 text-xs text-theme-primary">
                            <Check className="w-5 h-5 text-theme-primary shrink-0" />
                            <div>
                              <p className="font-bold">M-Pesa Payment Received & Verified!</p>
                              <p className="text-[11px] text-theme-textSecondary">Transaction ID: QK{Math.floor(10000000 + Math.random() * 90000000)} • KES {totalKES.toLocaleString()}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Method B: 30% Pre-Order Deposit */}
                  <div
                    onClick={() => setPaymentMethod('deposit')}
                    className={`p-4 rounded-farm-md border cursor-pointer transition-all ${
                      paymentMethod === 'deposit'
                        ? 'border-theme-accent bg-theme-section shadow-skyGlow ring-1 ring-theme-accent'
                        : 'border-theme-border hover:border-theme-accent/50 bg-theme-section'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-theme-accent text-[#07130E] flex items-center justify-center font-bold text-xs shadow-sm">
                          30%
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-theme-textPrimary">
                            30% Reservation Deposit (Pre-Orders)
                          </h4>
                          <p className="text-xs text-theme-textSecondary">
                            Pay KES {Math.round(totalKES * 0.3).toLocaleString()} now; balance payable on delivery
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-theme-accent">Recommended for Turkeys/Bulk</span>
                    </div>
                  </div>

                  {/* Method C: Pay on Delivery */}
                  <div
                    onClick={() => setPaymentMethod('pay_on_delivery')}
                    className={`p-4 rounded-farm-md border cursor-pointer transition-all ${
                      paymentMethod === 'pay_on_delivery'
                        ? 'border-theme-primary bg-theme-section shadow-glow ring-1 ring-theme-primary'
                        : 'border-theme-border hover:border-theme-accent/50 bg-theme-section'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-theme-surface text-theme-primary border border-theme-primary/40 flex items-center justify-center font-bold text-xs shadow-sm">
                          <Truck className="w-4 h-4 text-theme-primary" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-theme-textPrimary">
                            Pay on Delivery (Inspect First)
                          </h4>
                          <p className="text-xs text-theme-textSecondary">
                            Pay via M-Pesa Till or Cash after checking egg quality and vegetable freshness
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-theme-primary">Zero Risk</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center justify-between border-t border-theme-border">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleFinalizeOrder}
                    className="btn-primary text-sm py-3 px-8 flex items-center gap-2"
                  >
                    <span>Confirm & Place Order</span>
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Order Confirmation & Receipt */}
            {step === 3 && confirmedOrder && (
              <div className="space-y-6">
                {/* Success Banner */}
                <div className="text-center p-6 rounded-farm-md bg-theme-section border border-theme-border">
                  <div className="w-14 h-14 bg-theme-primary text-[#07130E] rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="font-display font-black text-xl text-theme-textPrimary">
                    Order Received by Mbuvi Farm!
                  </h3>
                  <p className="text-xs text-theme-textSecondary mt-1 max-w-md mx-auto">
                    Your produce has been scheduled for morning harvest at 5:30 AM and dispatch to your address.
                  </p>
                  <div className="inline-block mt-3 px-3 py-1 bg-theme-surface rounded-full border border-theme-accent/40 text-xs font-mono font-bold text-theme-accent">
                    Order Reference: #{confirmedOrder.id}
                  </div>
                </div>

                {/* Printable Receipt Block */}
                <div className="p-4 rounded-farm-md bg-theme-section border border-theme-border text-xs space-y-3">
                  <div className="flex justify-between border-b border-theme-border pb-2">
                    <span className="text-theme-textMuted">Customer:</span>
                    <span className="font-bold text-theme-textPrimary">{formData.fullName} ({formData.phone})</span>
                  </div>
                  <div className="flex justify-between border-b border-theme-border pb-2">
                    <span className="text-theme-textMuted">Destination:</span>
                    <span className="font-semibold text-theme-textSecondary">{formData.deliveryAddress}, {selectedZone.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-theme-border pb-2">
                    <span className="text-theme-textMuted">Delivery Date:</span>
                    <span className="font-semibold text-theme-textSecondary">{formData.deliveryDate} ({formData.preferredTime})</span>
                  </div>
                  <div className="flex justify-between border-b border-theme-border pb-2">
                    <span className="text-theme-textMuted">Payment Method:</span>
                    <span className="font-bold text-theme-primary">{confirmedOrder.paymentMethod}</span>
                  </div>

                  {/* Items List */}
                  <div className="pt-2">
                    <span className="font-bold text-theme-accent uppercase tracking-wider block mb-2 text-[11px]">
                      Items to Harvest:
                    </span>
                    <ul className="space-y-1.5">
                      {confirmedOrder.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between text-theme-textSecondary">
                          <span>{item.quantity}x {item.name}</span>
                          <span className="font-mono text-theme-textPrimary font-semibold">
                            KES {(item.priceKES * item.quantity).toLocaleString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-theme-border flex justify-between text-sm font-bold text-theme-textPrimary">
                    <span>Total Amount:</span>
                    <span className="font-mono text-theme-primary">KES {confirmedOrder.totalKES.toLocaleString()}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handleShareWhatsAppReceipt}
                    className="btn-secondary py-3 text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-theme-accent" />
                    <span>Send Receipt to Farm WhatsApp</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="btn-secondary py-3 text-xs flex items-center justify-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Official Receipt</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      setStep(1);
                    }}
                    className="text-xs text-theme-accent font-bold hover:underline"
                  >
                    Close & Return to Farm Shop
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
