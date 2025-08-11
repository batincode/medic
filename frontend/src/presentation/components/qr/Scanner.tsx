import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface Props {
  onResult: (text: string) => void;
}

const Scanner: React.FC<Props> = ({ onResult }) => {
  const readerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!readerRef.current) return;
    const scanner = new Html5QrcodeScanner(readerRef.current.id, { fps: 10, qrbox: 250 }, false);
    scanner.render((decoded) => onResult(decoded), console.error);
    return () => scanner.clear().catch(console.error);
  }, [onResult]);

  return <div id="qr-reader" ref={readerRef}></div>;
};

export default Scanner;

