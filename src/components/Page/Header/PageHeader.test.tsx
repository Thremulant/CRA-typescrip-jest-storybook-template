import React from 'react'
import { screen, render } from '@testing-library/react';
import { PageHeader } from './PageHeader';
import { QuickLink } from './models/index';

describe('PAGE HEADER.', () => {
  test('Render the <PageHeader/> with basic text and NO quickLinks', async () => {
    render(
      <PageHeader title='My new page' />
    )

    expect(screen.queryByTestId('title')).toBeInTheDocument();
    expect(screen.queryByTestId('quick-links')).not.toBeInTheDocument();
  });
  test('Render the <PageHeader/> with 2 quickLinks', async () => {
    const quickLinks: QuickLink[] = [
      { Text: 'First', LinkTo: '#' },
      { Text: 'Second', LinkTo: '#' }
    ]

    render(
      <PageHeader title='My new page' quickLinks={quickLinks} />
    )

    // console.log(screen.debug())
    // console.log(screen.queryAllByRole('link'))
    expect(screen.queryByTestId('title')).toBeInTheDocument();
    expect(screen.queryByTestId('quick-links')).toBeInTheDocument();
  });
});