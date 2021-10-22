import * as React from 'react';
import { ReactElement } from 'react';
import { QuickLink } from './models/index';

// import '@styles/styles.less';

interface IPageHeader { title: string, quickLinks?: QuickLink[] }

export const PageHeader = ({ title, quickLinks }: IPageHeader): ReactElement => {
  return (
    <div className='d-flex flex-row w-100 justify-content-between align-items-center'>
      <h1 data-testid='title'>{title}</h1>
      {quickLinks && quickLinks.length > 0 &&
        <div className="well well-sm" data-testid='quick-links' >
          <strong>Quick Links:</strong>
          {quickLinks.map((x, i) => {
            return (
              <a key={i} className="quick-link" href={x.LinkTo} data-original-title={x.Tooltip && x.Tooltip} >{x.Text}</a>
            );
          })}
        </div>
      }
    </div>
  );
};
