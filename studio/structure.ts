import type {StructureBuilder, StructureResolverContext} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Project'),

      orderableDocumentListDeskItem({
        type: 'technology',
        title: 'Technology',
        S,
        context,
      }),

      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('aboutPage').title('About page'),
    ])
