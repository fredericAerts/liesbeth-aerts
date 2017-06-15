import { Injectable } from '@angular/core';

import { LaGalleryItem } from './la-gallery-item';
import { LaAdvocacyComponent } from '../la-advocacy/la-advocacy.component';
import { LaOutreachComponent } from '../la-outreach/la-outreach.component';
import { LaWritingEditingComponent } from '../la-writing-editing/la-writing-editing.component';
import { LaResearchComponent } from '../la-research/la-research.component';

@Injectable()
export class LaGalleryService {
  items: LaGalleryItem[] = [
    {
      component: LaOutreachComponent,
      lightTheme: false,
      title: 'Outreach',
      intro: 'Sed posuere consectetur est at lobortis.',
      cta: 'View more',
    },
    {
      component: LaResearchComponent,
      lightTheme: false,
      title: 'Research',
      intro: 'Sed posuere consectetur est at lobortis.',
      cta: 'View more',
    },
    {
      component: LaWritingEditingComponent,
      lightTheme: true,
      title: 'Writing & editing',
      intro: 'Sed posuere consectetur est at lobortis.',
      cta: 'View more',
    },
    {
      component: LaAdvocacyComponent,
      lightTheme: false,
      title: 'Advocacy',
      intro: 'Sed posuere consectetur est at lobortis.',
      cta: 'View more',
    }
  ]

  constructor() { }

}
