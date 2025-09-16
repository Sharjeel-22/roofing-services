import Payment from '@/components/Payment';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Payment - Smart Roof Inc',
  description: 'Make a secure payment for your roofing project in 3 easy steps. Pay safely with ACH transfer or credit card.',
  keywords: 'payment, secure payment, roofing payment, Smart Roof Inc',
};

export default function PaymentPage(): JSX.Element {
  return <Payment />;
}