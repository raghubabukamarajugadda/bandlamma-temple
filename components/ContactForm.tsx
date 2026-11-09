"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Seva enquiry");
  const [msg, setMsg] = useState("");
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter a valid 10-digit mobile";
    if (msg.trim().length < 10) e.msg = "Please write at least a line or two";
    setErrs(e);
    if (Object.keys(e).length) return;
    try {
      const list = JSON.parse(localStorage.getItem("bmd_enquiries") || "[]");
      list.unshift({ name, phone, subject, msg, at: new Date().toLocaleString("en-IN") });
      localStorage.setItem("bmd_enquiries", JSON.stringify(list));
    } catch { /* noop */ }
    setSent(true);
  };

  if (sent)
    return (
      <div className="panel" style={{ padding: "2rem", textAlign: "center" }}>
        <h3 className="sub-title">Message noted</h3>
        <p className="muted">
          Your enquiry has been recorded. The devastanam office will reach you on{" "}
          <b>{phone}</b>. For urgent matters please call <b>086432 55155</b> during
          temple hours.
        </p>
        <button className="btn btn--line mt-2" onClick={() => { setSent(false); setName(""); setPhone(""); setMsg(""); }}>
          Send another
        </button>
      </div>
    );

  return (
    <div className="panel" style={{ padding: "2rem" }}>
      <div className="form-grid">
        <div className="field">
          <label>Your name <span className="req">*</span></label>
          <input value={name} className={errs.name ? "invalid" : ""} onChange={(e) => setName(e.target.value)} />
          {errs.name && <span className="err">{errs.name}</span>}
        </div>
        <div className="field">
          <label>Mobile <span className="req">*</span></label>
          <input inputMode="numeric" maxLength={10} value={phone} className={errs.phone ? "invalid" : ""} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} />
          {errs.phone && <span className="err">{errs.phone}</span>}
        </div>
        <div className="field full">
          <label>Subject</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            {["Seva enquiry", "Homam sponsorship", "Donation", "Accommodation / visit", "Volunteering", "Other"].map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="field full">
          <label>Message <span className="req">*</span></label>
          <textarea rows={4} value={msg} className={errs.msg ? "invalid" : ""} onChange={(e) => setMsg(e.target.value)} placeholder="How can the devastanam help you?" />
          {errs.msg && <span className="err">{errs.msg}</span>}
        </div>
      </div>
      <button className="btn mt-2" onClick={submit}>Send enquiry</button>
    </div>
  );
}
