"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { SEVAS, DONATION_CAUSES, GOTRAS, NAKSHATRAS, RASIS, PRASADAM_POSTAGE, type Seva } from "@/lib/data";

/* ── types ── */
type Booking = {
  id: string;
  kind: "seva" | "donation";
  itemName: string;
  itemNameTe: string;
  date: string;
  slot: string;
  persons: number;
  devotee: string;
  gotram: string;
  nakshatra: string;
  rasi: string;
  phone: string;
  email: string;
  amount: number;
  payMethod: string;
  createdAt: string;
  packs?: number;
  postage?: number;
  address?: string;
};

const LS_KEY = "bmd_bookings";
const SLOTS = ["Morning · 6–10 AM", "Morning · 10–12 PM", "Evening · 4:30–6:30 PM", "Evening · 6:30–8:00 PM"];
const STEPS = ["Choose", "Date & Details", "Review & Pay", "Ticket"];

function newId() {
  return "BMD-" + Date.now().toString(36).toUpperCase().slice(-5) + Math.random().toString(36).toUpperCase().slice(2, 5);
}
const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
const todayStr = () => new Date().toISOString().slice(0, 10);

export default function BookingWizard() {
  const params = useSearchParams();
  const [tab, setTab] = useState<"new" | "mine">("new");
  const [kind, setKind] = useState<"seva" | "donation">("seva");
  const [step, setStep] = useState(0);
  const [done, setDone] = useState<Booking | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [processing, setProcessing] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  /* form state */
  const [seva, setSeva] = useState<Seva | null>(null);
  const [cause, setCause] = useState<(typeof DONATION_CAUSES)[number] | null>(null);
  const [amount, setAmount] = useState(5016);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(SLOTS[0]);
  const [persons, setPersons] = useState(2);
  const [devotee, setDevotee] = useState("");
  const [gotram, setGotram] = useState("");
  const [nakshatra, setNakshatra] = useState("");
  const [rasi, setRasi] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [payMethod, setPayMethod] = useState("UPI");
  const [packs, setPacks] = useState(1);
  const [addr, setAddr] = useState("");
  const [addr2, setAddr2] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [stateName, setStateName] = useState("Andhra Pradesh");
  const [pin, setPin] = useState("");
  const [errs, setErrs] = useState<Record<string, string>>({});

  /* init from URL */
  useEffect(() => {
    const s = params.get("seva");
    const c = params.get("cause");
    if (params.get("tab") === "mybookings") setTab("mine");
    if (params.get("type") === "donation" || c) setKind("donation");
    if (s) {
      const found = SEVAS.find((x) => x.id === s);
      if (found) { setSeva(found); setAmount(found.price); }
    }
    if (c) {
      const found = DONATION_CAUSES.find((x) => x.id === c);
      if (found) { setCause(found); setAmount(found.suggested[0]); }
    }
    try { setBookings(JSON.parse(localStorage.getItem(LS_KEY) || "[]")); } catch { /* noop */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isPrasadam = kind === "seva" && seva?.category === "prasadam";
  const fullAddr = isPrasadam
    ? [addr.trim(), addr2.trim(), village.trim(), district.trim(), stateName.trim(), pin.trim()].filter(Boolean).join(", ")
    : "";
  const total = kind === "seva"
    ? (isPrasadam
      ? (seva?.price ?? 0) * packs + PRASADAM_POSTAGE
      : seva?.category === "darshan" ? (seva?.price ?? 0) * persons : seva?.price ?? 0)
    : amount;

  const save = (b: Booking) => {
    const next = [b, ...bookings];
    setBookings(next);
    localStorage.setItem(LS_KEY, JSON.stringify(next));
  };

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const validateDetails = () => {
    const e: Record<string, string> = {};
    if (isPrasadam) {
      if (!addr.trim()) e.addr = "Delivery address is required";
      if (!village.trim()) e.village = "Village / town is required";
      if (!district.trim()) e.district = "District is required";
      if (!stateName.trim()) e.stateName = "State is required";
      if (!/^\d{6}$/.test(pin)) e.pin = "Enter a valid 6-digit PIN code";
    } else {
      if (kind === "seva" && !date) e.date = "Choose a date for the seva";
      if (kind === "seva" && date && date < todayStr()) e.date = "Date cannot be in the past";
      if (!gotram) e.gotram = "Select a gotram (choose 'Other' if unsure)";
    }
    if (!devotee.trim()) e.devotee = isPrasadam ? "Recipient name is required" : "Devotee name is required";
    if (!phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter a valid 10-digit mobile number";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (kind === "donation" && amount < 51) e.amount = "Minimum donation is ₹51";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const confirm = () => {
    setProcessing(true);
    setTimeout(() => {
      const b: Booking = {
        id: newId(),
        kind,
        itemName: kind === "seva" ? seva!.name : cause!.name,
        itemNameTe: kind === "seva" ? seva!.nameTe : cause!.nameTe,
        date: kind === "seva" ? (isPrasadam ? "Dispatch in 3–5 days" : date) : todayStr(),
        slot: kind === "seva" ? (isPrasadam ? "By post" : slot) : "—",
        persons: isPrasadam ? packs : persons,
        devotee: devotee.trim(),
        gotram, nakshatra, rasi, phone,
        email,
        amount: total,
        ...(isPrasadam ? { packs, postage: PRASADAM_POSTAGE, address: fullAddr } : {}),
        payMethod: total === 0 ? "Free" : `${payMethod} (demo)`,
        createdAt: new Date().toLocaleString("en-IN"),
      };
      save(b);
      setDone(b);
      setProcessing(false);
      setStep(3);
      scrollTop();
    }, 1400);
  };

  const go = (next: number) => {
    if (next === 2 && !validateDetails()) { scrollTop(); return; }
    setStep(next); scrollTop();
  };

  const reset = () => {
    setStep(0); setDone(null); setSeva(null); setCause(null);
    setDate(""); setDevotee(""); setGotram(""); setNakshatra(""); setRasi("");
    setPhone(""); setEmail(""); setPersons(2); setErrs({});
  };

  const canContinueStep1 = kind === "seva" ? !!seva : !!cause;

  return (
    <div className="wizard" ref={topRef}>
      {/* tabs */}
      <div className="chips">
        <button className={`chip ${tab === "new" ? "on" : ""}`} onClick={() => setTab("new")}>New Booking</button>
        <button className={`chip ${tab === "mine" ? "on" : ""}`} onClick={() => setTab("mine")}>My Bookings {bookings.length > 0 && `(${bookings.length})`}</button>
      </div>

      {tab === "mine" ? (
        <MyBookings bookings={bookings} />
      ) : done ? (
        <TicketView b={done} onNew={reset} />
      ) : (
        <>
          <div className="wizard__steps" aria-label="Booking progress">
            {STEPS.map((s, i) => (
              <div key={s} className={`wstep ${i === step ? "on" : ""} ${i < step ? "done" : ""}`}>
                <span className="n">{i < step ? "✓" : i + 1}</span> {s}
                {i < STEPS.length - 1 && <span className="bar" />}
              </div>
            ))}
          </div>

          <div className="panel wizard__panel">
            {step === 0 && (
              <>
                <div className="chips" style={{ marginBottom: "1.4rem" }}>
                  <button className={`chip ${kind === "seva" ? "on" : ""}`} onClick={() => { setKind("seva"); setCause(null); }}>Book a Seva / Darshan</button>
                  <button className={`chip ${kind === "donation" ? "on" : ""}`} onClick={() => { setKind("donation"); setSeva(null); }}>Make a Donation</button>
                </div>

                {kind === "seva" ? (
                  <div className="pick-grid">
                    {SEVAS.map((s) => (
                      <button key={s.id} className={`pick ${seva?.id === s.id ? "on" : ""}`} onClick={() => setSeva(s)}>
                        <img src={s.image} alt="" loading="lazy" />
                        <span>
                          <b>{s.name}</b>
                          <span className="te">{s.nameTe} · {s.when}</span>
                        </span>
                        <span className="p">{s.price === 0 ? "Free" : inr(s.price)}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="pick-grid">
                    {DONATION_CAUSES.map((c) => (
                      <button key={c.id} className={`pick ${cause?.id === c.id ? "on" : ""}`} onClick={() => { setCause(c); setAmount(c.suggested[0]); }}>
                        <img src={c.image} alt="" loading="lazy" />
                        <span>
                          <b>{c.name}</b>
                          <span className="te">{c.nameTe}</span>
                        </span>
                        <span className="p">from {inr(c.min)}</span>
                      </button>
                    ))}
                  </div>
                )}

                {kind === "donation" && cause && (
                  <div className="field mt-2" style={{ maxWidth: 320 }}>
                    <label>Donation amount <span className="req">*</span></label>
                    <div className="pill-row" style={{ marginBottom: ".5rem" }}>
                      {cause.suggested.map((a) => (
                        <button key={a} type="button" className={`chip ${amount === a ? "on" : ""}`} onClick={() => setAmount(a)}>{inr(a)}</button>
                      ))}
                    </div>
                    <input
                      type="number" min={cause.min}
                      value={amount}
                      className={errs.amount ? "invalid" : ""}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    {errs.amount && <span className="err">{errs.amount}</span>}
                  </div>
                )}

                <div className="wizard__nav">
                  <span />
                  <button className="btn" disabled={!canContinueStep1} onClick={() => go(1)}>Continue</button>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div className="form-grid">
                  {kind === "seva" && !isPrasadam && (
                    <>
                      <div className="field">
                        <label>Seva date <span className="req">*</span></label>
                        <input type="date" min={todayStr()} value={date} className={errs.date ? "invalid" : ""} onChange={(e) => setDate(e.target.value)} />
                        {errs.date && <span className="err">{errs.date}</span>}
                      </div>
                      <div className="field">
                        <label>Preferred time slot</label>
                        <div className="slot-row">
                          {SLOTS.map((s) => (
                            <button key={s} type="button" className={`slot ${slot === s ? "on" : ""}`} onClick={() => setSlot(s)}>{s}</button>
                          ))}
                        </div>
                      </div>
                      <div className="field">
                        <label>{seva?.category === "darshan" ? "Number of persons" : "Family members attending"}</label>
                        <div className="qty">
                          <button type="button" onClick={() => setPersons((p) => Math.max(1, p - 1))} aria-label="decrease">−</button>
                          <b>{persons}</b>
                          <button type="button" onClick={() => setPersons((p) => Math.min(20, p + 1))} aria-label="increase">+</button>
                        </div>
                      </div>
                    </>
                  )}

                  {isPrasadam && (
                    <>
                      <div className="field">
                        <label>Number of packs</label>
                        <div className="qty">
                          <button type="button" onClick={() => setPacks((p) => Math.max(1, p - 1))} aria-label="decrease">−</button>
                          <b>{packs}</b>
                          <button type="button" onClick={() => setPacks((p) => Math.min(20, p + 1))} aria-label="increase">+</button>
                        </div>
                      </div>
                      <div className="field" style={{ gridColumn: "1 / -1" }}>
                        <label>Delivery address (house / street) <span className="req">*</span></label>
                        <input value={addr} className={errs.addr ? "invalid" : ""} onChange={(e) => setAddr(e.target.value)} placeholder="Door no., street, area" />
                        {errs.addr && <span className="err">{errs.addr}</span>}
                      </div>
                      <div className="field">
                        <label>Landmark</label>
                        <input value={addr2} onChange={(e) => setAddr2(e.target.value)} placeholder="optional" />
                      </div>
                      <div className="field">
                        <label>Village / Town <span className="req">*</span></label>
                        <input value={village} className={errs.village ? "invalid" : ""} onChange={(e) => setVillage(e.target.value)} />
                        {errs.village && <span className="err">{errs.village}</span>}
                      </div>
                      <div className="field">
                        <label>District <span className="req">*</span></label>
                        <input value={district} className={errs.district ? "invalid" : ""} onChange={(e) => setDistrict(e.target.value)} />
                        {errs.district && <span className="err">{errs.district}</span>}
                      </div>
                      <div className="field">
                        <label>State <span className="req">*</span></label>
                        <input value={stateName} className={errs.stateName ? "invalid" : ""} onChange={(e) => setStateName(e.target.value)} />
                        {errs.stateName && <span className="err">{errs.stateName}</span>}
                      </div>
                      <div className="field">
                        <label>PIN code <span className="req">*</span></label>
                        <input inputMode="numeric" maxLength={6} value={pin} className={errs.pin ? "invalid" : ""} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} placeholder="6-digit PIN" />
                        {errs.pin && <span className="err">{errs.pin}</span>}
                      </div>
                    </>
                  )}

                  <div className="field">
                    <label>{isPrasadam ? "Recipient name" : "Devotee name (for sankalpam)"} <span className="req">*</span></label>
                    <input value={devotee} className={errs.devotee ? "invalid" : ""} onChange={(e) => setDevotee(e.target.value)} placeholder="e.g. Venkata Ramana Sharma" />
                    {errs.devotee && <span className="err">{errs.devotee}</span>}
                  </div>
                  {!isPrasadam && (
                    <>
                      <div className="field">
                        <label>Gotram <span className="req">*</span></label>
                        <select value={gotram} className={errs.gotram ? "invalid" : ""} onChange={(e) => setGotram(e.target.value)}>
                          <option value="">Select gotram</option>
                          {GOTRAS.map((g) => <option key={g}>{g}</option>)}
                        </select>
                        {errs.gotram && <span className="err">{errs.gotram}</span>}
                      </div>
                      <div className="field">
                        <label>Nakshatram</label>
                        <select value={nakshatra} onChange={(e) => setNakshatra(e.target.value)}>
                          <option value="">Select nakshatram (optional)</option>
                          {NAKSHATRAS.map((n) => <option key={n}>{n}</option>)}
                        </select>
                      </div>
                      <div className="field">
                        <label>Rasi</label>
                        <select value={rasi} onChange={(e) => setRasi(e.target.value)}>
                          <option value="">Select rasi (optional)</option>
                          {RASIS.map((r) => <option key={r}>{r}</option>)}
                        </select>
                      </div>
                    </>
                  )}
                  <div className="field">
                    <label>Mobile number <span className="req">*</span></label>
                    <input inputMode="numeric" maxLength={10} value={phone} className={errs.phone ? "invalid" : ""} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} placeholder="10-digit mobile" />
                    {errs.phone && <span className="err">{errs.phone}</span>}
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" value={email} className={errs.email ? "invalid" : ""} onChange={(e) => setEmail(e.target.value)} placeholder="for the e-receipt (optional)" />
                    {errs.email && <span className="err">{errs.email}</span>}
                  </div>
                </div>

                <div className="notice mt-2">
                  {isPrasadam
                    ? <div><b>Postal prasadam:</b> Ammavari prasadam is freshly prepared, packed and sent by post to the address above — typically delivered within 3–5 working days. Packing & postage of {inr(PRASADAM_POSTAGE)} is added at checkout.</div>
                    : <div><b>Sankalpam:</b> the seva will be performed in the name and gotram given above. Please double-check spelling.</div>}
                </div>

                <div className="wizard__nav">
                  <button className="btn btn--line" onClick={() => go(0)}>Back</button>
                  <button className="btn" onClick={() => go(2)}>Review booking</button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="review">
                  <table>
                    <tbody>
                      <tr><td>{kind === "seva" ? (isPrasadam ? "Prasadam" : "Seva") : "Donation"}</td><td>{kind === "seva" ? seva!.name : cause!.name} <span className="telugu" style={{ fontWeight: 400, color: "var(--ink-soft)" }}>({kind === "seva" ? seva!.nameTe : cause!.nameTe})</span></td></tr>
                      {kind === "seva" && !isPrasadam && <tr><td>Date & slot</td><td>{date || "—"} · {slot}</td></tr>}
                      {isPrasadam && <tr><td>Packs</td><td>{packs} × {inr(seva!.price)}</td></tr>}
                      <tr><td>{isPrasadam ? "Recipient" : "Devotee (sankalpam)"}</td><td>{devotee}{gotram ? ` · ${gotram} gotram` : ""}{nakshatra ? ` · ${nakshatra}` : ""}</td></tr>
                      {kind === "seva" && !isPrasadam && <tr><td>Persons</td><td>{persons}</td></tr>}
                      {isPrasadam && <tr><td>Deliver to</td><td>{fullAddr}</td></tr>}
                      <tr><td>Contact</td><td>{phone}{email ? ` · ${email}` : ""}</td></tr>
                      {isPrasadam && <tr><td>Packing & postage</td><td>{inr(PRASADAM_POSTAGE)}</td></tr>}
                      <tr className="total"><td>Total payable</td><td>{total === 0 ? "Free" : inr(total)}</td></tr>
                    </tbody>
                  </table>
                </div>

                {total > 0 && (
                  <>
                    <h3 className="sub-title mt-2" style={{ fontSize: "1.2rem" }}>Payment method</h3>
                    <div className="pay-opts mt-1">
                      {["UPI", "Card", "NetBanking"].map((m) => (
                        <button key={m} type="button" className={`pay-opt ${payMethod === m ? "on" : ""}`} onClick={() => setPayMethod(m)}>
                          {m}<small>{m === "UPI" ? "GPay / PhonePe / Paytm" : m === "Card" ? "Credit / Debit" : "All major banks"}</small>
                        </button>
                      ))}
                    </div>
                    <div className="notice mt-2">
                      <div><b>Demo checkout:</b> this website is a preview — payment is simulated and no money is charged. A real gateway (Razorpay / PayU / bank PG) will be integrated on launch.</div>
                    </div>
                  </>
                )}

                <div className="wizard__nav">
                  <button className="btn btn--line" onClick={() => go(1)} disabled={processing}>Back</button>
                  <button className="btn" onClick={confirm} disabled={processing}>
                    {processing ? <><span className="spinner" /> Processing…</> : total === 0 ? "Confirm booking" : `Pay ${inr(total)}`}
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

/* ── barcode strip from booking id ── */
function Barcode({ id }: { id: string }) {
  const bars = useMemo(() => {
    let h = 0;
    for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const arr: number[] = [];
    for (let i = 0; i < 36; i++) {
      h = (h * 1103515245 + 12345) >>> 0;
      arr.push((h >> 16) % 4);
    }
    return arr;
  }, [id]);
  return (
    <div className="barcode" aria-hidden="true">
      {bars.map((w, i) => <i key={i} className={w === 2 ? "w3" : w === 3 ? "w4" : ""} />)}
    </div>
  );
}

function TicketView({ b, onNew }: { b: Booking; onNew?: () => void }) {
  return (
    <>
      <div className="ticket">
        <div className="ticket__head">
          <div className="telugu">శ్రీ బగళాముఖి దేవి (బండ్లమ్మ) దేవస్థానము</div>
          <b>{b.kind === "seva" ? "Seva Booking Confirmed" : "Donation Receipt"}</b>
          <div style={{ fontSize: ".85rem", opacity: .8 }}>Chandole · Bapatla Dt · Andhra Pradesh</div>
        </div>
        <div className="ticket__body">
          <table>
            <tbody>
              <tr><td>Booking ID</td><td><span className="booking-id">{b.id}</span></td></tr>
              <tr><td>{b.kind === "seva" ? "Seva" : "Towards"}</td><td>{b.itemName}</td></tr>
              {b.kind === "seva" && !b.address && <tr><td>Date · Slot</td><td>{b.date} · {b.slot}</td></tr>}
              {b.packs && <tr><td>Packs</td><td>{b.packs}</td></tr>}
              <tr><td>{b.address ? "Recipient" : "Devotee"}</td><td>{b.devotee}{b.gotram ? ` · ${b.gotram}` : ""}</td></tr>
              {b.kind === "seva" && !b.address && <tr><td>Persons</td><td>{b.persons}</td></tr>}
              {b.address && <tr><td>Deliver to</td><td>{b.address}</td></tr>}
              {b.postage != null && <tr><td>Packing & postage</td><td>{inr(b.postage)}</td></tr>}
              <tr><td>Amount</td><td>{b.amount === 0 ? "Free" : inr(b.amount)}</td></tr>
              <tr><td>Payment</td><td>{b.payMethod}</td></tr>
              <tr><td>Booked on</td><td>{b.createdAt}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="ticket__tear" />
        <div className="ticket__foot">
          <Barcode id={b.id} />
          <div className="booking-id">{b.id}</div>
          <small className="muted">{b.address ? "Prasadam will be dispatched by post within 3–5 working days" : "Show this ticket at the devastanam counter"} · శ్రీ బగళాముఖ్యై నమః</small>
        </div>
      </div>
      <div className="flex center-x mt-3 wrap">
        <button className="btn" onClick={() => window.print()}>Print ticket</button>
        {onNew && <button className="btn btn--line" onClick={onNew}>New booking</button>}
      </div>
    </>
  );
}

function MyBookings({ bookings }: { bookings: Booking[] }) {
  const [open, setOpen] = useState<string | null>(null);
  if (bookings.length === 0)
    return (
      <div className="panel wizard__panel text-center">
        <h3 className="sub-title">No bookings yet</h3>
        <p className="muted">Your seva and donation receipts will appear here.</p>
      </div>
    );

  return (
    <div className="grid" style={{ gap: "1rem" }}>
      {bookings.map((b) => (
        <div key={b.id}>
          <button className="pick" style={{ width: "100%" }} onClick={() => setOpen(open === b.id ? null : b.id)}>
            <span>
              <b>{b.itemName}</b>
              <span className="te">{b.kind === "seva" ? `${b.date} · ${b.slot}` : "Donation"} · {b.id}</span>
            </span>
            <span className="p">{b.amount === 0 ? "Free" : inr(b.amount)}</span>
          </button>
          {open === b.id && <div className="mt-2"><TicketView b={b} /></div>}
        </div>
      ))}
    </div>
  );
}
