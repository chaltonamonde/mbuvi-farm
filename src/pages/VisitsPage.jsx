import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { farmConfig } from '../data/farmData';
import { 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Send, 
  Smartphone
} from 'lucide-react';

export default function VisitsPage() {
  const { showToast } = useCart();
  const [selectedWorkshop, setSelectedWorkshop] = useState('poultry-masterclass');
  const [attendees, setAttendees] = useState(1);
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [depositPaid, setDepositPaid] = useState(false);
  const [isPrompting, setIsPrompting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const workshops = [
    {
      id: 'poultry-masterclass',
      title: 'Commercial Kienyeji Poultry & Flock Health Masterclass',
      priceKES: 2500,
      duration: 'Full Day (8:30 AM – 3:30 PM)',
      schedule: 'Every 2nd & 4th Saturday of the Month',
      desc: 'Hands-on training covering pasture runs, chick brooding, zero-chemical disease prevention, organic feed ration formulating, and vaccination hygiene.',
      includes: ['Comprehensive poultry handbook', 'Practical pen demonstration', 'Farm-fresh lunch & refreshments', 'Post-training WhatsApp advisory group access'],
    },
    {
      id: 'drip-irrigation',
      title: 'Precision Drip Irrigation & Solar Pumping Workshop',
      priceKES: 2000,
      duration: 'Half Day (8:30 AM – 1:00 PM)',
      schedule: 'Scheduled 1st Saturday of the Month',
      desc: 'Learn gravity drip layout, solar pump sizing, soil preparation with compost manure, and vegetable pest monitoring under dryland conditions.',
      includes: ['Drip layout blueprint & bill of quantities', 'Hands-on filter and emitter maintenance', 'Organic compost preparation guide'],
    },
    {
      id: 'family-tour',
      title: 'Family & Educational Farm Tour',
      priceKES: 500,
      duration: '2 Hours (9:30 AM – 11:30 AM)',
      schedule: 'Every Saturday Morning',
      desc: 'Guided tour for families and children to see free-range chickens, feed hens, inspect beehives from a safe distance, and harvest fresh greens.',
      includes: ['Guided walking tour', 'Free complimentary 1kg sukuma bundle to take home', 'Chilled borehole drinking water'],
    },
  ];

  const currentW = workshops.find(w => w.id === selectedWorkshop) || workshops[0];
  const totalCost = currentW.priceKES * attendees;
  const depositAmount = Math.round(totalCost * 0.5); // 50% commitment deposit

  const handleSimulateDeposit = () => {
    if (!phone || phone.length < 9) {
      alert('Please enter a valid Safaricom phone number to trigger the M-Pesa deposit prompt.');
      return;
    }
    setIsPrompting(true);
    setTimeout(() => {
      setIsPrompting(false);
      setDepositPaid(true);
      showToast('Deposit received! Your workshop slot is reserved.', 'success');
    }, 3000);
  };

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    if (!depositPaid) {
      alert('Please pay the 50% reservation deposit to secure your training seat.');
      return;
    }
    const ref = `TRN-MBV-${Math.floor(100 + Math.random() * 900)}`;
    setBookingRef(ref);
    setBookingConfirmed(true);
    showToast(`Farm training reservation #${ref} confirmed!`, 'success');
  };

  return (
    <div className="py-12 bg-theme-page min-h-screen text-theme-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner */}
        <div className="bg-theme-surface rounded-farm-lg p-8 sm:p-12 border border-theme-border shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-primary/15 text-theme-primary text-xs font-bold border border-theme-primary/30">
              <BookOpen className="w-3.5 h-3.5 text-theme-primary" />
              <span>Agribusiness Knowledge & Hands-on Field Experience</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-theme-textPrimary">
              Farm Visits & Practical Agribusiness Training
            </h1>
            <p className="text-xs sm:text-sm text-theme-textSecondary leading-relaxed">
              Step into our working fields along the Kangundo corridor. Learn real, profitable poultry husbandry and dryland horticulture from practicing farmers with zero fluff.
            </p>
          </div>

          <div className="p-5 rounded-farm-md bg-theme-section border border-theme-border shrink-0 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-theme-textPrimary">
              <MapPin className="w-4 h-4 text-theme-primary" />
              <span>Farm Visit Location</span>
            </div>
            <p className="text-theme-textSecondary max-w-xs">
              {farmConfig.physicalAddress}. Directions and pin provided upon booking confirmation.
            </p>
            <p className="text-[11px] text-amber-300 font-semibold bg-amber-950/40 p-2 rounded border border-amber-500/40">
              Biosecurity: Strict foot-bath and sanitation protocols applied at farm gate.
            </p>
          </div>
        </div>

        {/* 3 Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((w) => {
            const isSelected = selectedWorkshop === w.id;
            return (
              <div
                key={w.id}
                onClick={() => setSelectedWorkshop(w.id)}
                className={`farm-card p-6 cursor-pointer flex flex-col justify-between transition-all bg-theme-surface border ${
                  isSelected
                    ? 'border-theme-primary ring-1 ring-theme-primary shadow-glow'
                    : 'border-theme-border hover:border-theme-accent/50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                      {w.schedule}
                    </span>
                    {isSelected && (
                      <span className="badge-instock text-[10px]">
                        ✓ Selected
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg text-theme-textPrimary mb-2 leading-snug">
                    {w.title}
                  </h3>

                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-xs font-bold text-theme-textMuted">KES</span>
                    <span className="font-display font-black text-2xl text-theme-primary font-mono">
                      {w.priceKES.toLocaleString()}
                    </span>
                    <span className="text-xs text-theme-textSecondary ml-1">/ person</span>
                  </div>

                  <p className="text-xs text-theme-textSecondary leading-relaxed mb-4">
                    {w.desc}
                  </p>

                  <div className="space-y-1.5 border-t border-theme-border pt-3">
                    <span className="text-[11px] font-bold text-theme-accent uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {w.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-theme-textPrimary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-primary shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    className={`w-full py-2.5 text-xs font-bold rounded-farm-md transition-all ${
                      isSelected
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {isSelected ? 'Proceed to Book Below' : 'Select This Training'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking Form with Deposit UI */}
        <div className="bg-theme-surface rounded-farm-lg border border-theme-border p-6 sm:p-10 shadow-card">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display font-extrabold text-2xl text-theme-textPrimary">
              Reserve Your Place for: {currentW.title}
            </h2>
            <p className="text-xs sm:text-sm text-theme-textSecondary mt-1">
              To guarantee individual attention, classes are capped at 15 attendees per session. A 50% M-Pesa deposit reserves your slot.
            </p>
          </div>

          {!bookingConfirmed ? (
            <form onSubmit={handleCompleteBooking} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dennis Muasya"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="form-label">Safaricom Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="07XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="form-label">Number of Attendees</label>
                  <select
                    value={attendees}
                    onChange={(e) => setAttendees(parseInt(e.target.value))}
                    className="form-input text-xs font-medium"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num} className="bg-theme-surface">{num} Person{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Deposit Payment UI Block */}
              <div className="p-5 rounded-farm-md bg-theme-section border border-theme-border space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-theme-border">
                  <div>
                    <span className="text-xs text-theme-textMuted block">Total Fee for {attendees} attendee(s):</span>
                    <span className="font-display font-bold text-base text-theme-textPrimary font-mono">
                      KES {totalCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-bold text-theme-textSecondary block">Required 50% Commitment Deposit:</span>
                    <span className="font-display font-black text-xl text-theme-accent font-mono">
                      KES {depositAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex-1">
                    <p className="text-xs text-theme-textSecondary">
                      Pay the deposit via instant Safaricom STK Push to our farm till:
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulateDeposit}
                    disabled={isPrompting || depositPaid}
                    className="btn-primary text-xs py-2.5 px-5 flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>
                      {isPrompting
                        ? 'Sending M-Pesa Prompt...'
                        : depositPaid
                        ? '✓ Deposit KES ' + depositAmount.toLocaleString() + ' Paid'
                        : 'Trigger M-Pesa STK Deposit'}
                    </span>
                  </button>
                </div>

                {depositPaid && (
                  <div className="p-3 bg-theme-surface rounded text-xs text-theme-primary border border-theme-primary/40 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-theme-primary shrink-0" />
                    <span>Deposit verified via Safaricom! You may now finalize your booking ticket.</span>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!depositPaid}
                  className={`btn-primary text-xs sm:text-sm py-3 px-8 flex items-center gap-2 ${
                    !depositPaid ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Training Registration</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 rounded-farm-lg bg-theme-section border border-theme-primary/40 text-center space-y-4">
              <div className="w-16 h-16 bg-theme-primary text-[#07130E] rounded-full flex items-center justify-center mx-auto shadow-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-theme-textPrimary">
                Training Ticket Confirmed: #{bookingRef}
              </h3>
              <p className="text-xs sm:text-sm text-theme-textSecondary max-w-lg mx-auto">
                Thank you, {fullName}! Your seat for the <strong>{currentW.title}</strong> has been confirmed. A WhatsApp reminder with exact farm gate GPS coordinates and gate pass code has been queued for {phone}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
