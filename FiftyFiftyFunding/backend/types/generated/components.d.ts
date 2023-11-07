import type { Schema, Attribute } from '@strapi/strapi';

export interface PageComponentsHeaderComponent extends Schema.Component {
  collectionName: 'components_page_components_header_components';
  info: {
    displayName: 'HeaderComponent';
  };
  attributes: {
    TextBlock: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-components.header-component': PageComponentsHeaderComponent;
    }
  }
}
