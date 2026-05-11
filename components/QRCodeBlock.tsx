"use client";
import { QRCodeSVG } from "qrcode.react";
import { useLang } from "@/context/LangContext";
import { siteData } from "@/app/data";

const PDF_URL = "https://canva.link/fsk4gre0jjba0d0";

const DownloadIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function QRCodeBlock() {
  const { lang } = useLang();
  const d = siteData[lang];

  return (
    <div className="qr-card">
      <div className="qr-image-wrap">
        <QRCodeSVG value={PDF_URL} size={110} fgColor="#1a1a2e" bgColor="#ffffff" level="M"
          style={{ display: "block" }} />
      </div>
      <p className="qr-label">{d.scanLabel}</p>
      <p className="qr-sublabel">{d.scanSublabel}</p>
      <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="qr-direct-link">
        <DownloadIcon />
        {d.directDownload}
      </a>
    </div>
  );
}
