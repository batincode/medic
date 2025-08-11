import React, { useState } from 'react';
import Scanner from '../components/qr/Scanner';

const ScanDevicePage: React.FC = () => {
  const [result, setResult] = useState<string>('');

  return (
    <div>
      <h2>Scan Device</h2>
      {result ? <p>Scanned: {result}</p> : <Scanner onResult={setResult} />}
    </div>
  );
};

export default ScanDevicePage;

