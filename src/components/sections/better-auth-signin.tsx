"use client";

import { Button } from '@/components/ui/button';
import WhatsAppIcon from '../icons/WhatsAppIcon';

export function BetterAuthSignIn() {
  const phone = '6285738209427'; // ganti nomor tujuan
  const message = encodeURIComponent('Hello, I would like to discuss.');

  return (
    <div className="flex flex-col items-center gap-2 py-6">
      <Button
        onClick={() => window.open(`https://wa.me/${phone}?text=${message}`, '_blank')}
        variant="outline"
        size="lg"
        className="gap-2"
      >
        <WhatsAppIcon className="h-4 w-4 text-green-500" />
        Chat via WhatsApp
      </Button>
      <span className="text-xs text-muted-foreground">Connect via WhatsApp</span>
    </div>
  );
}
