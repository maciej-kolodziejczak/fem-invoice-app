import { Button } from '@/components/Button';

import s from './Invoices.module.scss';

export function Invoices() {
  return (
    <div className={s.root}>
      <div className={s.title}>
        <h1>Invoices</h1>
        <h4>No invoices</h4>
      </div>

      <Button type='button' variant='primary'>Primary</Button>
      <Button type='button' variant='primary' icon="plus">Primary</Button>
      <Button type='button' variant='danger'>Danger</Button>
      <Button type='button' variant='secondary'>Secondary</Button>
      <Button type='button' variant='tetriary'>Tetriary</Button>
      <Button type='button' variant='tetriary'>+ Tetriary</Button>
    </div>
  );
}